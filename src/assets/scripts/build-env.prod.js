require('dotenv').config();
const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const files = ["environment.ts", "environment.prod.ts"];

const packageJsonPath = path.resolve(__dirname, '../../../package.json');
const packageJson = require(packageJsonPath);

Object.assign(packageJson, {
  name: process.env.APP_NAME || packageJson.name,
  version: process.env.APP_VERSION || packageJson.version,
});

try {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("Versão atualizada no package.json com sucesso!");
} catch (error) {
  console.error("Erro ao atualizar package.json:", error);
  process.exit(1);
}

const environmentVariables = {
  production: process.env.APP_DEBUG !== "debug",
  name: process.env.APP_NAME,
  version: process.env.APP_VERSION,
  avatarImg: process.env.APP_AVATAR_IMG,
};

const formattedContent = `export const environment = ${JSON.stringify(environmentVariables, null, 2)};`;

fs.mkdirSync(dir, { recursive: true });
files.forEach((file) => {
  const filePath = path.join(dir, file);
  try {
    fs.writeFileSync(filePath, formattedContent);
    console.log(`Arquivo ${file} criado com sucesso!`);
  } catch (error) {
    console.error(`Erro ao escrever o arquivo ${file}:`, error);
    process.exit(1);
  }
});