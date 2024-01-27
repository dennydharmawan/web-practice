import fs from 'fs-extra';

export async function writeDataToJson(data, path) {
  try {
    // Convert the data to JSON format
    const jsonData = JSON.stringify(data, null, 2);

    // Write the JSON data to the file
    await fs.outputFile(path, jsonData);

    console.log(`Data successfully written to ${path}`);
  } catch (error) {
    console.error(`Error writing data to ${path}`, error);
  }
}

export function extractChallengeNumberFromPath(path) {
  const match = path.match(/\/icodethis\/(\d+)-[a-z-]+/);

  return match ? match[1] : '';
}

export function extractTitle(path) {
  const match = path.match(/\/icodethis\/\d+-(.+)$/);

  return match ? titleCase(match[1].replace(/-/g, ' ')) : ''; // Replace hyphens with spaces
}

export function extractId(path) {
  const match = path.match(/\/icodethis\/\d+-(.+)$/);

  return match ? match[1].replace(/-/g, '-') : ''; // Replace hyphens with dash
}

export function titleCase(str) {
  return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

const myVar = 'asd';

export default myVar;
