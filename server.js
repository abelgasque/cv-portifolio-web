const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const prodFile = "environment.prod.ts";

const content = `${process.env.ENV_APP}`;

if (!fs.existsSync(dir)) {
    console.log(`Diretório ${dir} não existe. Criando agora...`);
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    fs.writeFileSync(path.join(dir, prodFile), content, { encoding: 'utf8' });
    console.log(`Arquivo ${prodFile} criado ou sobrescrito com sucesso.`);
    console.log("Conteúdo gerado:\n", content);
  } catch (error) {
    console.error(`Erro ao escrever no arquivo ${prodFile}:`, error);
    process.exit(1);
  }