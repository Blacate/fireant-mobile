import Home from './home/home.js';
import notice from './notice/notice.js';
import help from './help/help.js';
import myInfo from './myInfo/myInfo.js';
import select from './select/select.js';
import scan from './scan/scan.js';
import login from './login/login.js';

const routeConfig = [
    ['/', Home],
    ['/notice', notice],
    ['/help', help],
    ['/myInfo', myInfo],
    ['/select', select],
    ['/scan', scan],
    ['/login', login],
];

const config = /* @ngInject */ function($routeProvider) {
    routeConfig.forEach(function(config) {
        $routeProvider.when(config[0], config[1]);
    });

    $routeProvider.otherwise({ redirectTo: '/' });
};

export default config;