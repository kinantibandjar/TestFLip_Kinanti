const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class userInformation extends Page {
    /**
     * define selectors using getter methods
     */
    get choosetitle () {return $('//*[@resource-id="title"]');}
    //get txtFirstName () {return $('id= firstName');}
    get txtMiddleName () {return $('//*[@resource-id="middleName"]');}
    get txtLastName () {return $('//*[@resource-id="lastName"]');}
    get txtEmail () {return $('//*[@resource-id="email"]');}
    get txtPhoneNumber () {return $('//*[@resource-id="phone"]');}
    get inputDateOfBirth () {return $('//*[@resource-id="dob"]');}
    //get inputGender () {return $('//*[@resource-id="dob"]');}
    get chooseProvince () {return $('//*[@resource-id="province"]');}
    get chooseCity () {return $('//*[@resource-id="city"]');}
    get btnSubmit () {return $('~Submit');}

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    /*async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }*/

    async inputFirstName(userFirstName){
        await this.txtFirstName.setValue(userFirstName);
    }
    async inputMiddleName(userMiddleName){
        await this.txtMiddleName.setValue(userMiddleName);
    }
    async inputLastName(userLastName){
        await this.txtLastName.setValue(userLastName);
    }
    async inputEmail(userEmail){
        await this.txtEmail.setValue(userEmail);
    }
    async inputPhoneNumber(userPhoneNumber){
        await this.txtPhoneNumber.setValue(userPhoneNumber);
    }

    async buttonSubmit(){
        await this.btnSubmit.waitForDisplayed({ timeout: 1000 });
        await this.btnSubmit.click();
    }



    /**
     * overwrite specific options to adapt it to page object
     */

}

module.exports = new userInformation();
