require('dotenv').config();
const fs = require('fs');

const packageJson = require('../../../package.json');
packageJson.name = process.env.APP_NAME || packageJson.name;
packageJson.version = process.env.APP_VERSION || packageJson.version;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
    console.log(`Versão atualizada com sucesso!`);
  } catch (error) {
    console.error("Erro ao atualizar versão:", error);
    process.exit(1);
  }
});

const path = require('path');
const dir = "src/environments";
const files = ["environment.ts", "environment.prod.ts"];

const environmentVariables = {
  production: (!process.env.APP_DEBUG === "debug"),
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
  appConfig: {
    avatarImg: process.env.APP_AVATAR_IMG,
    cvImg: process.env.APP_CV_FILE
  },
  firebaseConfig: (process.env.APP_DEBUG === "development") ? process.env.FIREBASE_CONFIG : null,
};

const formattedContent = `export const environment = ${JSON.stringify(environmentVariables, null, 2)};`;

fs.mkdir(dir, { recursive: true }, (err) => {
  if (err) {
    console.error("Erro ao criar diretório:", err);
    process.exit(1);
  }

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    fs.writeFile(filePath, formattedContent, (err) => {
      if (err) {
        console.error(`Erro ao escrever o arquivo ${file}:`, err);
        process.exit(1);
      }
      console.log(`Arquivo ${file} criado com sucesso!`);
    });
  });
});