const { expect } = require('@wdio/globals')
const userInformation = require('../pageobjects/login.page')
const page = require('../pageobjects/page')
const SecurePage = require('../pageobjects/secure.page')
//const loginPage = require('../pageobjects/login.page')

describe('User Information', () => {

    it('Input User Information All Field',async()=>{

        browser.url('https://flip-sample-form.onrender.com/');

        //variable declaration
        let randomFirstName = 'First ' + Math.random();
        let randomMiddleName = 'Middle ' + Math.random();
        let randomLastName = 'Last ' + Math.random();


        //choose Title
        const drpDowntitle = await $('//*[@id="title"]');
        await drpDowntitle.selectByIndex(3);

        //input FirstName
        const txtFirstName = await $('//*[@id="firstName"]');
        await txtFirstName.setValue(randomFirstName);

        //input MiddleName
        const txtMiddleName = await $('//*[@id="middleName"]');
        await txtFirstName.setValue(randomMiddleName);

        //input LastName
        const txtLastName = await $('//*[@id="lastName"]');
        await txtFirstName.setValue(randomLastName);

        //input Email
        const txtEmail = await $('//*[@id="email"]');
        await txtEmail.setValue("User@gmail.com");

        //input Phone Number
        const txtPhoneNumber = await $('//*[@id="phone"]');
        await txtPhoneNumber.setValue("08999999999");

        //Choose Date Picker
        const dtpckDOB = await $('//*[@id="dob"]');
        await dtpckDOB.setValue('06-01-1996');

        //Scroll
        const btnSubmit = await $('//*[@name="action"]');
        await btnSubmit.scrollIntoView();

        //click toggle gender
        const gndrToggle = await $('//*[@class="toggle-switch"]');
        await gndrToggle.click();

        //choose province
        const drpDownProvince = await $('//*[@id="province"]');
        await drpDownProvince.waitForDisplayed();
        await drpDownProvince.selectByIndex(2);

        //choose city
        const drpDownCity = await $('//*[@id="city"]');
        await drpDownCity.waitForDisplayed();
        await drpDownCity.selectByIndex(3);

        //click button submit
        await btnSubmit.click();

    })

    it('Input User Information All Field',async()=>{

        browser.url('https://flip-sample-form.onrender.com/');


        //Scroll
        const btnSubmit = await $('//*[@name="action"]');
        await btnSubmit.scrollIntoView();

        //click button submit
        await btnSubmit.click();

        

    })

    it('Error User Information All Field',async()=>{

        browser.url('https://flip-sample-form.onrender.com/');

        let basic_information = [{
            firstName: '',
            middleName: '',
            lastName: '',
            email:'',
            phoneNumber: '',

            errorMessage: '',



        }]

        //variable declaration
        let randomFirstName = 'First ' + Math.random();
        let randomMiddleName = 'Middle ' + Math.random();
        let randomLastName = 'Last ' + Math.random();


        //choose Title
        const drpDowntitle = await $('//*[@id="title"]');
        await drpDowntitle.selectByIndex(3);

        //input FirstName
        const txtFirstName = await $('//*[@id="firstName"]');
        await txtFirstName.setValue(randomFirstName);

        //input MiddleName
        const txtMiddleName = await $('//*[@id="middleName"]');
        await txtFirstName.setValue(randomMiddleName);

        //input LastName
        const txtLastName = await $('//*[@id="lastName"]');
        await txtFirstName.setValue(randomLastName);

        //input Email
        const txtEmail = await $('//*[@id="email"]');
        await txtEmail.setValue("User@gmail.com");

        //input Phone Number
        const txtPhoneNumber = await $('//*[@id="phone"]');
        await txtPhoneNumber.setValue("08999999999");

        //Choose Date Picker
        const dtpckDOB = await $('//*[@id="dob"]');
        await dtpckDOB.setValue('06-01-1996');

        //Scroll
        const btnSubmit = await $('//*[@name="action"]');
        await btnSubmit.scrollIntoView();

        //click toggle gender
        const gndrToggle = await $('//*[@class="toggle-switch"]');
        await gndrToggle.click();

        //choose province
        const drpDownProvince = await $('//*[@id="province"]');
        await drpDownProvince.waitForDisplayed();
        await drpDownProvince.selectByIndex(2);

        //choose city
        const drpDownCity = await $('//*[@id="city"]');
        await drpDownCity.waitForDisplayed();
        await drpDownCity.selectByIndex(3);

        //click button submit
        await btnSubmit.click();

    })

})

