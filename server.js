const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

packageJson.name = process.env.APP_NAME || packageJson.name;
packageJson.version = process.env.APP_VERSION || packageJson.version;

const production = (process.env.APP_DEBUG === "production" || process.env.APP_DEBUG === 'development');
const appName = process.env.APP_NAME;
const appVersion = process.env.APP_VERSION;
const appConfig = process.env.APP_CONFIG;
const firebaseConfig = process.env.FIREBASE_CONFIG;

const dir = "src/environments";
const devFile = "environment.ts";
const prodFile = "environment.prod.ts";

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
    fs.writeFileSync(path.join(dir, devFile), formattedContent);
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
    console.log(`Arquivos ${prodFile} e ${devFile} criados com sucesso!`);
  } catch (error) {
    console.error("Erro ao escrever os arquivos:", error);
    process.exit(1);
  }
});