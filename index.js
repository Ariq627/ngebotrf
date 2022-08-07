const puppeteer = require('puppeteer-extra')
const randomize = require('randomatic')
var random = require('random-name')
const readline = require('readline-sync')
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const delay = require('delay');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const fsa = require("async-file");
const moment = require('moment');

const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });


const functionGetLink = (email, domain) => new Promise((resolve, reject) => {
    fetch(`https://generator.email/${domain}/${email}`, {
            method: "get",
            headers: {
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
                "accept-encoding": "gzip, deflate, br",
                cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
                "upgrade-insecure-requests": 1,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
            }
        })
        .then(res => res.text())
        .then(text => {
            let $ = cheerio.load(text);
            let src = $('tbody > tr > td > div > a');
            let srcc = src.attr('href')
            resolve(srcc);
        })
        .catch(err => reject(err));
});



(async() => {
    var tanyaemail = readline.question(`[ ${moment().format("HH:mm:ss")} ] ` + 'Domain email : ');
    var tanyareff = readline.question(`[ ${moment().format("HH:mm:ss")} ] ` + 'Kode reff : ');
    var jumlah = readline.question(`[ ${moment().format("HH:mm:ss")} ] ` + 'Jumlah reff : ')
    for (var i = 0; i < jumlah; i++) {

        try {
            var name = random.first()
            var lastname = random.last()
            var uname = `${name}${lastname}${randomize('0', 2)}`
            var uname1 = `${name}${lastname}${randomize('0', 2)}`
            var password = `${uname1}#`;
            var nohp = `821${randomize('0', 8)}`
            var email = uname + `@` + tanyaemail;
            var linkref = tanyareff;


            var browser = await puppeteer.launch({
                headless: true,
                ignoreHTTPSErrors: true,
                slowMo: 0,
                args: [
                    '--disable-web-security',
                    '--no-sandbox',
                    '--disable-web-security',
                    '--aggressive-cache-discard',
                    '--disable-cache',
                    '--disable-application-cache',
                    '--disable-offline-load-stale-cache',
                    '--disk-cache-size=0',
                    '--disable-background-networking',
                    '--disable-default-apps',
                    '--disable-extensions',
                    '--disable-sync',
                    '--disable-translate',
                    '--hide-scrollbars',
                    '--metrics-recording-only',
                    '--mute-audio',
                    '--no-first-run',
                    '--safebrowsing-disable-auto-update',
                    '--ignore-certificate-errors',
                    '--ignore-ssl-errors',
                    '--ignore-certificate-errors-spki-list',
                ]
            });

            const context = await browser.createIncognitoBrowserContext();
            const page = await context.newPage();
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Mencoba mendaftar pake email => ${email}`)
            await page.goto(`http://www.racingfactors.com/ref/${linkref}`, { waitUntil: 'networkidle2', timeout: 0 });


            await page.waitForSelector('.main-section > .main-section__left > .join-us-banner-v2 > div > .button')
            await page.click('.main-section > .main-section__left > .join-us-banner-v2 > div > .button')
            await delay(3000)
            await page.waitForSelector('.join-us__membership > .join-us__membership__plans > .join-us__membership__plans__item > .join-us__membership__plans__item__footer > .button')
            await page.click('.join-us__membership > .join-us__membership__plans > .join-us__membership__plans__item > .join-us__membership__plans__item__footer > .button', { waitUntil: 'load', timeout: 0 })
            await page.waitForSelector('input#joinEmailAddress')
            await page.click('input#joinEmailAddress')
            await page.type('input#joinEmailAddress', email)
            await delay(1000)
            await page.waitForSelector("input#joinConfirmEmailAddress")
            await page.click("input#joinConfirmEmailAddress")
            await page.type("input#joinConfirmEmailAddress", email)
            await delay(1000)
            await page.waitForSelector("input#joinPassword.form__row__password-field")
            await page.click("input#joinPassword.form__row__password-field")
            await page.type("input#joinPassword.form__row__password-field", password)
            await delay(1000)
            await page.waitForSelector("input#joinConfirmPassword.form__row__password-field")
            await page.click("input#joinConfirmPassword.form__row__password-field")
            await page.type("input#joinConfirmPassword.form__row__password-field", password)
            await delay(1000)
            await page.select('select[name="country"]', '01ezvgyfdhb3gt5gtrhse87t2d');
            await delay(1000)
            await page.waitForSelector("input#joinDisplayName")
            await page.click("input#joinDisplayName")
            await page.type("input#joinDisplayName", uname)
            await delay(1000)
            await page.waitForSelector("input#joinFirstName")
            await page.click("input#joinFirstName")
            await page.type("input#joinFirstName", name)
            await delay(1000)
            await page.waitForSelector("input#joinLastName")
            await page.click("input#joinLastName")
            await page.type("input#joinLastName", lastname)
            await delay(1000)
            await page.waitForSelector('#form > .form__row > label:nth-child(1) > .checkbox > span')
            await page.click('#form > .form__row > label:nth-child(1) > .checkbox > span')
            await delay(1000)
            await page.waitForSelector('#form > .form__row > label:nth-child(1) > .checkbox > span')
            await page.click('#form > .form__row > label:nth-child(1) > .checkbox > span')
            await delay(1000)
            await page.waitForSelector('#form > .form__row > label:nth-child(2) > .checkbox > span')
            await page.click('#form > .form__row > label:nth-child(2) > .checkbox > span')
            await delay(1000)
            await page.waitForSelector('.main-section > .main-section__left > .join-us__registration > #form > .button')
            await page.click('.main-section > .main-section__left > .join-us__registration > #form > .button')
            await delay(1000)
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses Daftar...`)


            let linkConfirm;
            do {
                linkConfirm = await functionGetLink(uname, email.split('@')[1]);
                console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Menunggu link verif..`)
            } while (!linkConfirm);
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `link is ${linkConfirm}..`)
            await page.goto(linkConfirm);
            await page.waitForSelector('main > .main-section > .main-section__left > .join-us__success > .button', { waitUntil: 'load', timeout: 0 })
            await page.click('main > .main-section > .main-section__left > .join-us__success > .button')
            await delay(1000)
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Mencoba login...`)
            await page.waitForSelector('input#loginEmailAddress', { waitUntil: 'load', timeout: 0 })
            await page.click('input#loginEmailAddress')
            await page.type('input#loginEmailAddress', email)
            await delay(1000)
            await page.waitForSelector('input#loginPassword')
            await page.click('input#loginPassword')
            await page.type('input#loginPassword', password)
            await delay(1000)
            await page.waitForSelector('.modal__overlay > .modal__window > .modal__login__form > .form__row > .button--large')
            await page.click('.modal__overlay > .modal__window > .modal__login__form > .form__row > .button--large')
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses login...`)
            await delay(2000)
            await page.waitForSelector('.root > div > .global-alert > .global-alert__button > .button:nth-child(1)')
            await page.click('.root > div > .global-alert > .global-alert__button > .button:nth-child(1)')
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Mencoba isi nomer...`)
            await page.waitForSelector('form > .verify-number__step__form > .form__row > .form__row__field-with-icon > input')
            await page.click('form > .verify-number__step__form > .form__row > .form__row__field-with-icon > input')
            await page.type('form > .verify-number__step__form > .form__row > .form__row__field-with-icon > input', nohp)
            await page.waitForSelector('.verify-number__step > form > .verify-number__step__form > .form__row > .button:nth-child(2)')
            await page.click('.verify-number__step > form > .verify-number__step__form > .form__row > .button:nth-child(2)')
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses isi nomer...`)

            await delay(2000)
            await browser.close();
            console.log(`[ ${moment().format("HH:mm:ss")} ] ` + `Sukses reff ke ${i}\n`)

        } catch (e) {
            await browser.close()
            console.log(e)
            i--
        }

    }


})();