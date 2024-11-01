import homepage from "../pages/homepage";
import productspage from "../pages/productspage";
import cartpage from "../pages/cartpage";
import login_registerpage from "../pages/login_registerpage";
import account_createdpage from "../pages/account_createdpage";
import checkoutpage from "../pages/checkoutpage";
import paymentpage from "../pages/paymentpage"
import paymentdonepage from "../pages/paymentdonepage";
const tests = require("../fixtures/testdata.json");

describe('Automation Challenge', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  });

  // Use of custom command to generate random number for the quantity products
  it('Add a product with a ramdong quantity and checkout without user ', () => {
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
  })

  // Here I'm using fixtures as data test with valid credential
  tests.forEach((test) => {
  it('Add a product with a ramdong quantity and checkout with a valid user ', () => {
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeloginEmail(test.vemail);
    login_registerpage.typeloginPassword(test.vpassword);
    login_registerpage.clickloginBtn();
  })
})

// Here I'm using fixtures as data test with invalid credential
  tests.forEach((test) => {
  it('Add a product with a ramdong quantity and checkout with a invalid user ', () => {
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeloginEmail(test.iemail);
    login_registerpage.typeloginPassword(test.ipassword);
    login_registerpage.clickloginBtn();
    login_registerpage.textloginForm();

  })
})
  
  // full flow with the extra steps using fakerjs and custom commands 
  it('Complete checkout process with ramdong data', () => {
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeSigupName();
    login_registerpage.typeSigupEmail();
    login_registerpage.clickSigupBtn()
    login_registerpage.clickGenderBtn();
    login_registerpage.typeSigupPassword();
    login_registerpage.typesSigupDays();
    login_registerpage.typesSigupMoth();
    login_registerpage.typesSigupYears();
    login_registerpage.typeSigupFName();
    login_registerpage.typeSigupLName();
    login_registerpage.typesigupCompany();
    login_registerpage.typesigupAddress();
    login_registerpage.typesigupCountry();
    login_registerpage.typesigupState();
    login_registerpage.typesigupCity();
    login_registerpage.typesigupZipCode();
    login_registerpage.typsigupMobileNumber();
    login_registerpage.clickSigupCreateAcountBtn();
    account_createdpage.accountcreatep();
    cy.screenshot("Account Create")
    account_createdpage.clickContinue();
    homepage.clickNavCart();
    cartpage.clickCheckout();
    checkoutpage.clickPlaceOrder();
    paymentpage.typeCartName();
    paymentpage.typeCartNumber();
    paymentpage.typeCartCVC();
    paymentpage.typeCartMM();
    paymentpage.typeCartYear();
    paymentpage.clickPayBtn();
    paymentdonepage.orderPlaceT();
    cy.screenshot("Order Place")
    paymentdonepage.clickContinueBtn();
    homepage.clickNavCart();
    cartpage.carEntyText();
    cartpage.clicknavLogout();
    cy.screenshot("Logout")
  })
})

// here i'm using diferents viewport to test responsiveness 
describe('Automation Challenge Mobile Viewport', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  });
  it('Add a product with a ramdong quantity and checkout without user ', () => {
    cy.viewport('iphone-x','landscape')
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity iphone-x Viewport")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
  })
  tests.forEach((test) => {
  it('Add a product with a ramdong quantity and checkout with a valid user ', () => {
    cy.viewport('samsung-note9','portrait')
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity samsung-note9 Viewpor")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeloginEmail(test.vemail);
    login_registerpage.typeloginPassword(test.vpassword);
    login_registerpage.clickloginBtn();
  })
})
  tests.forEach((test) => {
  it('Add a product with a ramdong quantity and checkout with a invalid user ', () => {
    cy.viewport('ipad-mini','portrait')
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity ipad-mini Viewport")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeloginEmail(test.iemail);
    login_registerpage.typeloginPassword(test.ipassword);
    login_registerpage.clickloginBtn();
    login_registerpage.textloginForm();

  })
})
  
  
  it('Complete checkout process with ramdong data', () => {
    cy.viewport('samsung-s10','portrait')
    homepage.clickNavProducts();
    productspage.clickProduct();
    productspage.clearquantity();
    productspage.typequantity();
    cy.screenshot("Ramdong Quantity")
    productspage.clickAdd();
    productspage.clickViewCar();
    cartpage.clickCheckout();
    cartpage.clickLoginRegister();
    login_registerpage.typeSigupName();
    login_registerpage.typeSigupEmail();
    login_registerpage.clickSigupBtn()
    login_registerpage.clickGenderBtn();
    login_registerpage.typeSigupPassword();
    login_registerpage.typesSigupDays();
    login_registerpage.typesSigupMoth();
    login_registerpage.typesSigupYears();
    login_registerpage.typeSigupFName();
    login_registerpage.typeSigupLName();
    login_registerpage.typesigupCompany();
    login_registerpage.typesigupAddress();
    login_registerpage.typesigupCountry();
    login_registerpage.typesigupState();
    login_registerpage.typesigupCity();
    login_registerpage.typesigupZipCode();
    login_registerpage.typsigupMobileNumber();
    login_registerpage.clickSigupCreateAcountBtn();
    account_createdpage.accountcreatep();
    cy.screenshot("Account Create")
    account_createdpage.clickContinue();
    homepage.clickNavCart();
    cartpage.clickCheckout();
    checkoutpage.clickPlaceOrder();
    paymentpage.typeCartName();
    paymentpage.typeCartNumber();
    paymentpage.typeCartCVC();
    paymentpage.typeCartMM();
    paymentpage.typeCartYear();
    paymentpage.clickPayBtn();
    paymentdonepage.orderPlaceT();
    cy.screenshot("Order Place")
    paymentdonepage.clickContinueBtn();
    homepage.clickNavCart();
    cartpage.carEntyText();
    cartpage.clicknavLogout();
    cy.screenshot("Logout Viewport samsung-s10")
  })
})

