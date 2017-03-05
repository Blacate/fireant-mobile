import Home from './home/home.js';
import notice from './notice/notice.js';
import help from './help/help.js';
import myInfo from './myInfo/myInfo.js';

const routeConfig = [
    ['/', Home],
    ['/notice', notice],
    ['/help', help],
    ['/myInfo', myInfo]
];

const config = /* @ngInject */ function($routeProvider) {
    routeConfig.forEach(function(config) {
        $routeProvider.when(config[0], config[1]);
    });

    $routeProvider.otherwise({ redirectTo: '/404' });
};

export default config;