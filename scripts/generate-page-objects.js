import { createRequire } from 'module';
import { glob } from 'glob';
import pMap from 'p-map';

import {
  extractChallengeNumberFromPath,
  extractId,
  extractTitle,
  scrapeImage,
  writeDataToJson
} from './utils.js';

const require = createRequire(import.meta.url);
const challenges = require('../src/data/icodethis.json');

(async () => {
  const paths = await glob('../src/pages/**/*.tsx', { cwd: 'scripts' });

  const sortedPaths = paths
    .filter(
      (path) => path.includes('icodethis') && !path.includes('icodemas') && !path.includes('restaurant-app')
    )
    // .filter((path) => {
    //   const challengeNumber = extractChallengeNumberFromPath(path);

    //   if (!challengeNumber) {
    //     return false;
    //   }

    //   return !doesChallengeExist(challenges, challengeNumber);
    // })
    .map((path) => path.replace(/\.tsx$/, ''))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const pageObjects = await pMap(
    sortedPaths,
    async (path) => {
      const challengeNumber = extractChallengeNumberFromPath(path);

      let img = null;
      if (challengeNumber !== '') {
        console.log(`https://icodethis.com/challenges/${challengeNumber}`);

        img = await scrapeImage(`https://icodethis.com/challenges/${challengeNumber}`);
        console.log(img);
      }

      return {
        challengeNumber,
        id: extractId(path),
        img,
        path: path.replace('../src/pages', ''),
        title: extractTitle(path)
      };
    },
    { concurrency: 5 }
  );

  if (pageObjects.length > 0) {
    const combinedPageObjects = challenges.concat(pageObjects);

    await writeDataToJson(combinedPageObjects, 'src/data/icodethis.json');
  } else {
    console.log('No new challenges found');
  }
})();
