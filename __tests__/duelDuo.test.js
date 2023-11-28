const { Builder, Browser, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome"); //undo this line to return code back to its original state, it was not initially included in code

const chromedriver = require("chromedriver"); //undo this line to return code back to its original state, it was not initially included in code

let driver;

beforeEach(async () => {
  //this is the original code:driver = await new Builder().forBrowser(Browser.CHROME).build()
  driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("page loads with 2 robots", async () => {
    await driver.get("http://localhost:8000");
    const robots = await driver.findElements(By.className("robot"));
    expect(robots.length).toBe(2);
  });
  test("clicking Draw button displays div with id 'choices'", async () => {
    await driver.get("http://localhost:8000");
    const drawBtn = await driver.findElement(By.id("drawBtn"));
    await drawBtn.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isDisplayed = await choicesDiv.isDisplayed();
    expect(isDisplayed).toBe(true);
  });
});
