const {Builder, By, Key, util, Browser} = require("selenium-webdriver");
async function googleSearch() {
    let driver = await new Builder().forBrowser("chrome").build();
    //open browser
    await driver.get("http://google.com");
    await driver.manage().window().maximize();
    
    //search keyword
    await driver.findElement(By.xpath('//*[@id="zV9nZe"]/div')).click();
    await driver.findElement(By.name("q")).sendKeys("Mercedes",Key.RETURN);
    await driver.sleep(2000);
    
    //selectiog a link from the search list
    await driver.findElement(By.xpath('//div[@class="yuRUbf"]/a[@href="https://www.mercedes-benz.com/en/"]')).click();
    await driver.sleep(2000);
    
    //clicking ok
    //await driver.switchTo().alert();
    await driver.findElement(By.xpath('//*[@id="uc-btn-accept-banner"]')).click();

   //Select vehicles category
   //await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div[2]/nav/div/ul/li[2]/div/span')).click();
    await driver.findElement(By.xpath('//span[contains(text(),"Vehicles")]')).click();


    await driver.findElement(By.xpath('//span[contains(text(),"E-Class")]')).click();
    await driver.sleep(2000);
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    await driver.sleep(2000);
    await driver.close(Browser);
    await driver.switchTo().newWindow('tab');
    await driver.get("http://youtube.com");

    driver.close();
    //driver.quit();

}
googleSearch()
