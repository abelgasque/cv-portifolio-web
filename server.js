const fs = require('fs');
const path = require('path');

const {
  APP_DEBUG,
  APP_NAME,
  APP_VERSION,
  APP_CONFIG,
  FIREBASE_CONFIG
} = process.env;

const production = (APP_DEBUG === "production" || APP_DEBUG === 'development');
const dir = "src/environments";
const prodFile = production ? "environment.prod.ts" : "environment.ts";

const formattedContent = `export const environment = {
  production: ${production},
  name: "${APP_NAME}",
  version: "${APP_VERSION}",
  appConfig: ${APP_CONFIG},
  firebaseConfig: ${FIREBASE_CONFIG},
};`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    fs.writeFileSync(path.join(dir, prodFile), formattedContent);
    console.log(`Arquivo ${prodFile} criado com sucesso!`, JSON.parse(formattedContent));
  } catch (error) {
    console.error("Erro ao escrever o arquivo:", error);
    process.exit(1);
  }
});