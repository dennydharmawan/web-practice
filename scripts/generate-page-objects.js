import { glob } from 'glob';
import pMap from 'p-map';

import {
  extractChallengeNumberFromPath,
  extractId,
  extractTitle,
  scrapeImage,
  writeDataToJson
} from './utils.js';

(async () => {
  const paths = await glob('../src/pages/**/*.tsx', { cwd: 'scripts' });

  const sortedPaths = paths
    .filter((path) => path.includes('icodethis') && !path.includes('icodemas'))
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

  await writeDataToJson(pageObjects, 'src/data/icodethis.json');
})();
