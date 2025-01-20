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

const production = (APP_DEBUG === "production");
const dir = "src/environments";
const prodFile = production ? "environment.prod.ts" : "environment.ts";

let appConfig, firebaseConfig;

try {
  appConfig = JSON.parse(APP_CONFIG);
  firebaseConfig = JSON.parse(FIREBASE_CONFIG);
} catch (e) {
  console.error("Erro ao parsear variáveis de ambiente JSON:", e);
  process.exit(1);
}

const formattedContent = `export const environment = {
  production: ${production},
  name: "${APP_NAME}",
  version: "${APP_VERSION}",
  appConfig: ${JSON.stringify(appConfig, null, 2)},
  firebaseConfig: ${JSON.stringify(firebaseConfig, null, 2)},
};`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    fs.writeFileSync(path.join(dir, prodFile), formattedContent);
    console.log(`Arquivo ${prodFile} criado com sucesso!`);
  } catch (error) {
    console.error("Erro ao escrever o arquivo:", error);
    process.exit(1);
  }
});