const fs = require('fs');
const path = require('path');

const production = (process.env.APP_DEBUG === "production" || process.env.APP_DEBUG === 'development');
const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appConfig = process.env.APP_CONFIG;
const firebaseConfig = process.env.FIREBASE_CONFIG;

const dir = "src/environments";
const prodFile = production ? "environment.prod.ts" : "environment.ts";

const formattedContent = `export const environment = {
  production: ${production},
  name: "${appName}",
  version: "${appVersion}",
  appConfig: ${appConfig},
  firebaseConfig: ${firebaseConfig},
};`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    fs.writeFileSync(path.join(dir, prodFile), formattedContent);
    console.log(`Arquivo ${prodFile} criado com sucesso!`, formattedContent);
  } catch (error) {
    console.error("Erro ao escrever o arquivo:", error);
    process.exit(1);
  }
});