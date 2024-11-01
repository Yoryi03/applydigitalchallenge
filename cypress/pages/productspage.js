class productPage {
    elements = {
        product3: () => cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a'),
        quantity: () => cy.typeRandomNumber('#quantity'),
        addToCar: () => cy.get(':nth-child(5) > .btn'),
        viewCar: () => cy.get('u'),
    };

    clickProduct() {
        this.elements.product3().click();
         }
    clearquantity() {
        this.elements.quantity().clear();
         }
         
    typequantity() {
    this.elements.quantity();
         }
    clickAdd(){
        this.elements.addToCar().click();
    }     
    clickViewCar(){
        this.elements.viewCar().click();
    }     

}

module.exports =  new productPage();