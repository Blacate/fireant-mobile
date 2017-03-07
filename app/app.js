import Route from './route';
import './css/index.scss';
import './service.js';

angular.module('fireant', [
        'ngRoute',
        'ngResource',
        'dataService',
        'ngCookies',
    ])
    .filter('cellState',
        () => {
            return state => {
                if (state == 1)
                    return 'taken';
                else if (state == 2)
                    return 'away';
                else if (state == 3)
                    return 'booking';
                else if (state == 4)
                    return 'active';
                else
                    return '';
            }
        })
    .filter('cellPosition',
        () => {
            return num => `p${num + 1}`
        })
    .filter('violation',
        () => {
            return reason => {

            }
        })
    .config(Route);

/**
 * cellState:　根据座位的state返回座位对应class
 *     传入           返回
 * 　－－－－－－－－－－－－－－－－
 *     １： 有人 <--> taken
 *     ２： 暂离 <--> away颜色
 *     ３： 预占 <--> booking
 *     ４： 选中 <--> active
 * cellPosition：根据座位的position返回座位位置对应class
 *      传入       返回
 *  －－－－－－－－－－－－－－－－－
 *      0:      p1(左上角)
 *      1:      p2(左下角)
 *      2:      p3(右上角)
 *      3:      p4(右下角)
 */