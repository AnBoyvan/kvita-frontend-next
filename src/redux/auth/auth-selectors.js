export const getUser = store => store.auth.user;
export const getToken = store => store.auth.token;
export const getCart = store => store.auth.user.cart;
export const getRole = store => store.auth.user.role;
export const getIsLoggedIn = store => store.auth.isLoggedIn;
export const getIsRefreshing = store => store.auth.isRefreshing;
export const getUserError = store => store.auth.error;
