import Route from './route';
import './css/index.scss';
import './service.js';

angular.module('fireant', [
        'ngRoute',
        'ngResource',
        'dataService',
        'ngCookies',
    ])
    .run(($http, $window) => {
        //配置微信JSsdkconfig
        $window.wx.config({
            'debug': true,
            'nonceStr': 'lugiu1izqmgp8sh',
            'timestamp': '1488904606',
            'appid': 'wx2001ad7f67ba9232',
            'signature': '4a6752f7992c8d730f681498de7eabf3550e9ad1',
            'url': 'http://fireant.blacat.top/#/'
        })
    })
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
    .filter('duration',
        () => {
            return time => {
                if (time < 60000)
                    return '0m';
                else if (time < 60000 * 60)
                    return `${parseInt(time/60000)}m`
                else
                    return `${parseInt(time / 3600000)}h${parseInt(time % 3600000 / 60000)}m`
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