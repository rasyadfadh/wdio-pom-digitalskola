import Page from "./page";
import { $, expect } from '@wdio/globals'

class CartPage extends Page {

    get checkoutButton() {}
    get continueShoppingButton() {}
    
    get cartItemList() { return $('.cart_list'); }


    open(){
        return super.open("cart.html")
    }

    
    async getCartItem(itemName) {
        
        await browser.pause(3000)

        return await this.cartItemList.$(`.inventory_item_name*=${itemName}`);
    }

}

export default new CartPage();