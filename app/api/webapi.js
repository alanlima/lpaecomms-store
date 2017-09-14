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
    }
}
