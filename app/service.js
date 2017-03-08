/**
 * userService:
 *      登录：login(id,passwd)　id:学号 passwd:密码
 *      登出：logout()
 *      个人信息: info()
 *      违规记录：violation()
 *      使用记录：note()
 * seatService:
 *      预定：order(seatId)  seatId:座位id
 *      取消预约：cancel(seatId)  seatId:座位id
 *      入座：hold(seatId)  seatId:座位id
 *      离座：release(seatId)  seatId:座位id
 *      暂离：temp(seatId)  seatId:座位id
 *      返回/预约入座：use(seatId)  seatId:座位id
 * roomService:
 *      阅览室列表：roomDetail()
 *      桌子详情：deskDetail(roomId)  roomId:阅览室id
 *      座位详情：seatDetail(roomId)  roomId:阅览室id
 */



angular.module('dataService', [],
        function($httpProvider) {
            // Use x-www-form-urlencoded Content-Type
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            /**
             * The workhorse; converts an object to x-www-form-urlencoded serialization.
             * @param {Object} obj
             * @return {String}
             */
            var param = function(obj) {
                var query = '',
                    name, value, fullSubName, subName, subValue, innerObj, i;

                for (name in obj) {
                    value = obj[name];

                    if (value instanceof Array) {
                        for (i = 0; i < value.length; ++i) {
                            subValue = value[i];
                            fullSubName = name + '[' + i + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value instanceof Object) {
                        for (subName in value) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    } else if (value !== undefined && value !== null)
                        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }

                return query.length ? query.substr(0, query.length - 1) : query;
            };

            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }];
        })
    .factory('userService', ['$http',
        $http => {
            let log = (path, id, passwd) => {
                let _id = id || undefined;
                let _passwd = passwd || undefined;
                return $http({
                    method: 'POST',
                    url: path,
                    data: {
                        'id': _id,
                        'password': _passwd
                    }
                });
            }

            let info = path => {
                return $http({
                    method: 'GET',
                    url: path
                })
            }
            return {
                login: (id, passwd) => log('/api/user/login', id, passwd),
                logout: () => log('/api/user/logout'),
                info: () => info('/api/user'),
                violation: () => info('/api/user/violation'),
                note: () => info('/api/user/note')
            }
        }
    ])
    .factory('seatService', ['$http',
        $http => {
            let seat = path => {
                return $http({
                    method: 'POST',
                    url: path
                })
            }
            return {
                order: (seatId) => seat(`/api/seat/${seatId}/order`), //预定
                hold: (seatId) => seat(`/api/seat/${seatId}/hold`), //入座
                release: (seatId) => seat(`/api/seat/${seatId}/release`), //离座
                temp: (seatId) => seat(`/api/seat/${seatId}/release/tmp`), //暂离
                use: (seatId) => seat(`/api/seat/${seatId}/comeBack`), //返回/预约入座
                cancel: (seatId) => seat(`/api/seat/${seatId}/cancel`), //取消预约
            }
        }
    ])
    .factory('roomService', ['$http',
        $http => {
            let room = path => {
                return $http({
                    method: 'GET',
                    url: path,
                })
            }
            return {
                roomDetail: () => room('/api/room/list'),
                deskDetail: (roomId) => room(`/api/room/${roomId}/desks`),
                seatDetail: (roomId) => room(`/api/room/${roomId}/seats`)
            }
        }
    ])