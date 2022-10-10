import _conf from "./config/index.js";
import puppeteerLoaders from "./loaders/puppeteer.js";
import sourceIpDomainMailUrlServices from "./services/source_ip_domain_mail_url.js";


const conf = _conf();

async function getUrlsListData() {
    conf.urls.forEach(async (item) => {
        let puppeteer_res = await puppeteerLoaders.getSourceData({ url: item.url, fn: sourceIpDomainMailUrlServices[item.fn] });
        puppeteer_res.forEach(ip => {
            console.log(`\t\t {\n\tValue:${ip}\n\tType:${item.type}\n}`);
        });
    })
}

await getUrlsListData();
console.log("[+] Complated Progress.");