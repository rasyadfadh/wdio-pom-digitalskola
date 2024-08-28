import Page from "./page";
import { $, expect } from '@wdio/globals'


class HomePage extends Page{

    get cartIcon(){
        return $("#shopping_cart_container")
    }
    get addToCartButton(){
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get productImage() {
        return $("#item_0_img_link")
    
    }

    async validateHomePage(){
        await expect(this.cartIcon).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();
        await expect(this.productImage).toBeExisting();
        
    }
    async addFirstItemToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
    
    open(){
        return super.open("inventory.html")
    }

}

export default new HomePage();