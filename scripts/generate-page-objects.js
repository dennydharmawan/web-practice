import { createRequire } from 'module';
import { glob } from 'glob';

import {
  doesChallengeExist,
  extractChallengeNumberFromPath,
  extractId,
  extractTitle,
  writeDataToJson
} from './utils.js';

const require = createRequire(import.meta.url);
const challenges = require('../src/data/icodethis.json');

(async () => {
  const paths = await glob('../src/pages/**/*.tsx', { cwd: 'scripts' });

  const sortedPaths = paths
    .filter((path) => {
      const challengeNumber = extractChallengeNumberFromPath(path);

      if (!challengeNumber) {
        return false;
      }

      return !doesChallengeExist(challenges, challengeNumber);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const pageObjects = sortedPaths.map((path) => ({
    challengeNumber: extractChallengeNumberFromPath(path),
    id: extractId(path),
    path: path.replace('../src/pages', '').replace('.tsx', ''),
    title: extractTitle(path)
  }));

  if (pageObjects.length > 0) {
    const combinedPageObjects = challenges.concat(pageObjects);

    await writeDataToJson(combinedPageObjects, 'src/data/icodethis.json');
  } else {
    console.log('No new challenges found');
  }
})();
