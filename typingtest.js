const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://humanbenchmark.com/tests/typing');

    const combinedText = await page.evaluate(() => {
        const elements = document.getElementsByClassName('letters')[0].children;
        let combinedInnerText = '';

        for (let element of elements) {
            combinedInnerText += element.innerText;
        }
        return combinedInnerText;
    });

    await page.click('.letters');

    await page.evaluate((content) => {
        const element = document.getElementsByClassName('letters')[0];

        for (let char of content) {
            const eventInit = { key: char, code: `Key${char.toUpperCase()}`, charCode: char.charCodeAt(0), keyCode: char.charCodeAt(0), which: char.charCodeAt(0), bubbles: true };
            const keydownEvent = new KeyboardEvent('keydown', eventInit);
            element.dispatchEvent(keydownEvent);
            const keyupEvent = new KeyboardEvent('keyup', eventInit);
            element.dispatchEvent(keyupEvent);
        }
    }, combinedText);
})();
