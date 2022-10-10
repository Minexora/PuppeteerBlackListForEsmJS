import puppeteer from "puppeteer"

const browser = await puppeteer.launch({
    headless: false,
});
const page = await browser.newPage();

async function getSourceData({ url = "", fn }) {
    await page.goto(url, { waitUntil: "networkidle2" });
    const res = await page.evaluate(fn).catch(err => {
        console.log("[-] There is error in getSourceData function from '/loaders/puppeteer.js'")
        console.log("Error:", err)
    });
    if (res)
        console.log("[+] Data received. Sending ...");
    else
        console.log("[-] Data could not be retrieved in getSourceData function from '/loaders/puppeteer.js'");

    return res;
}


export default {
    puppeteer,
    browser,
    page,
    getSourceData
}