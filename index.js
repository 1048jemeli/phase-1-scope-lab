
var customerName = 'bob';
function returnsCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(newFavorite) {
    bestCustomer = newFavorite;
}
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'initial least favorite'; 
    leastFavoriteCustomer = 'new least favorite'; 
}

module.exports = {
    customerName,
    returnsCustomerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};
