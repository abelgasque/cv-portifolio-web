const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const prodFile = "environment.prod.ts";

const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appConfig = JSON.parse(process.env.APP_CONFIG);
const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const formattedContent = `export const environment = {
  production: true,
  name: "${appName}",
  version: "${appVersion}",
  appConfig: ${JSON.stringify(appConfig, null)},
  firebaseConfig: ${JSON.stringify(firebaseConfig, null)},
};`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("src doesn't exist, creating now", process.cwd());
    fs.mkdirSync(dir, { recursive: true });
  }
  try {
    fs.writeFileSync(path.join(dir, prodFile), formattedContent);
    console.log(`Successfully created ${prodFile}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});