const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto("https://staging.paymi.com/users/sign_in")

    await page.type("#user_email", "testmailDavydPolianchuk@gmail.com")
    await page.type("#user_password", "DavydPolianchuk_123")

    await Promise.all([page.click("#log_in"), page.waitForNavigation()])

    await browser.close()

}

start()