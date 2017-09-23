import Axios from 'axios'

const webApiUrl = 'http://lpaecomms.dev/webapi'

function getFullPath(method){
    return webApiUrl + '/' + method;
}

module.exports = {
    getCatalog: () => {
        return Axios
            .get(getFullPath('catalog/get-stock.php'))
            .then(response => response.data)
    },
    registerCustomer: (customer) => {
        return Axios
            .post(getFullPath('customer/new.php'),
                  customer)
            .then(response => response.data)
            .catch(error => console.log('error on register customer', error))
    },
    authenticate: (login, password) => {
        return Axios
            .post(getFullPath('customer/login.php'),
                    {login, password})
            .then(response => response.data)
            .catch(error => console.log('error on authenticate', error))
    }
}
