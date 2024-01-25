import puppeteer from 'puppeteer';

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
}

async function scrapeImage(url) {
  try {
    const browser = await puppeteer.launch({
      headless: true
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load' });
    await page.setViewport({
      height: 800,
      width: 1200
    });

    await autoScroll(page);

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

    console.log(imageInfo);

    await browser.close();

    return imageInfo;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

(async () => {
  const img = await scrapeImage('https://icodethis.com/challenges/426');

  console.log(img);
})();
