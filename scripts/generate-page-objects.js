import { glob } from 'glob';

import { extractChallengeNumberFromPath, extractId, extractTitle, writeDataToJson } from './utils.js';

(async () => {
  const paths = await glob('../src/pages/**/*.tsx', { cwd: 'scripts' });

  const sortedPaths = paths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const pageObjects = sortedPaths
    .map((path) => ({
      challengeNumber: extractChallengeNumberFromPath(path),
      id: extractId(path),
      path: path.replace('../src/pages', '').replace('.tsx', ''),
      title: extractTitle(path)
    }))
    .filter((obj) => obj.challengeNumber !== '');

  await writeDataToJson(pageObjects, 'src/data/icodethis.json');
})();
