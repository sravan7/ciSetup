
beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

test("login end to end ", async ()=>{
    await page.$eval('#login-email', el => el.value = 'sravan@email.com');
    await page.$eval('#login-password', el => el.value = '1234');
    await page.click('#custom-button',{timeout: 1000}).catch(e => e);;
    const dashboard = await page.$(".dashboard");
    let result = dashboard? true:false; 
    expect(result).toBe(true);
}, 30000)

let inboxCount =2;
test("check inbox count emails",  async ()=>{
    let count = await page.evaluate(()=>{
        return document.getElementsByClassName("mail-item").length;
    })
    expect(inboxCount).toBe(count);
}, 30000)

let unreadCount=1;
test("read popup open and unead mail count",  async ()=>{
    await page.evaluate(()=>{
         document.getElementsByClassName("unreadMail")[0].querySelector(".mail-item-group").click();
    });

    await page.evaluate(()=>{
        document.querySelector(".popup-box");
    })
    await page.evaluate(()=>{
        document.querySelector(".close").click();
    })
    let count = await page.evaluate(()=>{
       return document.getElementsByClassName("unreadMail").length;
   });
    expect(unreadCount).toBe(count);
}, 30000);
let sentMailcount=1;
test("sent mail count",  async ()=>{
    await page.evaluate(()=>{
         document.getElementsByClassName("sent")[0].click();
    });
    let count = await page.evaluate(()=>{
        return document.getElementsByClassName("mail-item").length;
    });
    expect(sentMailcount).toBe(count);
}, 30000);

let toMail= "sravan@email.com"
let subject = "Test mail";
let body = "Hi this is test mail";

test("compose mail",  async ()=>{
    await page.evaluate(()=>{
         document.getElementsByClassName("mail-compose-button")[0].click();
    });
    await page.evaluate((toMail) =>{  document.querySelector(".textarea-to").value = toMail},toMail);
    await (await page.$('.textarea-to')).press('Enter');
    await page.evaluate((subject)=>{  document.querySelector("#popup-subject").value = subject}, subject);
    await page.evaluate((body)=> { document.querySelector("#popup-body").value = body},body);
    await page.click(".send");
    await page.evaluate(()=>{
        document.getElementsByClassName("inbox")[0].click();
   });
   let count = await page.evaluate(()=>{
    return document.getElementsByClassName("unreadMail").length;
});
 expect(2).toBe(count);
}, 30000);