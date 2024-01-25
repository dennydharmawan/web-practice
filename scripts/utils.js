import fs from 'fs-extra';
import puppeteer from 'puppeteer';

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

export async function scrapeImage(url) {
  try {
    const browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the image to be present in the DOM
    await page.waitForSelector('img[alt^="Challenge"]');

    // // Extract the image URL based on alt attribute starting with "Challenge"
    // const src = await page.$eval('img[alt^="Challenge"]', (img) => img.src);
    // const srcSet = await page.$eval('img[alt^="Challenge"]', (img) => img.srcset);
    const imageInfo = await page.evaluate(() => {
      return new Promise((resolve) => {
        const img = document.querySelector('img[alt^="Challenge"]');

        const checkForImage = () => {
          const actualSrc = img.getAttribute('src');
          if (img.complete && actualSrc && !actualSrc.startsWith('data:image')) {
            resolve({ src: actualSrc, srcSet: img.srcset });
          } else {
            setTimeout(checkForImage, 200); // Retry after 200 milliseconds
          }
        };

        // Start checking for the actual image
        checkForImage();
      });
    });

    await browser.close();

    // Prepend the base website URL to the relative paths
    const baseWebsiteURL = 'https://icodethis.com';
    const absoluteImageInfo = {
      src: new URL(imageInfo.src, baseWebsiteURL).href,
      srcSet: imageInfo.srcSet
        .split(',')
        .map((srcSet) => {
          const [src, size] = srcSet.trim().split(' ');
          return `${new URL(src, baseWebsiteURL).href} ${size}`;
        })
        .join(', ')
    };

    return absoluteImageInfo;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
