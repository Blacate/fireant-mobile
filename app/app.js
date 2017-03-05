import Route from './route';
import './css/index.scss';
import './service.js';

angular.module('fireant', [
        'ngRoute',
        'ngResource',
        'dataService',
        'ngCookies',
    ])
    .config(Route);