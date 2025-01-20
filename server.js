const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const prodFile = "environment.prod.ts";

const content = JSON.parse(process.env.ENV_APP);
const formattedContent = `export const environment = ${JSON.stringify(content, null, 2)};`;

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