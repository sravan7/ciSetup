
beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});
test("login end to end ", async ()=>{
    await page.$eval('#login-email', el => el.value = 'sravan@email.com');
    await page.$eval('#login-password', el => el.value = '1234');
    const loginButton = await page.click('#custom-button',{timeout: 1000}).catch(e => e);;
    const dashboard = await page.$(".dashboard");
    let result = dashboard? true:false; 
    expect(result).toBe(true);
}, 30000)
