const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const browserify = require("@cypress/browserify-preprocessor");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const {preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");

const timestamp = dayjs().format('YYYY-MM-DD_HH-mm-ss');

async function setupNodeEvents(on, config) {

  // This is required for the preprocessor to be able to generate JSON reports after each run, 
  // reads feature files, parses gherkin, matches step defintions and generates executable cypress tests
  await addCucumberPreprocessorPlugin(on, config, {

    //Tell Cypress exactly where your step definitions are located
    // stepDefinitions: [
    //       "cypress/integration/examples/cucumber_bdd/smoke/**/*.js"
    //     ],

  });

  //preprocessor for feature files
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );


  // implement node event listeners here --> download plugins
  on('task', { downloadFile });
  require('cypress-mochawesome-reporter/plugin')(on)


  return config;

  // on('after:spec', (spec, results) => {
  //   if (results && results.video) {
  //     // Do we have failures for any retry attempts?
  //     const failures = results.tests.some((test) =>
  //       test.attempts.some((attempt) => attempt.state === 'failed')
  //     )
  //     if (!failures) {
  //       // delete the video if the spec passed and no tests retried
  //       fs.rmSync(`cypress/reports/${timestamp}/videos`, { recursive: true, force: true });
  //       console.log('Folder and all its contents deleted!');
  //     } else {
  //       // There are failures → rename the video(s) to include spec, describe, it titles
  //       // const originalVideoPath = results.video; // full path of original video
  //       // results.tests.forEach((test) => {
  //       //   const failedAttempts = test.attempts.filter(a => a.state === 'failed');
  //       //   if (failedAttempts.length > 0) {
  //       //     // Build new filename
  //       //     // Build describe + it title safely
  //       //     const titlePath = test.titlePath || [test.title]; // fallback if titlePath undefined
  //       //     const describeTitle = titlePath.slice(0, -1).join(' - '); // parent blocks
  //       //     const itTitle = test.title;

  //       //     const specName = path.basename(spec.name, '.cy.js');

  //       //     // Build final filename
  //       //     const newFileName = `${specName} - ${describeTitle} - ${itTitle}.mp4`;
  //       //     const newVideoPath = path.join(`cypress/reports/${timestamp}/videos`, newFileName);

  //       //     // Move/rename video
  //       //     fs.renameSync(originalVideoPath, newVideoPath);
  //       //     console.log(`Video renamed to: ${newVideoPath}`);
  //       //  }
  //       //});
  //     }
  //   }
  // })

};


module.exports = defineConfig({

  //projectId: "exo9bk",

  //Reporter options
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `cypress/reports/${timestamp}/html`,   // ✅ custom directory for reports
    reportFilename: `[name]-report`,
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,           // ✅ embeds screenshots in the HTML
    inlineAssets: true,
    ignoreVideos: true
  },

  //Options for screenshots and videos for failed test cases
  screenshotsFolder: `cypress/reports/${timestamp}/screenshots`,  // ✅ custom path for screenshots
  videosFolder: `cypress/reports/${timestamp}/videos`,            // optional custom path for videos
  video: false,
  //videoUploadOnPasses: false,

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   on('task', {downloadFile})
    //   require('cypress-mochawesome-reporter/plugin')(on); 

    //   on('after:spec', (spec, results) => {
    //     if (results && results.video) {
    //       // Do we have failures for any retry attempts?
    //       const failures = results.tests.some((test) =>
    //         test.attempts.some((attempt) => attempt.state === 'failed')
    //       )
    //       if (!failures) {
    //         // delete the video if the spec passed and no tests retried
    //         fs.rmSync(`cypress/reports/${timestamp}/videos`, { recursive: true, force: true });
    //         console.log('Folder and all its contents deleted!');
    //       } else {
    //         // There are failures → rename the video(s) to include spec, describe, it titles
    //         // const originalVideoPath = results.video; // full path of original video
    //         // results.tests.forEach((test) => {
    //         //   const failedAttempts = test.attempts.filter(a => a.state === 'failed');
    //         //   if (failedAttempts.length > 0) {
    //         //     // Build new filename
    //         //     // Build describe + it title safely
    //         //     const titlePath = test.titlePath || [test.title]; // fallback if titlePath undefined
    //         //     const describeTitle = titlePath.slice(0, -1).join(' - '); // parent blocks
    //         //     const itTitle = test.title;

    //         //     const specName = path.basename(spec.name, '.cy.js');

    //         //     // Build final filename
    //         //     const newFileName = `${specName} - ${describeTitle} - ${itTitle}.mp4`;
    //         //     const newVideoPath = path.join(`cypress/reports/${timestamp}/videos`, newFileName);

    //         //     // Move/rename video
    //         //     fs.renameSync(originalVideoPath, newVideoPath);
    //         //     console.log(`Video renamed to: ${newVideoPath}`);
    //         //  }
    //         //});
    //       }
    //     }
    //   })

    // },

    //to include which spec files to load
    setupNodeEvents,

    //Declaring global enviornment variables, top level config
    baseUrl: 'https://demo.codenbox.com/',
    defaultEmail: 'babycarrot@gmail.com',
    defaultPassword: 'Trucker1',

    //Glob pattern to get feature files
    specPattern: [
      "cypress/integration/examples/_practice/**/*.js",
      "cypress/integration/examples/cucumber_bdd/features/**/*.feature"
    ],

    chromeWebSecurity: false,

    //Declaring enviornment variables in the config.js file
    env: {

      //To run all the smoke tags --> npx cypress run --env TAGS="@smoke"
      TAGS: "@smoke", 
      QA: {
        baseUrl: 'https://codenboxautomationlab.com',
        practiceUrl: 'https://codenboxautomationlab.com/practice/'
      },

      production: {
        baseUrl: 'https://demo.codenbox.com/',
        practiceUrl: 'https://staging-api.demo.codenbox.com/'
      }

    }

  },
});
