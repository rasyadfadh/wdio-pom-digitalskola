import Cartpage from "../pageobjects/cartpage";
import Homepage from "../pageobjects/homepage";
import LoginPage from "../pageobjects/login.page";

describe('Sauce Demo ', () => {
    it('Login Success Demo Page Object Based', async () => {
        
        await LoginPage.open()
        await LoginPage.login("standard_user","secret_sauce")
        
        await browser.pause(3000)

        await Homepage.validateHomePage()
        await browser.pause(3000)

    });

    it('Add to cart Demo', async () => {
        await Homepage.addFirstItemToCart();
        await Homepage.goToCart();
        
        await browser.pause(3000)

        const itemInCart = await Cartpage.getCartItem('Sauce Labs Backpack');
        await expect(itemInCart).toBeExisting()
    });
});