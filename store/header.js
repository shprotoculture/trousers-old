export const header = {
    state: {
        menuIsActive: false,
        topBannerIsActive: true,
        productInCart: false
    },
    mutations: {
        toggleMenu(state) {
            state.menuIsActive = !state.menuIsActive;
        },
        closeMenu(state) {
            state.menuIsActive = false;
        },
        closeTopBanner(state) {
            state.topBannerIsActive = false
        },
        cartHasProduct(state) {
            state.productInCart = true;
        },
        clearCart(state) {
            state.productInCart = false;
        }
    }
}