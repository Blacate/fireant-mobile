import Route from './route';
import './css/index.scss';

angular.module('fireant', [
        'ngRoute',
        'ngResource'
    ])
    .config(Route);