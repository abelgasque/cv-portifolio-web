require('dotenv').config();

const fs = require('fs');
const path = require('path');

const {
  APP_DEBUG,
  APP_NAME,
  APP_VERSION,
  APP_CONFIG,
  FIREBASE_CONFIG
} = process.env;

const production = (APP_DEBUG === "production") ? true : false;
const dir = "src/environments";
const prodFile = (production) ? "environment.prod.ts" : "environment.ts";

const formattedContent = `export const environment = {
  production: ${production},
  name: "${APP_NAME}",
  version: "${APP_VERSION}",
  appConfig: ${APP_CONFIG},
  firebaseConfig: ${FIREBASE_CONFIG},
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