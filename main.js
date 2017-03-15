/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _route = __webpack_require__(1);
	
	var _route2 = _interopRequireDefault(_route);
	
	__webpack_require__(32);
	
	__webpack_require__(36);
	
	angular.module('fireant', ['ngRoute', 'ngResource', 'dataService', 'ngCookies']).run(function ($http, $window, $location) {
	    //配置微信JSsdkconfig
	    var _url = $location.protocol() + '://' + $location.host() + '/';
	    var sign = {};
	    getConfig(_url).then(function (d) {
	        $window.wx.config({
	            'nonceStr': d.noncestr,
	            'timestamp': d.timestamp,
	            'appId': d.appid,
	            'signature': d.signature,
	            'jsApiList': ['scanQRCode']
	        });
	    })['catch'](function (e) {
	        console.log(e);
	    });
	
	    $window.wx.error(function (res) {
	        refresh().then(function (d) {
	            return getConfig(_url);
	        }).then(function (d) {
	            $window.wx.config({
	                'nonceStr': d.noncestr,
	                'timestamp': d.timestamp,
	                'appId': d.appid,
	                'signature': d.signature,
	                'jsApiList': ['scanQRCode']
	            });
	        })['catch'](function (e) {
	            console.log(e);
	        });
	    });
	
	    function getConfig(url) {
	        return $http.get('/api/system/signature?url=' + url).then(function (d) {
	            return d.data.data;
	        })['catch'](function (e) {
	            return e;
	        });
	    }
	
	    function refresh() {
	        return $http.post('/api/system/refresh').then(function (d) {
	            if (d.data.success) return true;else return false;
	        })['catch'](function (e) {
	            return false;
	        });
	    }
	}).filter('cellState', function () {
	    return function (state) {
	        if (state == 1) return 'taken';else if (state == 2) return 'away';else if (state == 3) return 'booking';else if (state == 4) return 'active';else return '';
	    };
	}).filter('cellPosition', function () {
	    return function (num) {
	        return 'p' + (num + 1);
	    };
	}).filter('violation', function () {
	    return function (reason) {};
	}).filter('duration', function () {
	    return function (time) {
	        if (time < 60000) return '0m';else if (time < 60000 * 60) return parseInt(time / 60000) + 'm';else return parseInt(time / 3600000) + 'h' + parseInt(time % 3600000 / 60000) + 'm';
	    };
	}).config(_route2['default']);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _homeHomeJs = __webpack_require__(2);
	
	var _homeHomeJs2 = _interopRequireDefault(_homeHomeJs);
	
	var _noticeNoticeJs = __webpack_require__(19);
	
	var _noticeNoticeJs2 = _interopRequireDefault(_noticeNoticeJs);
	
	var _helpHelpJs = __webpack_require__(22);
	
	var _helpHelpJs2 = _interopRequireDefault(_helpHelpJs);
	
	var _myInfoMyInfoJs = __webpack_require__(24);
	
	var _myInfoMyInfoJs2 = _interopRequireDefault(_myInfoMyInfoJs);
	
	var _selectSelectJs = __webpack_require__(26);
	
	var _selectSelectJs2 = _interopRequireDefault(_selectSelectJs);
	
	var _scanScanJs = __webpack_require__(28);
	
	var _scanScanJs2 = _interopRequireDefault(_scanScanJs);
	
	var _loginLoginJs = __webpack_require__(30);
	
	var _loginLoginJs2 = _interopRequireDefault(_loginLoginJs);
	
	var routeConfig = [['/', _homeHomeJs2['default']], ['/notice', _noticeNoticeJs2['default']], ['/help', _helpHelpJs2['default']], ['/myInfo', _myInfoMyInfoJs2['default']], ['/select', _selectSelectJs2['default']], ['/scan', _scanScanJs2['default']], ['/login', _loginLoginJs2['default']]];
	
	var config = /* @ngInject */["$routeProvider", function ($routeProvider) {
	    routeConfig.forEach(function (config) {
	        $routeProvider.when(config[0], config[1]);
	    });
	
	    $routeProvider.otherwise({ redirectTo: '/' });
	}];
	
	exports['default'] = config;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(3);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var homeCtrl = (function () {
	    _createClass(homeCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['userService', 'seatService', '$cookies', '$http', '$window'];
	        }
	    }]);
	
	    function homeCtrl(userService, seatService, $cookies, $http, $window) {
	        _classCallCheck(this, homeCtrl);
	
	        this.services = { userService: userService, seatService: seatService, $cookies: $cookies, $http: $http, $window: $window };
	        /**
	         * user.name: 用户姓名
	         */
	        this.user = {};
	        /**
	         * 
	         */
	        this.seatId;
	        /**
	         * 
	         */
	        this.record = { display: true };
	        /**
	         * violation.new: 用户是否有新的违规记录
	         * violation.text: 用户有新违约提示文本
	         */
	        this.violation = {
	            'new': false,
	            text: '您有新的违规记录'
	        };
	        this.getInfo();
	    }
	
	    /**
	     * 获取用户详细信息，并调用renderPage(data)处理数据
	     */
	
	    _createClass(homeCtrl, [{
	        key: 'getInfo',
	        value: function getInfo() {
	            var _this = this;
	
	            var userService = this.services.userService;
	
	            userService.info().success(function (d) {
	                if (d.success) _this.renderPage(d.data);else _utils2['default'].handleCommonError(d.error);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	
	        /**
	         * 处理数据模型，用来渲染页面
	         * @param {obj} data 
	         *      data.user: 用户个人信息
	         *      data.seat: 用户座位信息
	         *      data.room: 用户阅览室信息
	         *      data.lastTime: 用户上次操作时间点
	         *      data.seat.state
	         *          0: 无人
	         *          1: 有人
	         *          2: 暂离
	         *          3: 预约
	         */
	    }, {
	        key: 'renderPage',
	        value: function renderPage(data) {
	            var _this2 = this;
	
	            var timeDiff = this.services.timeDiff;
	
	            this.user.name = data.user.name;
	            this.record.display = data.user.state;
	            this.violation['new'] = data.user.msg;
	
	            function switchPrint(a, b, c, d, e, f, g, z) {
	                z.record.classRls = a;
	                z.record.seatTit = b;
	                z.record.timeTit = c;
	                z.record.btnCle = d;
	                z.record.btnSure = e;
	                z.record.clcState = f;
	                z.record.sureState = g;
	            }
	            if (data.user.state) {
	                this.seatId = data.seat.seatId;
	                this.timeDiff(data.lastTime).then(function (data) {
	                    _this2.record.timeCtnt = data;
	                });
	                this.record.seatCtnt = data.room.name + data.seat.seatId + '号座位';
	                switch (data.seat.state) {
	                    case 3:
	                        switchPrint(true, '预约座位', '预约时间', '取消预约', '确认就座', 'clcOrder', 'useSeat', this);
	                        break;
	                    case 1:
	                        switchPrint(false, '我的座位', '在线时长', '暂离座位', '使用完成', 'tmpLev', 'finishUse', this);
	                        break;
	                    case 2:
	                        switchPrint(true, '我的座位', '已离时长', '取消使用', '确认返回', 'clcUse', 'back', this);
	                        break;
	                }
	            }
	
	            return this;
	        }
	
	        /**
	         * 计算时间差
	         * 与后端API系统的时间为基准时间，计算时间差
	         * @param {number} time　需要计算的时间点
	         * @return {string} timeDifference 时间差 
	         */
	    }, {
	        key: 'timeDiff',
	        value: function timeDiff(time) {
	            var $http = this.services.$http;
	
	            var timeDifference = null;
	            var _timeDifference = null;
	            return $http.get('/api/system/time/now').then(function (d) {
	                _timeDifference = d.data.data - time;
	                if (_timeDifference < 60000) timeDifference = '0分钟';else if (_timeDifference < 60 * 60000) timeDifference = parseInt(_timeDifference / 60000) + '分钟';else timeDifference = parseInt(_timeDifference / 3600000) + '小时' + parseInt(_timeDifference % 3600000 / 60000) + '分钟';
	                return timeDifference;
	            });
	        }
	
	        /**
	         * 线下占座
	         * 判断用户位置并扫描二维码后加载js发送请求
	         */
	    }, {
	        key: 'offlineHold',
	        value: function offlineHold() {
	            return this.scan();
	        }
	    }, {
	        key: 'scan',
	        value: function scan() {
	            var $window = this.services.$window;
	
	            // window.location.href = '/#/scan?seatId=1000'
	            $window.wx.scanQRCode({
	                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
	                scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
	                success: function success(res) {
	                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
	                    // alert(result);
	                    console.log(result);
	                }
	            });
	        }
	
	        /**
	         * 取消性质按钮
	         *      clcOrder: 取消预约
	         *      tmpLev: 暂时离开
	         *      clcUse: 取消使用
	         */
	    }, {
	        key: 'clcF',
	        value: function clcF() {
	            switch (this.record.clcState) {
	                case 'clcOrder':
	                    this.clcOrder();
	                    break;
	                case 'tmpLev':
	                    this.tmpLev();
	                    break;
	                case 'clcUse':
	                    this.clcUse();
	                    break;
	            }
	        }
	
	        /**
	         * 取消预约函数(预约状态下)
	         */
	    }, {
	        key: 'clcOrder',
	        value: function clcOrder() {
	            var seatService = this.services.seatService;
	
	            seatService.cancel(this.seatId).success(function (d) {
	                if (d.success) _utils2['default'].handleCommonConfirm('预约取消成功，再见。', 1);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	
	        /**
	         * 暂时离开函数
	         */
	    }, {
	        key: 'tmpLev',
	        value: function tmpLev() {
	            var seatService = this.services.seatService;
	
	            seatService.temp(this.seatId).success(function (d) {
	                if (d.success) _utils2['default'].handleCommonConfirm('你有10min，记得回来哦。', 1);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	
	        /**
	         * 取消使用函数(就座状态下)
	         */
	    }, {
	        key: 'clcUse',
	        value: function clcUse() {
	            var seatService = this.services.seatService;
	
	            seatService.release(this.seatId).success(function (d) {
	                if (d.success) _utils2['default'].handleCommonConfirm('离座成功，期待你的下次使用。', 1);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	
	        /**
	         * 确定性质按钮
	         *      useSeat: 确认就座
	         *      finishUse: 使用完成
	         *      back: 返回座位
	         */
	    }, {
	        key: 'sureF',
	        value: function sureF() {
	            switch (this.record.sureState) {
	                case 'useSeat':
	                    this.scan();
	                    break;
	                case 'finishUse':
	                    this.finishUse();
	                    break;
	                case 'back':
	                    this.scan();
	                    break;
	            }
	        }
	
	        /**
	         * 使用完成函数
	         */
	    }, {
	        key: 'finishUse',
	        value: function finishUse() {
	            var seatService = this.services.seatService;
	
	            seatService.release(this.seatId).success(function (d) {
	                if (d.success) _utils2['default'].handleCommonConfirm('离座成功，期待你的下次使用。', 1);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }]);
	
	    return homeCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/home/home.html',
	    controller: homeCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var path = '/app/home/home.html';
	var html = "<div class=\"page index\">\n    <div class=\"page__hd\">\n        <img src=\"" + __webpack_require__(4) + "\" alt=\"#\" class=\"head-img\">\n    </div>\n    <div class=\"weui-cell weui-cell_access js_item white-box avatar-cell\" onclick=\"window.location.href = '#/myInfo'\">\n        <img src=\"" + __webpack_require__(5) + "\" alt=\"#\" class=\"avatar\">\n        <p>{{vm.user.name}}</p>\n        <div class=\"weui-cell__ft\"></div>\n    </div>\n    <div class=\"weui-grids white_bgc item_shaow border_raduis list_item white-box\">\n        <a class=\"weui-grid\" href='/#/select'>\n            <div class=\"weui-grid__icon\">\n                <img src=\"" + __webpack_require__(6) + "\" alt=\"\">\n            </div>\n            <p class=\"weui-grid__label\">线上预约</p>\n        </a>\n        <a class=\"weui-grid\" ng-click=\"vm.offlineHold()\">\n            <div class=\"weui-grid__icon\">\n                <img src=\"" + __webpack_require__(7) + "\" alt=\"\">\n            </div>\n            <p class=\"weui-grid__label\">线下占座</p>\n        </a>\n        <a href=\"#/help\" class=\"weui-grid right_none\">\n            <div class=\"weui-grid__icon\">\n                <img src=\"" + __webpack_require__(8) + "\" alt=\"\">\n            </div>\n            <p class=\"weui-grid__label\">帮助</p>\n        </a>\n    </div>\n    <div class=\"weui-cell weui-cell_access js_item white_bgc item_shaow border_raduis list_item ctnt-cell top_border_none\" onclick=\"window.location.href='#/notice'\">\n        <h4>我的公告</h4>\n        <div class=\"weui-cell__ft\"></div>\n        <div class=\"article\" ng-show=\"vm.violation.new\" 　>\n            <p>{{vm.violation.text}}<span class=\"weui-badge weui-badge_dot\" style=\"margin-left: 5px;margin-right: 5px;\"></span></p>\n        </div>\n    </div>\n    <div class=\"weui-form-preview white_bgc item_shaow border_raduis list_item ctnt-panel top_border_none bottom_border_none\" ng-show=\"vm.record.display\">\n        <div class=\"weui-form-preview__hd\">\n            <div class=\"weui-form-preview__item\">\n                <label class=\"weui-form-preview__label\" ng-bind=\"vm.record.seatTit\"></label>\n                <em class=\"weui-form-preview__value\" ng-bind=\"vm.record.seatCtnt\"></em>\n            </div>\n        </div>\n        <div class=\"weui-form-preview__bd\">\n            <div class=\"weui-form-preview__item\">\n                <label class=\"weui-form-preview__label\" ng-bind=\"vm.record.timeTit\"></label>\n                <span class=\"weui-form-preview__value\" ng-bind=\"vm.record.timeCtnt\"></span>\n            </div>\n        </div>\n        <div class=\"weui-form-preview__ft\">\n            <a class=\"weui-form-preview__btn weui-form-preview__btn_primary\" ng-class=\"{true: 'warn', false: 'alert'}[vm.record.classRls]\" ng-bind=\"vm.record.btnCle\" ng-click=\"vm.clcF()\"></a>\n            <a class=\"weui-form-preview__btn weui-form-preview__btn_primary\" ng-bind=\"vm.record.btnSure\" ng-click=\"vm.sureF()\"></a>\n        </div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/tushuguan01.ac2511.jpg";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAVFBMVEUAAAAQj98Ql98QldoQltsQl9sQlNsQltwQltwQldoQldoQltsSl9sSldsSltsSldwSltoRltsRldsRltsRltsRldoRltoRltoRldsRldsRltsSlttwOF0rAAAAG3RSTlMAECAwP0BPUF9gb3B/gI+QoK+wv8DP0N/g7/CCiSIhAAADK0lEQVR42u3d23KjMBAEUAmCMXGIWRDmMv//n/sUvJWYWDdE4+1+TJVSnABCgZGkFMMwDMMwDMMwDGZOn10vu6fvPt+CGO+TwGR692bkg0BlyP0c1SRgmSofRymAKT2uqwkRMrlfXb1Apne+QQQ0rrfJgAoZHO+Qe8s62/+xnNX343G7Sy5LuwJjhHHvQy9O7cxXswZlrNR8HZHxg+QokNwPsjxEcIavy6PEqxUgRAghhBBCCCGEEEIIIYQQQgghhBBCCCFkLTMuZHZq9TKvTBdIjQLxfIldC9gpyT0/K+T/fKfX+zP0x+T7lx2tv4VF7pOeZXT8xRUqxLlmYMSEjO5314wImT36ngoR4lWMUuFBKs++e8SCjN7PNF3POJA5bJBRNmbcHzKaplQbxWwDMSp1CCGEEEIIIeTJUOt7fb9JDTHfK/19Blvnn3WmO0NERIaz63CxezDiAYCIdE7vQh7Xk0NAnKrKV+riMSAOEr1SFw8Ckd726moEG2JbjJwJOkSyoBMCBLE7JRM+xKqIeX1KEg7EaupBfQRI/T9BzBEghhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQV4REmZVcAECqGJBlqmCbHLJUQ3UxIN3D+qUkkHuh3Ue443P5ZWVyiL7//M8paG3j7NStTAZMAlkvRg1JswMk2wKS7QDZ4pQ0ag+IvsV23PQuEPu5+5b5Mes+FcRynrj1+cjVXhCl23iOVqv9IEoVJg7DFMGHEto6u1xNYK5VFuVQYraOGkII2Sj9q0BkI0jqddzyzSCJFw1rNoOk3YwkmzaDJN0eRv+2b1MoZKqSOYpftzsKhYh05xR7D72dn2yjFQ4RkaHbOBZ7gUWBIOT6KpCaELAUYc9TnNh0nfUBHFZL5VYHgLSBY06Y2A0wZnyIDh09H+nKAt2+1WsQPoI7bs5fJg9+QpS6vcIdAt8Dzy7rUl2AIW5vQHC7YNd/tpsXcYCOHWefxXJLvMeJ8Xvxoa9YjNH/XZTVUtLJGGFbI5QNgmW8xnjHmZd1a8w+ntmYti4B9iNnGIZhGIZhGIZZzV9nKz9VV9lPfAAAAABJRU5ErkJggg=="

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _sweetalert = __webpack_require__(10);
	
	var _sweetalert2 = _interopRequireDefault(_sweetalert);
	
	var Util = (function () {
	    function Util() {
	        _classCallCheck(this, Util);
	    }
	
	    _createClass(Util, null, [{
	        key: 'handleUnknowError',
	        value: function handleUnknowError() {
	            (0, _sweetalert2['default'])({
	                type: 'error',
	                title: '出错啦！',
	                text: '请联系管理员！'
	            });
	        }
	    }, {
	        key: 'handleCommonError',
	        value: function handleCommonError(txt) {
	            (0, _sweetalert2['default'])({
	                type: 'error',
	                title: 'Error!',
	                text: txt
	            });
	        }
	    }, {
	        key: 'handleCommonWarning',
	        value: function handleCommonWarning(txt) {
	            (0, _sweetalert2['default'])({
	                type: 'warning',
	                title: 'Warn!',
	                text: txt
	            });
	        }
	    }, {
	        key: 'handleCommonConfirm',
	        value: function handleCommonConfirm(txt, reload) {
	            (0, _sweetalert2['default'])({
	                type: 'success',
	                title: 'Success!',
	                text: txt
	            }, function () {
	                if (reload) location.reload();else {
	                    window.location = '/#/';
	                }
	            });
	        }
	    }]);
	
	    return Util;
	})();
	
	exports['default'] = Util;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	// SweetAlert
	// 2014-2015 (c) - Tristan Edwards
	// github.com/t4t5/sweetalert
	
	/*
	 * jQuery-like functions for manipulating the DOM
	 */
	
	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(11);
	
	/*
	 * Handy utilities
	 */
	
	var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(12);
	
	/*
	 *  Handle sweetAlert's DOM elements
	 */
	
	var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(13);
	
	// Handle button events and keyboard events
	
	var _handleButton$handleConfirm$handleCancel = __webpack_require__(16);
	
	var _handleKeyDown = __webpack_require__(17);
	
	var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);
	
	// Default values
	
	var _defaultParams = __webpack_require__(14);
	
	var _defaultParams2 = _interopRequireWildcard(_defaultParams);
	
	var _setParameters = __webpack_require__(18);
	
	var _setParameters2 = _interopRequireWildcard(_setParameters);
	
	/*
	 * Remember state in cases where opening and handling a modal will fiddle with it.
	 * (We also use window.previousActiveElement as a global variable)
	 */
	var previousWindowKeyDown;
	var lastFocusedButton;
	
	/*
	 * Global sweetAlert function
	 * (this is what the user calls)
	 */
	var sweetAlert, swal;
	
	exports['default'] = sweetAlert = swal = function () {
	  var customizations = arguments[0];
	
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();
	
	  /*
	   * Use argument if defined or default value from params object otherwise.
	   * Supports the case where a default value is boolean true and should be
	   * overridden by a corresponding explicit argument which is boolean false.
	   */
	  function argumentOrDefault(key) {
	    var args = customizations;
	    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
	  }
	
	  if (customizations === undefined) {
	    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
	    return false;
	  }
	
	  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);
	
	  switch (typeof customizations) {
	
	    // Ex: swal("Hello", "Just testing", "info");
	    case 'string':
	      params.title = customizations;
	      params.text = arguments[1] || '';
	      params.type = arguments[2] || '';
	      break;
	
	    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
	    case 'object':
	      if (customizations.title === undefined) {
	        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
	        return false;
	      }
	
	      params.title = customizations.title;
	
	      for (var customName in _defaultParams2['default']) {
	        params[customName] = argumentOrDefault(customName);
	      }
	
	      // Show "Confirm" instead of "OK" if cancel button is visible
	      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
	      params.confirmButtonText = argumentOrDefault('confirmButtonText');
	
	      // Callback function when clicking on "OK"/"Cancel"
	      params.doneFunction = arguments[1] || null;
	
	      break;
	
	    default:
	      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
	      return false;
	
	  }
	
	  _setParameters2['default'](params);
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);
	
	  // Modal interactions
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	
	  /*
	   * Make sure all modal buttons respond to all events
	   */
	  var $buttons = modal.querySelectorAll('button');
	  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
	  var onButtonEvent = function onButtonEvent(e) {
	    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
	  };
	
	  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
	    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
	      var btnEvt = buttonEvents[evtIndex];
	      $buttons[btnIndex][btnEvt] = onButtonEvent;
	    }
	  }
	
	  // Clicking outside the modal dismisses it (if allowed by user)
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;
	
	  previousWindowKeyDown = window.onkeydown;
	
	  var onKeyEvent = function onKeyEvent(e) {
	    return _handleKeyDown2['default'](e, params, modal);
	  };
	  window.onkeydown = onKeyEvent;
	
	  window.onfocus = function () {
	    // When the user has focused away and focused back from the whole window.
	    setTimeout(function () {
	      // Put in a timeout to jump out of the event sequence.
	      // Calling focus() in the event sequence confuses things.
	      if (lastFocusedButton !== undefined) {
	        lastFocusedButton.focus();
	        lastFocusedButton = undefined;
	      }
	    }, 0);
	  };
	
	  // Show alert with enabled buttons always
	  swal.enableButtons();
	};
	
	/*
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
	  if (!userParams) {
	    throw new Error('userParams is required');
	  }
	  if (typeof userParams !== 'object') {
	    throw new Error('userParams has to be a object');
	  }
	
	  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
	};
	
	/*
	 * Animation when closing modal
	 */
	sweetAlert.close = swal.close = function () {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');
	
	  /*
	   * Reset icon animations
	   */
	  var $successIcon = modal.querySelector('.sa-icon.sa-success');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');
	
	  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');
	
	  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');
	
	  // Reset custom class (delay so that UI changes aren't visible)
	  setTimeout(function () {
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
	  }, 300);
	
	  // Make page scrollable again
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');
	
	  // Reset the page to its previous state
	  window.onkeydown = previousWindowKeyDown;
	  if (window.previousActiveElement) {
	    window.previousActiveElement.focus();
	  }
	  lastFocusedButton = undefined;
	  clearTimeout(modal.timeout);
	
	  return true;
	};
	
	/*
	 * Validation of the input field is done by user
	 * If something is wrong => call showInputError with errorMessage
	 */
	sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	
	  var $errorIcon = modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');
	
	  var $errorContainer = modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');
	
	  $errorContainer.querySelector('p').innerHTML = errorMessage;
	
	  setTimeout(function () {
	    sweetAlert.enableButtons();
	  }, 1);
	
	  modal.querySelector('input').focus();
	};
	
	/*
	 * Reset input error DOM elements
	 */
	sweetAlert.resetInputError = swal.resetInputError = function (event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }
	
	  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	
	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');
	
	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
	};
	
	/*
	 * Disable confirm and cancel buttons
	 */
	sweetAlert.disableButtons = swal.disableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = true;
	  $cancelButton.disabled = true;
	};
	
	/*
	 * Enable confirm and cancel buttons
	 */
	sweetAlert.enableButtons = swal.enableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = false;
	  $cancelButton.disabled = false;
	};
	
	if (typeof window !== 'undefined') {
	  // The 'handle-click' module requires
	  // that 'sweetAlert' was set as global.
	  window.sweetAlert = window.swal = sweetAlert;
	} else {
	  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
	}
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var hasClass = function hasClass(elem, className) {
	  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	};
	
	var addClass = function addClass(elem, className) {
	  if (!hasClass(elem, className)) {
	    elem.className += ' ' + className;
	  }
	};
	
	var removeClass = function removeClass(elem, className) {
	  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	  if (hasClass(elem, className)) {
	    while (newClass.indexOf(' ' + className + ' ') >= 0) {
	      newClass = newClass.replace(' ' + className + ' ', ' ');
	    }
	    elem.className = newClass.replace(/^\s+|\s+$/g, '');
	  }
	};
	
	var escapeHtml = function escapeHtml(str) {
	  var div = document.createElement('div');
	  div.appendChild(document.createTextNode(str));
	  return div.innerHTML;
	};
	
	var _show = function _show(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'block';
	};
	
	var show = function show(elems) {
	  if (elems && !elems.length) {
	    return _show(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _show(elems[i]);
	  }
	};
	
	var _hide = function _hide(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};
	
	var hide = function hide(elems) {
	  if (elems && !elems.length) {
	    return _hide(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _hide(elems[i]);
	  }
	};
	
	var isDescendant = function isDescendant(parent, child) {
	  var node = child.parentNode;
	  while (node !== null) {
	    if (node === parent) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	  return false;
	};
	
	var getTopMargin = function getTopMargin(elem) {
	  elem.style.left = '-9999px';
	  elem.style.display = 'block';
	
	  var height = elem.clientHeight,
	      padding;
	  if (typeof getComputedStyle !== 'undefined') {
	    // IE 8
	    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
	  } else {
	    padding = parseInt(elem.currentStyle.padding);
	  }
	
	  elem.style.left = '';
	  elem.style.display = 'none';
	  return '-' + parseInt((height + padding) / 2) + 'px';
	};
	
	var fadeIn = function fadeIn(elem, interval) {
	  if (+elem.style.opacity < 1) {
	    interval = interval || 16;
	    elem.style.opacity = 0;
	    elem.style.display = 'block';
	    var last = +new Date();
	    var tick = (function (_tick) {
	      function tick() {
	        return _tick.apply(this, arguments);
	      }
	
	      tick.toString = function () {
	        return _tick.toString();
	      };
	
	      return tick;
	    })(function () {
	      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
	      last = +new Date();
	
	      if (+elem.style.opacity < 1) {
	        setTimeout(tick, interval);
	      }
	    });
	    tick();
	  }
	  elem.style.display = 'block'; //fallback IE8
	};
	
	var fadeOut = function fadeOut(elem, interval) {
	  interval = interval || 16;
	  elem.style.opacity = 1;
	  var last = +new Date();
	  var tick = (function (_tick2) {
	    function tick() {
	      return _tick2.apply(this, arguments);
	    }
	
	    tick.toString = function () {
	      return _tick2.toString();
	    };
	
	    return tick;
	  })(function () {
	    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
	    last = +new Date();
	
	    if (+elem.style.opacity > 0) {
	      setTimeout(tick, interval);
	    } else {
	      elem.style.display = 'none';
	    }
	  });
	  tick();
	};
	
	var fireClick = function fireClick(node) {
	  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
	  // Then fixed for today's Chrome browser.
	  if (typeof MouseEvent === 'function') {
	    // Up-to-date approach
	    var mevt = new MouseEvent('click', {
	      view: window,
	      bubbles: false,
	      cancelable: true
	    });
	    node.dispatchEvent(mevt);
	  } else if (document.createEvent) {
	    // Fallback
	    var evt = document.createEvent('MouseEvents');
	    evt.initEvent('click', false, false);
	    node.dispatchEvent(evt);
	  } else if (document.createEventObject) {
	    node.fireEvent('onclick');
	  } else if (typeof node.onclick === 'function') {
	    node.onclick();
	  }
	};
	
	var stopEventPropagation = function stopEventPropagation(e) {
	  // In particular, make sure the space bar doesn't scroll the main window.
	  if (typeof e.stopPropagation === 'function') {
	    e.stopPropagation();
	    e.preventDefault();
	  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
	    window.event.cancelBubble = true;
	  }
	};
	
	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.escapeHtml = escapeHtml;
	exports._show = _show;
	exports.show = show;
	exports._hide = _hide;
	exports.hide = hide;
	exports.isDescendant = isDescendant;
	exports.getTopMargin = getTopMargin;
	exports.fadeIn = fadeIn;
	exports.fadeOut = fadeOut;
	exports.fireClick = fireClick;
	exports.stopEventPropagation = stopEventPropagation;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/*
	 * Allow user to pass their own params
	 */
	var extend = function extend(a, b) {
	  for (var key in b) {
	    if (b.hasOwnProperty(key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};
	
	/*
	 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
	 */
	var hexToRgb = function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
	};
	
	/*
	 * Check if the user is using Internet Explorer 8 (for fallbacks)
	 */
	var isIE8 = function isIE8() {
	  return window.attachEvent && !window.addEventListener;
	};
	
	/*
	 * IE compatible logging for developers
	 */
	var logStr = function logStr(string) {
	  if (window.console) {
	    // IE...
	    window.console.log('SweetAlert: ' + string);
	  }
	};
	
	/*
	 * Set hover, active and focus-states for buttons 
	 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
	 */
	var colorLuminance = function colorLuminance(hex, lum) {
	  // Validate hex string
	  hex = String(hex).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	  }
	  lum = lum || 0;
	
	  // Convert to decimal and change luminosity
	  var rgb = '#';
	  var c;
	  var i;
	
	  for (i = 0; i < 3; i++) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	
	  return rgb;
	};
	
	exports.extend = extend;
	exports.hexToRgb = hexToRgb;
	exports.isIE8 = isIE8;
	exports.logStr = logStr;
	exports.colorLuminance = colorLuminance;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _hexToRgb = __webpack_require__(12);
	
	var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(11);
	
	var _defaultParams = __webpack_require__(14);
	
	var _defaultParams2 = _interopRequireWildcard(_defaultParams);
	
	/*
	 * Add modal + overlay to DOM
	 */
	
	var _injectedHTML = __webpack_require__(15);
	
	var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);
	
	var modalClass = '.sweet-alert';
	var overlayClass = '.sweet-overlay';
	
	var sweetAlertInitialize = function sweetAlertInitialize() {
	  var sweetWrap = document.createElement('div');
	  sweetWrap.innerHTML = _injectedHTML2['default'];
	
	  // Append elements to body
	  while (sweetWrap.firstChild) {
	    document.body.appendChild(sweetWrap.firstChild);
	  }
	};
	
	/*
	 * Get DOM element of modal
	 */
	var getModal = (function (_getModal) {
	  function getModal() {
	    return _getModal.apply(this, arguments);
	  }
	
	  getModal.toString = function () {
	    return _getModal.toString();
	  };
	
	  return getModal;
	})(function () {
	  var $modal = document.querySelector(modalClass);
	
	  if (!$modal) {
	    sweetAlertInitialize();
	    $modal = getModal();
	  }
	
	  return $modal;
	});
	
	/*
	 * Get DOM element of input (in modal)
	 */
	var getInput = function getInput() {
	  var $modal = getModal();
	  if ($modal) {
	    return $modal.querySelector('input');
	  }
	};
	
	/*
	 * Get DOM element of overlay
	 */
	var getOverlay = function getOverlay() {
	  return document.querySelector(overlayClass);
	};
	
	/*
	 * Add box-shadow style to button (depending on its chosen bg-color)
	 */
	var setFocusStyle = function setFocusStyle($button, bgColor) {
	  var rgbColor = _hexToRgb.hexToRgb(bgColor);
	  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
	};
	
	/*
	 * Animation when opening modal
	 */
	var openModal = function openModal(callback) {
	  var $modal = getModal();
	  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
	  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
	  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');
	
	  window.previousActiveElement = document.activeElement;
	  var $okButton = $modal.querySelector('button.confirm');
	  $okButton.focus();
	
	  setTimeout(function () {
	    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
	  }, 500);
	
	  var timer = $modal.getAttribute('data-timer');
	
	  if (timer !== 'null' && timer !== '') {
	    var timerCallback = callback;
	    $modal.timeout = setTimeout(function () {
	      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
	      if (doneFunctionExists) {
	        timerCallback(null);
	      } else {
	        sweetAlert.close();
	      }
	    }, timer);
	  }
	};
	
	/*
	 * Reset the styling of the input
	 * (for example if errors have been shown)
	 */
	var resetInput = function resetInput() {
	  var $modal = getModal();
	  var $input = getInput();
	
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
	  $input.value = _defaultParams2['default'].inputValue;
	  $input.setAttribute('type', _defaultParams2['default'].inputType);
	  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);
	
	  resetInputError();
	};
	
	var resetInputError = function resetInputError(event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }
	
	  var $modal = getModal();
	
	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');
	
	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
	};
	
	/*
	 * Set "margin-top"-property on modal based on its computed height
	 */
	var fixVerticalPosition = function fixVerticalPosition() {
	  var $modal = getModal();
	  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
	};
	
	exports.sweetAlertInitialize = sweetAlertInitialize;
	exports.getModal = getModal;
	exports.getOverlay = getOverlay;
	exports.getInput = getInput;
	exports.setFocusStyle = setFocusStyle;
	exports.openModal = openModal;
	exports.resetInput = resetInput;
	exports.resetInputError = resetInputError;
	exports.fixVerticalPosition = fixVerticalPosition;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaultParams = {
	  title: '',
	  text: '',
	  type: null,
	  allowOutsideClick: false,
	  showConfirmButton: true,
	  showCancelButton: false,
	  closeOnConfirm: true,
	  closeOnCancel: true,
	  confirmButtonText: 'OK',
	  confirmButtonColor: '#8CD4F5',
	  cancelButtonText: 'Cancel',
	  imageUrl: null,
	  imageSize: null,
	  timer: null,
	  customClass: '',
	  html: false,
	  animation: true,
	  allowEscapeKey: true,
	  inputType: 'text',
	  inputPlaceholder: '',
	  inputValue: '',
	  showLoaderOnConfirm: false
	};
	
	exports['default'] = defaultParams;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var injectedHTML =
	
	// Dark overlay
	"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +
	
	// Modal
	"<div class=\"sweet-alert\">" +
	
	// Error icon
	"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +
	
	// Warning icon
	"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +
	
	// Info icon
	"<div class=\"sa-icon sa-info\"></div>" +
	
	// Success icon
	"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +
	
	// Title, text and input
	"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +
	
	// Input errors
	"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +
	
	// Cancel and confirm buttons
	"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +
	
	// Loading animation
	"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +
	
	// End of modal
	"</div>";
	
	exports["default"] = injectedHTML;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _colorLuminance = __webpack_require__(12);
	
	var _getModal = __webpack_require__(13);
	
	var _hasClass$isDescendant = __webpack_require__(11);
	
	/*
	 * User clicked on "Confirm"/"OK" or "Cancel"
	 */
	var handleButton = function handleButton(event, params, modal) {
	  var e = event || window.event;
	  var target = e.target || e.srcElement;
	
	  var targetedConfirm = target.className.indexOf('confirm') !== -1;
	  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
	  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
	  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';
	
	  // Since the user can change the background-color of the confirm button programmatically,
	  // we must calculate what the color should be on hover/active
	  var normalColor, hoverColor, activeColor;
	  if (targetedConfirm && params.confirmButtonColor) {
	    normalColor = params.confirmButtonColor;
	    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
	    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
	  }
	
	  function shouldSetConfirmButtonColor(color) {
	    if (targetedConfirm && params.confirmButtonColor) {
	      target.style.backgroundColor = color;
	    }
	  }
	
	  switch (e.type) {
	    case 'mouseover':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;
	
	    case 'mouseout':
	      shouldSetConfirmButtonColor(normalColor);
	      break;
	
	    case 'mousedown':
	      shouldSetConfirmButtonColor(activeColor);
	      break;
	
	    case 'mouseup':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;
	
	    case 'focus':
	      var $confirmButton = modal.querySelector('button.confirm');
	      var $cancelButton = modal.querySelector('button.cancel');
	
	      if (targetedConfirm) {
	        $cancelButton.style.boxShadow = 'none';
	      } else {
	        $confirmButton.style.boxShadow = 'none';
	      }
	      break;
	
	    case 'click':
	      var clickedOnModal = modal === target;
	      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);
	
	      // Ignore click outside if allowOutsideClick is false
	      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
	        break;
	      }
	
	      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
	        handleConfirm(modal, params);
	      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
	        handleCancel(modal, params);
	      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
	        sweetAlert.close();
	      }
	      break;
	  }
	};
	
	/*
	 *  User clicked on "Confirm"/"OK"
	 */
	var handleConfirm = function handleConfirm(modal, params) {
	  var callbackValue = true;
	
	  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
	    callbackValue = modal.querySelector('input').value;
	
	    if (!callbackValue) {
	      callbackValue = '';
	    }
	  }
	
	  params.doneFunction(callbackValue);
	
	  if (params.closeOnConfirm) {
	    sweetAlert.close();
	  }
	  // Disable cancel and confirm button if the parameter is true
	  if (params.showLoaderOnConfirm) {
	    sweetAlert.disableButtons();
	  }
	};
	
	/*
	 *  User clicked on "Cancel"
	 */
	var handleCancel = function handleCancel(modal, params) {
	  // Check if callback function expects a parameter (to track cancel actions)
	  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
	  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';
	
	  if (functionHandlesCancel) {
	    params.doneFunction(false);
	  }
	
	  if (params.closeOnCancel) {
	    sweetAlert.close();
	  }
	};
	
	exports['default'] = {
	  handleButton: handleButton,
	  handleConfirm: handleConfirm,
	  handleCancel: handleCancel
	};
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _stopEventPropagation$fireClick = __webpack_require__(11);
	
	var _setFocusStyle = __webpack_require__(13);
	
	var handleKeyDown = function handleKeyDown(event, params, modal) {
	  var e = event || window.event;
	  var keyCode = e.keyCode || e.which;
	
	  var $okButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  var $modalButtons = modal.querySelectorAll('button[tabindex]');
	
	  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
	    // Don't do work on keys we don't care about.
	    return;
	  }
	
	  var $targetElement = e.target || e.srcElement;
	
	  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	  for (var i = 0; i < $modalButtons.length; i++) {
	    if ($targetElement === $modalButtons[i]) {
	      btnIndex = i;
	      break;
	    }
	  }
	
	  if (keyCode === 9) {
	    // TAB
	    if (btnIndex === -1) {
	      // No button focused. Jump to the confirm button.
	      $targetElement = $okButton;
	    } else {
	      // Cycle to the next button
	      if (btnIndex === $modalButtons.length - 1) {
	        $targetElement = $modalButtons[0];
	      } else {
	        $targetElement = $modalButtons[btnIndex + 1];
	      }
	    }
	
	    _stopEventPropagation$fireClick.stopEventPropagation(e);
	    $targetElement.focus();
	
	    if (params.confirmButtonColor) {
	      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
	    }
	  } else {
	    if (keyCode === 13) {
	      if ($targetElement.tagName === 'INPUT') {
	        $targetElement = $okButton;
	        $okButton.focus();
	      }
	
	      if (btnIndex === -1) {
	        // ENTER/SPACE clicked outside of a button.
	        $targetElement = $okButton;
	      } else {
	        // Do nothing - let the browser handle it.
	        $targetElement = undefined;
	      }
	    } else if (keyCode === 27 && params.allowEscapeKey === true) {
	      $targetElement = $cancelButton;
	      _stopEventPropagation$fireClick.fireClick($targetElement, e);
	    } else {
	      // Fallback - let the browser handle it.
	      $targetElement = undefined;
	    }
	  }
	};
	
	exports['default'] = handleKeyDown;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _isIE8 = __webpack_require__(12);
	
	var _getModal$getInput$setFocusStyle = __webpack_require__(13);
	
	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(11);
	
	var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];
	
	/*
	 * Set type, text and actions on modal
	 */
	var setParameters = function setParameters(params) {
	  var modal = _getModal$getInput$setFocusStyle.getModal();
	
	  var $title = modal.querySelector('h2');
	  var $text = modal.querySelector('p');
	  var $cancelBtn = modal.querySelector('button.cancel');
	  var $confirmBtn = modal.querySelector('button.confirm');
	
	  /*
	   * Title
	   */
	  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');
	
	  /*
	   * Text
	   */
	  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
	  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);
	
	  /*
	   * Custom class
	   */
	  if (params.customClass) {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
	    modal.setAttribute('data-custom-class', params.customClass);
	  } else {
	    // Find previously set classes and remove them
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
	    modal.setAttribute('data-custom-class', '');
	  }
	
	  /*
	   * Icon
	   */
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));
	
	  if (params.type && !_isIE8.isIE8()) {
	    var _ret = (function () {
	
	      var validType = false;
	
	      for (var i = 0; i < alertTypes.length; i++) {
	        if (params.type === alertTypes[i]) {
	          validType = true;
	          break;
	        }
	      }
	
	      if (!validType) {
	        logStr('Unknown alert type: ' + params.type);
	        return {
	          v: false
	        };
	      }
	
	      var typesWithIcons = ['success', 'error', 'warning', 'info'];
	      var $icon = undefined;
	
	      if (typesWithIcons.indexOf(params.type) !== -1) {
	        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
	        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
	      }
	
	      var $input = _getModal$getInput$setFocusStyle.getInput();
	
	      // Animate icon
	      switch (params.type) {
	
	        case 'success':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
	          break;
	
	        case 'error':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
	          break;
	
	        case 'warning':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
	          break;
	
	        case 'input':
	        case 'prompt':
	          $input.setAttribute('type', params.inputType);
	          $input.value = params.inputValue;
	          $input.setAttribute('placeholder', params.inputPlaceholder);
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
	          setTimeout(function () {
	            $input.focus();
	            $input.addEventListener('keyup', swal.resetInputError);
	          }, 400);
	          break;
	      }
	    })();
	
	    if (typeof _ret === 'object') {
	      return _ret.v;
	    }
	  }
	
	  /*
	   * Custom image
	   */
	  if (params.imageUrl) {
	    var $customIcon = modal.querySelector('.sa-icon.sa-custom');
	
	    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);
	
	    var _imgWidth = 80;
	    var _imgHeight = 80;
	
	    if (params.imageSize) {
	      var dimensions = params.imageSize.toString().split('x');
	      var imgWidth = dimensions[0];
	      var imgHeight = dimensions[1];
	
	      if (!imgWidth || !imgHeight) {
	        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
	      } else {
	        _imgWidth = imgWidth;
	        _imgHeight = imgHeight;
	      }
	    }
	
	    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
	  }
	
	  /*
	   * Show cancel button?
	   */
	  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
	  if (params.showCancelButton) {
	    $cancelBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
	  }
	
	  /*
	   * Show confirm button?
	   */
	  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
	  if (params.showConfirmButton) {
	    $confirmBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
	  }
	
	  /*
	   * Custom text on cancel/confirm buttons
	   */
	  if (params.cancelButtonText) {
	    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
	  }
	  if (params.confirmButtonText) {
	    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
	  }
	
	  /*
	   * Custom color on confirm button
	   */
	  if (params.confirmButtonColor) {
	    // Set confirm button to selected background color
	    $confirmBtn.style.backgroundColor = params.confirmButtonColor;
	
	    // Set the confirm button color to the loading ring
	    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
	    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;
	
	    // Set box-shadow to default focused button
	    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
	  }
	
	  /*
	   * Allow outside click
	   */
	  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);
	
	  /*
	   * Callback function
	   */
	  var hasDoneFunction = params.doneFunction ? true : false;
	  modal.setAttribute('data-has-done-function', hasDoneFunction);
	
	  /*
	   * Animation
	   */
	  if (!params.animation) {
	    modal.setAttribute('data-animation', 'none');
	  } else if (typeof params.animation === 'string') {
	    modal.setAttribute('data-animation', params.animation); // Custom animation
	  } else {
	    modal.setAttribute('data-animation', 'pop');
	  }
	
	  /*
	   * Timer
	   */
	  modal.setAttribute('data-timer', params.timer);
	};
	
	exports['default'] = setParameters;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(20);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var noticeCtrl = (function () {
	    _createClass(noticeCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['userService'];
	        }
	    }]);
	
	    function noticeCtrl(userService) {
	        _classCallCheck(this, noticeCtrl);
	
	        this.services = { userService: userService };
	        this.use = {};
	        this.violation = {};
	        this.renderViolation().renderRecords();
	    }
	
	    _createClass(noticeCtrl, [{
	        key: 'showDetail',
	        value: function showDetail() {
	            this.violation.detail = !this.violation.detail;
	            return this;
	        }
	    }, {
	        key: 'renderViolation',
	        value: function renderViolation() {
	            var _this = this;
	
	            var userService = this.services.userService;
	
	            userService.violation().success(function (d) {
	                if (d.success) {
	                    _this.violation.display = d.data.length;
	                    _this.violation.times = d.data.length;
	                    if (d.data.length) {
	                        (function () {
	                            var violation = [];
	                            angular.forEach(d.data, function (value) {
	                                var _violation = {};
	                                _violation.createTime = value.createTime;
	                                if (value.reason == 1) {
	                                    _violation.reason = '闭馆未正常离开';
	                                } else if (value.reason == 2) {
	                                    _violation.reason = '暂离超时';
	                                } else if (value.reason == 3) {
	                                    _violation.reason = '预约取消';
	                                }
	                                console.log(value);
	                                violation.push(_violation);
	                            });
	
	                            _this.violation.records = violation;
	                        })();
	                    }
	                } else _utils2['default'].handleCommonError();
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }, {
	        key: 'renderRecords',
	        value: function renderRecords() {
	            var _this2 = this;
	
	            var userService = this.services.userService;
	
	            userService.note().success(function (d) {
	                if (d.success) {
	                    (function () {
	                        var record = [];
	                        angular.forEach(d.data, function (value, key) {
	                            var _record = {};
	                            _record.createTime = value.createTime;
	                            if (value.state == 0) {
	                                _record['class'] = 'warn';
	                                _record.ctnt = '离座';
	                            } else if (value.state == 1) {
	                                _record['class'] = 'warn';
	                                _record.ctnt = '入座';
	                            } else if (value.state == 2) {
	                                _record['class'] = 'warn';
	                                _record.ctnt = '暂离';
	                            } else if (value.state == 3) {
	                                _record['class'] = 'warn';
	                                _record.ctnt = '预约';
	                            } else if (value.state == 4) {
	                                _record['class'] = 'warn';
	                                _record.ctnt = '取消';
	                            }
	                            record.push(_record);
	                        });
	                        _this2.use.records = record;
	                    })();
	                }
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	        }
	    }]);
	
	    return noticeCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/notice/notice.html',
	    controller: noticeCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var path = '/app/notice/notice.html';
	var html = "<div class=\"nav_title\">\n    <img src=\"" + __webpack_require__(21) + "\" alt=\"#\" onclick=\"window.location.href = '#/'\">\n    <p>我的公告</p>\n</div>\n<div class=\"white_bgc item_shaow border_raduis list_item notice_title\" id=\"notice_title\" ng-show=\"vm.violation.display\" ng-click=\"vm.showDetail()\">\n    <p class=\"warn warn_title\">您已违规{{vm.violation.times}}次</p>\n    <p class=\"gray\">违规3次将在2星期内无法预约</p>\n    <div class=\"alertBox\" id=\"alertBox\" ng-show=\"vm.violation.detail\">\n        <div class=\"weui-cell\" ng-repeat=\"record in vm.violation.records\">\n            <div class=\"weui-cell__bd\">\n                <p class=\"warn\">{{record.reason}}</p>\n            </div>\n            <div class=\"weui-cell__ft\">{{record.createTime | date:'yyyy-MM-dd HH:mm'}}</div>\n        </div>\n    </div>\n</div>\n<div class=\"white_bgc item_shaow border_raduis list_item notice_ctnt\">\n    <div class=\"weui-cell \" ng-repeat=\"record in vm.use.records\">\n        <div class=\"weui-cell__bd\">\n            <p class=\"{{record.class}}\">{{record.ctnt}}</p>\n        </div>\n        <div class=\"weui-cell__ft\">{{record.createTime | date:'yyyy-MM-dd HH:mm'}}</div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAS1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////+DmQsHAAAAGHRSTlMAECAwQFBfYHB/gI+Qn6Cwv8DP0N/g7/DnE4LWAAABzUlEQVR42u2dW5KCQBAEh5ezsoiKAn3/k+6PYl/Aja6OzBtkhGTJKFoKAAAAAAAAAAAAAAAAAEAwmtP51CTwqJuZPTt5j7OZmdlT3eNiL4YkHjZKX+bL4WE1icfe6np0zkP5Euk2S/HC6p3HLrwi1fJ5PIQ9fr2H8Pusi/O463o03mPOMYNpPH6YwUgeu7DHwJzHnfMkM5jF4yo85zfmPBLtkm8G08x5LzwfCed8FfY4M+dhPWbhOc94Vyv8sUHHnIeCQ+rAd7UcUoeaQQ6pmfNveHBIHeuuVvizcw6pA885d7WhPDikjjWDk64Hh9RxX1fKh9TllmMG/Q6u0l+ofqaYwVK6JB5lOua8aHN/Xx9NEpG5IBKD60tkU39pje+LfRE3+eR3EX++aD1MNm2T/vMWZaspLnf1B3NK83AmlzwmTRYT7QzP3kQ6XpMz0c6wPzDVzvCwZ8lwt2fJcEuGyTAZJsNkmAyTYTJMhskwGSbDZJgMk2EyTIbJMBkmw2SYDJNhMkyGyTAZJsNkmAyT4f/IsPRve/sMb62yic+w9rchXYalf27dZ1j8B/CPDK9FnrrLP9P0vlDqWDP8bQcAAAAAAAAAAAAAAAAAxOEPTr2Lm987JEQAAAAASUVORK5CYII="

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(23);
	
	var helpCtrl = function helpCtrl() {
	    _classCallCheck(this, helpCtrl);
	};
	
	exports['default'] = {
	    templateUrl: '/app/help/help.html',
	    controller: helpCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var path = '/app/help/help.html';
	var html = "<div class=\"nav_title\">\n    <img src=\"" + __webpack_require__(21) + "\" alt=\"#\" onclick=\"window.location.href = '#/'\">\n    <p>帮助</p>\n</div>\n<div class=\"white_bgc item_shaow border_raduis list_item help_box\">\n    <h3>使用方法</h3>\n    <p>&nbsp;&nbsp;&nbsp;&nbsp;南京信息工程大学多火工作室。 网站制作，移动开发，视觉设计，学术竞赛。希望在南信大建立一个IT的学习交流平台。多火工作室：大活201。南京信息工程大学多火工作室。 网站制作，移动开发，视觉设计，学术竞赛。希望在南信大建立一个IT的学习交流平台。多火工作室：大活201。南京信息工程大学多火工作室。 网站制作，移动开发，视觉设计，学术竞赛。希望在南信大建立一个IT的学习交流平台。多火工作室：大活201。</p>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(25);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var myInfoCtrl = (function () {
	    _createClass(myInfoCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['userService', '$cookies'];
	        }
	    }]);
	
	    function myInfoCtrl(userService, $cookies) {
	        _classCallCheck(this, myInfoCtrl);
	
	        this.services = { userService: userService, $cookies: $cookies };
	        this.user = {
	            time: '0h'
	        };
	        this.getInfo();
	    }
	
	    _createClass(myInfoCtrl, [{
	        key: 'getInfo',
	        value: function getInfo() {
	            var _this = this;
	
	            var userService = this.services.userService;
	
	            userService.info().success(function (d) {
	                if (d.success) _this.renderPage(d.data);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }, {
	        key: '_logout',
	        value: function _logout() {
	            var _services = this.services;
	            var userService = _services.userService;
	            var $cookies = _services.$cookies;
	
	            userService.logout().success(function (d) {
	                if (d.success) {
	                    if ($cookies.getAll()) {
	                        $cookies.remove('userId');
	                        $cookies.remove('token');
	                        _utils2['default'].handleCommonConfirm('退出登录成功。', 0);
	                    }
	                } else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            alert('success');
	        }
	    }, {
	        key: 'renderPage',
	        value: function renderPage(data) {
	            this.user.name = data.user.name;
	            this.user.time = data.user.studyTime;
	        }
	    }]);
	
	    return myInfoCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/myInfo/myInfo.html',
	    controller: myInfoCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var path = '/app/myInfo/myInfo.html';
	var html = "<div class=\"nav_title\">\n    <img src=\"" + __webpack_require__(21) + "\" alt=\"#\" onclick=\"window.location.href = '#/'\">\n    <p>我的</p>\n</div>\n<div class=\"white_bgc item_shaow border_raduis list_item me_box\">\n    <div class=\"avatar_box\">\n        <img class=\"me_avatar\" src=\"" + __webpack_require__(5) + "\"></img>\n    </div>\n    <div class=\"avatar_text\" ng-bind=\"vm.user.name\"></div>\n    <div class=\"avatar_text gray\">已学习时长：<span ng-bind=\"vm.user.time | duration\"></span></div>\n    <div class=\"apply\" ng-click=\"vm.logout()\">\n        退出登录\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(27);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var selectCtrl = (function () {
	    _createClass(selectCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['roomService', 'seatService', '$window'];
	        }
	    }]);
	
	    function selectCtrl(roomService, seatService, $window) {
	        _classCallCheck(this, selectCtrl);
	
	        this.chooseSeat;
	        this.services = { roomService: roomService, seatService: seatService, $window: $window };
	        this.desks = [];
	        this.roomId;
	        this.renderDesk();
	    }
	
	    _createClass(selectCtrl, [{
	        key: 'picker',
	        value: function picker() {
	            var $window = this.services.$window;
	
	            $window.weui.picker([{
	                label: '1st楼层',
	                value: '一楼的id',
	                children: [{
	                    label: '教室１',
	                    value: '教室１的id'
	                }, {
	                    label: 'x2',
	                    value: 'x2'
	                }, {
	                    label: 'x3',
	                    value: 'x3'
	                }]
	            }, {
	                label: '2nd楼层',
	                value: 1,
	                children: [{
	                    label: 'x1',
	                    value: 'x1'
	                }, {
	                    label: 'x2',
	                    value: 'x2'
	                }, {
	                    label: 'x3',
	                    value: 'x3'
	                }]
	            }, {
	                label: '3rd楼层',
	                value: 2,
	                children: [{
	                    label: 'x1',
	                    value: 'x1'
	                }, {
	                    label: 'x2',
	                    value: 'x2'
	                }, {
	                    label: 'x3',
	                    value: 'x3'
	                }]
	            }, {
	                label: '4th楼层 (disabled)',
	                disabled: true,
	                value: 3,
	                children: [{
	                    label: 'x1',
	                    value: 'x1'
	                }, {
	                    label: 'x2',
	                    value: 'x2'
	                }, {
	                    label: 'x3',
	                    value: 'x3'
	                }]
	            }, {
	                label: '5th楼层',
	                value: 4,
	                children: [{
	                    label: 'x1',
	                    value: 'x1'
	                }, {
	                    label: 'x2',
	                    value: 'x2'
	                }, {
	                    label: 'x3',
	                    value: 'x3'
	                }]
	            }], {
	                onChange: function onChange(result) {
	                    console.log(result);
	                },
	                onConfirm: function onConfirm(result) {
	                    console.log(result);
	                    document.getElementById('showPickerText').innerText = result;
	                }
	            });
	        }
	    }, {
	        key: 'chooseRoom',
	        value: function chooseRoom() {
	
	            //拿到房间的Id并赋值给 this.roomId
	
	        }
	    }, {
	        key: 'renderDesk',
	        value: function renderDesk() {
	            var _this = this;
	
	            var roomService = this.services.roomService;
	
	            roomService.deskDetail(1000).success(function (d) {
	                if (d.success) {
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = d.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var desk = _step.value;
	
	                            var _desk = {};
	                            _desk.cells = [];
	                            var _left = (desk.y - 1) * 60 + 25;
	                            var _top = (desk.x - 1) * 50 + 15;
	                            _desk.position = 'left:' + _left + 'px;top:' + _top + 'px;';
	                            var _iteratorNormalCompletion2 = true;
	                            var _didIteratorError2 = false;
	                            var _iteratorError2 = undefined;
	
	                            try {
	                                for (var _iterator2 = desk.seats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                    var seat = _step2.value;
	
	                                    var _seat = {};
	                                    _seat.state = seat.state;
	                                    _seat.id = seat.seatId;
	                                    _desk.cells.push(_seat);
	                                }
	                            } catch (err) {
	                                _didIteratorError2 = true;
	                                _iteratorError2 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	                                        _iterator2['return']();
	                                    }
	                                } finally {
	                                    if (_didIteratorError2) {
	                                        throw _iteratorError2;
	                                    }
	                                }
	                            }
	
	                            _this.desks.push(_desk);
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator['return']) {
	                                _iterator['return']();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                } else _utils2['default'].handleCommonError();
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }, {
	        key: 'choose',
	        value: function choose(i, j) {
	            if (!this.desks[i].cells[j].state) {
	                this.desks[i].cells[j].state = 4;
	                if (this.chooseSeat) {
	                    var last = this.chooseSeat;
	                    this.desks[last[0]].cells[last[1]].state = 0;
	                }
	                this.chooseSeat = [i, j];
	            } else if (this.desks[i].cells[j].state == 4) {
	                this.desks[i].cells[j].state = 0;
	                this.chooseSeat = '';
	            }
	            return this;
	        }
	    }, {
	        key: 'submitSeat',
	        value: function submitSeat() {
	            var seatService = this.services.seatService;
	
	            if (this.chooseSeat) {
	                var seat = this.chooseSeat;
	                seatService.order(this.desks[seat[0]].cells[seat[1]].id).success(function (d) {
	                    if (d.success) _utils2['default'].handleCommonConfirm('预约成功，快点来吧！', 0);else _utils2['default'].handleCommonError();
	                }).error(function (e) {
	                    _utils2['default'].handleUnknowError();
	                });
	            } else {
	                _utils2['default'].handleCommonWarning('你还没有选择座位。');
	            }
	        }
	    }]);
	
	    return selectCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/select/select.html',
	    controller: selectCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var path = '/app/select/select.html';
	var html = "<div class=\"nav_title select_nav\">\n    <img src=\"" + __webpack_require__(21) + "\" alt=\"#\" onclick=\"window.location.href = '#/'\">\n    <p>线上预约</p>\n</div>\n<div class=\"chooseRoom\">\n    <a href=\"javascript:;\" class=\"weui-cell weui-cell_access js_item white_bgc item_shaow border_raduis list_item ctnt-cell top_border_none\" ng-click=\"vm.picker()\"><span id=\"showPickerText\">已选择：一楼实验教室</span></a>\n</div>\n<div class=\"tips-wrapper\">\n    <div class='tip'>\n        <span class=\"seat\"></span><span class=\"text\"> 可选</span>\n    </div>\n    <div class='tip'>\n        <span class=\"seat active\"></span><span class=\"text\"> 已选</span>\n    </div>\n    <div class='tip'>\n        <span class=\"seat taken\"></span><span class=\"text\"> 正在使用</span>\n    </div>\n    <div class='tip'>\n        <span class=\"seat away\"></span><span class=\"text\"> 暂离</span>\n    </div>\n    <div class='tip'>\n        <span class=\"seat booking\"></span><span class=\"text\"> 预占中</span>\n    </div>\n</div>\n<div class=\"canvas-wrapper\">\n    <div class=\"canvas\">\n        <div class=\"desk grid\" ng-repeat=\"table in vm.desks\" style=\"{{table.position}}\">\n            <span ng-repeat=\"seat in table.cells\" class=\"seat {{$index | cellPosition}} {{seat.state | cellState}}\" ng-click=\"vm.choose($parent.$index,$index)\"></span>\n        </div>\n    </div>\n</div>\n<div class=\"submitSeat\">\n    <div class=\"submitCtnt\">\n        <p>您已选择了一楼实验教室６６号座位</p>\n    </div>\n    <div class=\"submitBtn\" ng-click=\"vm.submitSeat()\">确认选座</div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(29);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var scanCtrl = (function () {
	    _createClass(scanCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['userService', 'seatService', '$location'];
	        }
	    }]);
	
	    function scanCtrl(userService, seatService, $location) {
	        _classCallCheck(this, scanCtrl);
	
	        this.services = { userService: userService, seatService: seatService, $location: $location };
	        this.seat = {};
	        this.user = {};
	        this.getInfo();
	    }
	
	    _createClass(scanCtrl, [{
	        key: 'setdata',
	        value: function setdata(data) {
	            var $location = this.services.$location;
	
	            var local = $location.search();
	            this.seat.local = local.seatId;
	            this.user.state = data.user.state;
	            if (data.user.state) {
	                this.seat.user = data.seat.seatId;
	                this.seat.state = data.seat.state;
	            }
	            return this.handleSeat();
	        }
	    }, {
	        key: 'getInfo',
	        value: function getInfo() {
	            var _this = this;
	
	            var userService = this.services.userService;
	
	            userService.info().success(function (d) {
	                if (d.success) _this.setdata(d.data);else
	                    // Util.handleCommonError(d.data.stateInfo);
	                    console.log(e);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	    }, {
	        key: 'handleSeat',
	        value: function handleSeat() {
	            var seatService = this.services.seatService;
	
	            var _user = this.user.state;
	            var _local = this.seat.local;
	            if (_user) {
	                var _state = this.seat.state;
	                var _seat = this.seat.user;
	                //预约就座
	                if (_state == 3) {
	                    //预约座位与扫码座位相同
	                    if (_local == _seat) {
	                        seatService.use(_local).success(function (d) {
	                            if (d.success) _utils2['default'].handleCommonConfirm('欢迎入座。', 0);else _utils2['default'].handleCommonError(d.data.stateInfo);
	                        }).error(function (e) {
	                            _utils2['default'].handleUnknowError();
	                        });
	                    } else
	                        //预约座位与扫码座位不同
	                        _utils2['default'].handleCommonConfirm('入座失败，预定座位与扫码座位不同。', 0);
	                } else if (_state == 2) {
	                    //离座后入座
	                    if (_local == _seat) {
	                        //离座座位与扫码座位相同
	                        seatService.use(_local).success(function (d) {
	                            if (d.success) _utils2['default'].handleCommonConfirm('欢迎回来，加油学习吧。', 0);else _utils2['default'].handleCommonError(d.data.stateInfo);
	                        }).error(function (e) {
	                            _utils2['default'].handleUnknowError();
	                        });
	                    } else
	                        //离座座位与扫码座位不同
	                        _utils2['default'].handleCommonConfirm('扫码失败，请回到正确座位扫码。', 0);
	                }
	            } else {
	                seatService.hold(_local).success(function (d) {
	                    if (d.success) _utils2['default'].handleCommonConfirm('欢迎入座。', 0);else _utils2['default'].handleCommonError(d.data.stateInfo);
	                }).error(function (e) {
	                    _utils2['default'].handleUnknowError();
	                });
	            }
	
	            return this;
	        }
	    }]);
	
	    return scanCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/scan/scan.html',
	    controller: scanCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	var path = '/app/scan/scan.html';
	var html = "<div style=\"display: none;\">scan</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(31);
	
	var _utils = __webpack_require__(9);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var loginCtrl = (function () {
	    _createClass(loginCtrl, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['userService', '$cookies', '$location'];
	        }
	    }]);
	
	    function loginCtrl(userService, $cookies, $location) {
	        _classCallCheck(this, loginCtrl);
	
	        this.services = { userService: userService, $cookies: $cookies, $location: $location };
	        this.login();
	    }
	
	    /**
	     * 登录
	     * @param {string} id　学号 
	     * @param {string} passwd　密码 
	     */
	
	    _createClass(loginCtrl, [{
	        key: 'login',
	        value: function login() {
	            var _this = this;
	
	            var _services = this.services;
	            var userService = _services.userService;
	            var $location = _services.$location;
	
	            var value = $location.search();
	            var id = value.id;
	            var passwd = value.passwd;
	            userService.login(id, passwd).success(function (d) {
	                if (d.success) _this.setcookies(d.data);else _utils2['default'].handleCommonError(d.data.stateInfo);
	            }).error(function (e) {
	                _utils2['default'].handleUnknowError();
	            });
	            return this;
	        }
	
	        /**
	         * 设置cookies
	         * @param {obj} data　 
	         *      data.userId: 用户id
	         *      data.token: token
	         */
	    }, {
	        key: 'setcookies',
	        value: function setcookies(data) {
	            var $cookies = this.services.$cookies;
	
	            if ($cookies.getAll()) {
	                $cookies.remove('userId');
	                $cookies.remove('token');
	            }
	            var expireDate = new Date();
	            expireDate.setDate(expireDate.getDate() + 1);
	            $cookies.put('userId', data.userId, { 'expires': expireDate });
	            $cookies.put('token', data.token, { 'expires': expireDate });
	            window.location.href = '/#/';
	            return this;
	        }
	    }]);
	
	    return loginCtrl;
	})();
	
	exports['default'] = {
	    templateUrl: '/app/login/login.html',
	    controller: loginCtrl,
	    controllerAs: 'vm'
	};
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	var path = '/app/login/login.html';
	var html = "<div style=\"display: none;\">login</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports) {

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
	
	'use strict';
	
	angular.module('dataService', [], ["$httpProvider", function ($httpProvider) {
	    // Use x-www-form-urlencoded Content-Type
	    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	
	    /**
	     * The workhorse; converts an object to x-www-form-urlencoded serialization.
	     * @param {Object} obj
	     * @return {String}
	     */
	    var param = function param(obj) {
	        var query = '',
	            name,
	            value,
	            fullSubName,
	            subName,
	            subValue,
	            innerObj,
	            i;
	
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
	            } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	        }
	
	        return query.length ? query.substr(0, query.length - 1) : query;
	    };
	
	    // Override $http service's default transformRequest
	    $httpProvider.defaults.transformRequest = [function (data) {
	        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	    }];
	}]).factory('userService', ['$http', function ($http) {
	    var log = function log(path, id, passwd) {
	        var _id = id || undefined;
	        var _passwd = passwd || undefined;
	        return $http({
	            method: 'POST',
	            url: path,
	            data: {
	                'id': _id,
	                'password': _passwd
	            }
	        });
	    };
	
	    var _info = function _info(path) {
	        return $http({
	            method: 'GET',
	            url: path
	        });
	    };
	    return {
	        login: function login(id, passwd) {
	            return log('/api/user/login', id, passwd);
	        },
	        logout: function logout() {
	            return log('/api/user/logout');
	        },
	        info: function info() {
	            return _info('/api/user');
	        },
	        violation: function violation() {
	            return _info('/api/user/violation');
	        },
	        note: function note() {
	            return _info('/api/user/note');
	        }
	    };
	}]).factory('seatService', ['$http', function ($http) {
	    var seat = function seat(path) {
	        return $http({
	            method: 'POST',
	            url: path
	        });
	    };
	    return {
	        order: function order(seatId) {
	            return seat('/api/seat/' + seatId + '/order');
	        }, //预定
	        hold: function hold(seatId) {
	            return seat('/api/seat/' + seatId + '/hold');
	        }, //入座
	        release: function release(seatId) {
	            return seat('/api/seat/' + seatId + '/release');
	        }, //离座
	        temp: function temp(seatId) {
	            return seat('/api/seat/' + seatId + '/release/tmp');
	        }, //暂离
	        use: function use(seatId) {
	            return seat('/api/seat/' + seatId + '/comeBack');
	        }, //返回/预约入座
	        cancel: function cancel(seatId) {
	            return seat('/api/seat/' + seatId + '/cancel');
	        } };
	}]). //取消预约
	factory('roomService', ['$http', function ($http) {
	    var room = function room(path) {
	        return $http({
	            method: 'GET',
	            url: path
	        });
	    };
	    return {
	        roomDetail: function roomDetail() {
	            return room('/api/room/list');
	        },
	        deskDetail: function deskDetail(roomId) {
	            return room('/api/room/' + roomId + '/desks');
	        },
	        seatDetail: function seatDetail(roomId) {
	            return room('/api/room/' + roomId + '/seats');
	        }
	    };
	}]);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTNjZTQ1ODZiNzI0MmE4ZDBkZTkiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlL3R1c2h1Z3VhbjAxLmpwZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2UvYXZhdGFyLmpwZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2UvbXlzaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2UvbGlicmFyeS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ltYWdlL2hlbHAucG5nIiwid2VicGFjazovLy8uL2FwcC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL3N3ZWV0YWxlcnQvbGliL3N3ZWV0YWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtc3dhbC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2RlZmF1bHQtcGFyYW1zLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9pbmplY3RlZC1odG1sLmpzIiwid2VicGFjazovLy8uL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtY2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL3NldC1wYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGljZS9ub3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL25vdGljZS9ub3RpY2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaW1hZ2UvYmFjazIucG5nIiwid2VicGFjazovLy8uL2FwcC9oZWxwL2hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hlbHAvaGVscC5odG1sIiwid2VicGFjazovLy8uL2FwcC9teUluZm8vbXlJbmZvLmpzIiwid2VicGFjazovLy8uL2FwcC9teUluZm8vbXlJbmZvLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlbGVjdC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlbGVjdC9zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2Nhbi9zY2FuLmpzIiwid2VicGFjazovLy8uL2FwcC9zY2FuL3NjYW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztrQ0N0Q2tCLENBQVM7Ozs7cUJBQ3BCLEVBQWtCOztxQkFDbEIsRUFBYzs7QUFFckIsUUFBTyxD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Q0E7O0FBRUE7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxxQzs7Ozs7O0FDOVNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQ7Ozs7OztBQzlMQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQ3hFQTs7QUFFQSwrQ0FBOEMsdUNBQXVDLGtCQUFrQjs7QUFFdkc7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EOzs7Ozs7QUN0S0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ3pDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7OztBQ3RJQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFvQjtBQUNwQixrQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQzs7Ozs7O0FDOUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHNCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzY2U0NTg2YjcyNDJhOGQwZGU5IiwiaW1wb3J0IFJvdXRlIGZyb20gJy4vcm91dGUnO1xuaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zZXJ2aWNlLmpzJztcblxuYW5ndWxhci5tb2R1bGUoJ2ZpcmVhbnQnLCBbXG4gICAgICAgICduZ1JvdXRlJyxcbiAgICAgICAgJ25nUmVzb3VyY2UnLFxuICAgICAgICAnZGF0YVNlcnZpY2UnLFxuICAgICAgICAnbmdDb29raWVzJyxcbiAgICBdKVxuICAgIC5ydW4oKCRodHRwLCAkd2luZG93LCAkbG9jYXRpb24pID0+IHtcbiAgICAgICAgLy/phY3nva7lvq7kv6FKU3Nka2NvbmZpZ1xuICAgICAgICBsZXQgX3VybCA9IGAkeyRsb2NhdGlvbi5wcm90b2NvbCgpfTovLyR7JGxvY2F0aW9uLmhvc3QoKX0vYDtcbiAgICAgICAgbGV0IHNpZ24gPSB7fTtcbiAgICAgICAgZ2V0Q29uZmlnKF91cmwpXG4gICAgICAgICAgICAudGhlbihkID0+IHtcbiAgICAgICAgICAgICAgICAkd2luZG93Lnd4LmNvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgICdub25jZVN0cic6IGQubm9uY2VzdHIsXG4gICAgICAgICAgICAgICAgICAgICd0aW1lc3RhbXAnOiBkLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgJ2FwcElkJzogZC5hcHBpZCxcbiAgICAgICAgICAgICAgICAgICAgJ3NpZ25hdHVyZSc6IGQuc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICAnanNBcGlMaXN0JzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYW5RUkNvZGUnXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAkd2luZG93Lnd4LmVycm9yKHJlcyA9PiB7XG4gICAgICAgICAgICByZWZyZXNoKClcbiAgICAgICAgICAgICAgICAudGhlbihkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldENvbmZpZyhfdXJsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICR3aW5kb3cud3guY29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdub25jZVN0cic6IGQubm9uY2VzdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGltZXN0YW1wJzogZC50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAnYXBwSWQnOiBkLmFwcGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NpZ25hdHVyZSc6IGQuc2lnbmF0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2pzQXBpTGlzdCc6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2NhblFSQ29kZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbmZpZyh1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvc3lzdGVtL3NpZ25hdHVyZT91cmw9JHt1cmx9YClcbiAgICAgICAgICAgICAgICAudGhlbihkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zeXN0ZW0vcmVmcmVzaCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEuc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKCdjZWxsU3RhdGUnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PSAxKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3Rha2VuJztcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PSAyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F3YXknO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlID09IDMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYm9va2luZyc7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT0gNClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIC5maWx0ZXIoJ2NlbGxQb3NpdGlvbicsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBudW0gPT4gYHAke251bSArIDF9YFxuICAgICAgICB9KVxuICAgIC5maWx0ZXIoJ3Zpb2xhdGlvbicsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWFzb24gPT4ge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgLmZpbHRlcignZHVyYXRpb24nLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGltZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWUgPCA2MDAwMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcwbSc7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZSA8IDYwMDAwICogNjApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtwYXJzZUludCh0aW1lLzYwMDAwKX1tYFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3BhcnNlSW50KHRpbWUgLyAzNjAwMDAwKX1oJHtwYXJzZUludCh0aW1lICUgMzYwMDAwMCAvIDYwMDAwKX1tYFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIC5jb25maWcoUm91dGUpO1xuXG4vKipcbiAqIGNlbGxTdGF0ZTrjgIDmoLnmja7luqfkvY3nmoRzdGF0Zei/lOWbnuW6p+S9jeWvueW6lGNsYXNzXG4gKiAgICAg5Lyg5YWlICAgICAgICAgICDov5Tlm55cbiAqIOOAgO+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8je+8jVxuICogICAgIO+8ke+8miDmnInkurogPC0tPiB0YWtlblxuICogICAgIO+8ku+8miDmmoLnprsgPC0tPiBhd2F56aKc6ImyXG4gKiAgICAg77yT77yaIOmihOWNoCA8LS0+IGJvb2tpbmdcbiAqICAgICDvvJTvvJog6YCJ5LitIDwtLT4gYWN0aXZlXG4gKiBjZWxsUG9zaXRpb27vvJrmoLnmja7luqfkvY3nmoRwb3NpdGlvbui/lOWbnuW6p+S9jeS9jee9ruWvueW6lGNsYXNzXG4gKiAgICAgIOS8oOWFpSAgICAgICDov5Tlm55cbiAqICDvvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI3vvI1cbiAqICAgICAgMDogICAgICBwMSjlt6bkuIrop5IpXG4gKiAgICAgIDE6ICAgICAgcDIo5bem5LiL6KeSKVxuICogICAgICAyOiAgICAgIHAzKOWPs+S4iuinkilcbiAqICAgICAgMzogICAgICBwNCjlj7PkuIvop5IpXG4gKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjAuNkBuZy1hbm5vdGF0ZS1sb2FkZXIvbG9hZGVyLmpzP2FkZD10cnVlIS4vfi8uMS42LjNAZXNsaW50LWxvYWRlciEuL2FwcC9hcHAuanMiLCJpbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUvaG9tZS5qcyc7XG5pbXBvcnQgbm90aWNlIGZyb20gJy4vbm90aWNlL25vdGljZS5qcyc7XG5pbXBvcnQgaGVscCBmcm9tICcuL2hlbHAvaGVscC5qcyc7XG5pbXBvcnQgbXlJbmZvIGZyb20gJy4vbXlJbmZvL215SW5mby5qcyc7XG5pbXBvcnQgc2VsZWN0IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5qcyc7XG5pbXBvcnQgc2NhbiBmcm9tICcuL3NjYW4vc2Nhbi5qcyc7XG5pbXBvcnQgbG9naW4gZnJvbSAnLi9sb2dpbi9sb2dpbi5qcyc7XG5cbmNvbnN0IHJvdXRlQ29uZmlnID0gW1xuICAgIFsnLycsIEhvbWVdLFxuICAgIFsnL25vdGljZScsIG5vdGljZV0sXG4gICAgWycvaGVscCcsIGhlbHBdLFxuICAgIFsnL215SW5mbycsIG15SW5mb10sXG4gICAgWycvc2VsZWN0Jywgc2VsZWN0XSxcbiAgICBbJy9zY2FuJywgc2Nhbl0sXG4gICAgWycvbG9naW4nLCBsb2dpbl0sXG5dO1xuXG5jb25zdCBjb25maWcgPSAvKiBAbmdJbmplY3QgKi8gW1wiJHJvdXRlUHJvdmlkZXJcIiwgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgICByb3V0ZUNvbmZpZy5mb3JFYWNoKGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKGNvbmZpZ1swXSwgY29uZmlnWzFdKTtcbiAgICB9KTtcblxuICAgICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86ICcvJyB9KTtcbn1dO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4wLjZAbmctYW5ub3RhdGUtbG9hZGVyL2xvYWRlci5qcz9hZGQ9dHJ1ZSEuL34vLjEuNi4zQGVzbGludC1sb2FkZXIhLi9hcHAvcm91dGUuanMiLCJpbXBvcnQgJy4vaG9tZS5odG1sJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWxzJztcblxuY2xhc3MgaG9tZUN0cmwge1xuICAgIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIFsndXNlclNlcnZpY2UnLCAnc2VhdFNlcnZpY2UnLCAnJGNvb2tpZXMnLCAnJGh0dHAnLCAnJHdpbmRvdyddO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlLCBzZWF0U2VydmljZSwgJGNvb2tpZXMsICRodHRwLCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMuc2VydmljZXMgPSB7IHVzZXJTZXJ2aWNlLCBzZWF0U2VydmljZSwgJGNvb2tpZXMsICRodHRwLCAkd2luZG93IH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1c2VyLm5hbWU6IOeUqOaIt+Wnk+WQjVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VhdElkO1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlY29yZCA9IHsgZGlzcGxheTogdHJ1ZSB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogdmlvbGF0aW9uLm5ldzog55So5oi35piv5ZCm5pyJ5paw55qE6L+d6KeE6K6w5b2VXG4gICAgICAgICAqIHZpb2xhdGlvbi50ZXh0OiDnlKjmiLfmnInmlrDov53nuqbmj5DnpLrmlofmnKxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmlvbGF0aW9uID0ge1xuICAgICAgICAgICAgbmV3OiBmYWxzZSxcbiAgICAgICAgICAgIHRleHQ6ICfmgqjmnInmlrDnmoTov53op4TorrDlvZUnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRJbmZvKCk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlueUqOaIt+ivpue7huS/oeaBr++8jOW5tuiwg+eUqHJlbmRlclBhZ2UoZGF0YSnlpITnkIbmlbDmja5cbiAgICAgKi9cbiAgICBnZXRJbmZvKCkge1xuICAgICAgICB2YXIgeyB1c2VyU2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgdXNlclNlcnZpY2UuaW5mbygpXG4gICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhZ2UoZC5kYXRhKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25FcnJvcihkLmVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZSA9PiB7XG4gICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVVbmtub3dFcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5aSE55CG5pWw5o2u5qih5Z6L77yM55So5p2l5riy5p+T6aG16Z2iXG4gICAgICogQHBhcmFtIHtvYmp9IGRhdGEgXG4gICAgICogICAgICBkYXRhLnVzZXI6IOeUqOaIt+S4quS6uuS/oeaBr1xuICAgICAqICAgICAgZGF0YS5zZWF0OiDnlKjmiLfluqfkvY3kv6Hmga9cbiAgICAgKiAgICAgIGRhdGEucm9vbTog55So5oi36ZiF6KeI5a6k5L+h5oGvXG4gICAgICogICAgICBkYXRhLmxhc3RUaW1lOiDnlKjmiLfkuIrmrKHmk43kvZzml7bpl7TngrlcbiAgICAgKiAgICAgIGRhdGEuc2VhdC5zdGF0ZVxuICAgICAqICAgICAgICAgIDA6IOaXoOS6ulxuICAgICAqICAgICAgICAgIDE6IOacieS6ulxuICAgICAqICAgICAgICAgIDI6IOaaguemu1xuICAgICAqICAgICAgICAgIDM6IOmihOe6plxuICAgICAqL1xuICAgIHJlbmRlclBhZ2UoZGF0YSkge1xuICAgICAgICB2YXIgeyB0aW1lRGlmZiB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgdGhpcy51c2VyLm5hbWUgPSBkYXRhLnVzZXIubmFtZTtcbiAgICAgICAgdGhpcy5yZWNvcmQuZGlzcGxheSA9IGRhdGEudXNlci5zdGF0ZTtcbiAgICAgICAgdGhpcy52aW9sYXRpb24ubmV3ID0gZGF0YS51c2VyLm1zZztcblxuICAgICAgICBmdW5jdGlvbiBzd2l0Y2hQcmludChhLCBiLCBjLCBkLCBlLCBmLCBnLCB6KSB7XG4gICAgICAgICAgICB6LnJlY29yZC5jbGFzc1JscyA9IGE7XG4gICAgICAgICAgICB6LnJlY29yZC5zZWF0VGl0ID0gYjtcbiAgICAgICAgICAgIHoucmVjb3JkLnRpbWVUaXQgPSBjO1xuICAgICAgICAgICAgei5yZWNvcmQuYnRuQ2xlID0gZDtcbiAgICAgICAgICAgIHoucmVjb3JkLmJ0blN1cmUgPSBlO1xuICAgICAgICAgICAgei5yZWNvcmQuY2xjU3RhdGUgPSBmO1xuICAgICAgICAgICAgei5yZWNvcmQuc3VyZVN0YXRlID0gZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS51c2VyLnN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXRJZCA9IGRhdGEuc2VhdC5zZWF0SWQ7XG4gICAgICAgICAgICB0aGlzLnRpbWVEaWZmKGRhdGEubGFzdFRpbWUpLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmQudGltZUN0bnQgPSBkYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnJlY29yZC5zZWF0Q3RudCA9IGRhdGEucm9vbS5uYW1lICsgZGF0YS5zZWF0LnNlYXRJZCArICflj7fluqfkvY0nO1xuICAgICAgICAgICAgc3dpdGNoIChkYXRhLnNlYXQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFByaW50KHRydWUsICfpooTnuqbluqfkvY0nLCAn6aKE57qm5pe26Ze0JywgJ+WPlua2iOmihOe6picsICfnoa7orqTlsLHluqcnLCAnY2xjT3JkZXInLCAndXNlU2VhdCcsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFByaW50KGZhbHNlLCAn5oiR55qE5bqn5L2NJywgJ+WcqOe6v+aXtumVvycsICfmmoLnprvluqfkvY0nLCAn5L2/55So5a6M5oiQJywgJ3RtcExldicsICdmaW5pc2hVc2UnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hQcmludCh0cnVlLCAn5oiR55qE5bqn5L2NJywgJ+W3suemu+aXtumVvycsICflj5bmtojkvb/nlKgnLCAn56Gu6K6k6L+U5ZueJywgJ2NsY1VzZScsICdiYWNrJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h566X5pe26Ze05beuXG4gICAgICog5LiO5ZCO56uvQVBJ57O757uf55qE5pe26Ze05Li65Z+65YeG5pe26Ze077yM6K6h566X5pe26Ze05beuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWXjgIDpnIDopoHorqHnrpfnmoTml7bpl7TngrlcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRpbWVEaWZmZXJlbmNlIOaXtumXtOW3riBcbiAgICAgKi9cbiAgICB0aW1lRGlmZih0aW1lKSB7XG4gICAgICAgIHZhciB7ICRodHRwIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICBsZXQgdGltZURpZmZlcmVuY2UgPSBudWxsO1xuICAgICAgICBsZXQgX3RpbWVEaWZmZXJlbmNlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9zeXN0ZW0vdGltZS9ub3cnKS50aGVuKGQgPT4ge1xuICAgICAgICAgICAgX3RpbWVEaWZmZXJlbmNlID0gZC5kYXRhLmRhdGEgLSB0aW1lO1xuICAgICAgICAgICAgaWYgKF90aW1lRGlmZmVyZW5jZSA8IDYwMDAwKVxuICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gJzDliIbpkp8nO1xuICAgICAgICAgICAgZWxzZSBpZiAoX3RpbWVEaWZmZXJlbmNlIDwgNjAgKiA2MDAwMClcbiAgICAgICAgICAgICAgICB0aW1lRGlmZmVyZW5jZSA9IHBhcnNlSW50KF90aW1lRGlmZmVyZW5jZSAvIDYwMDAwKSArICfliIbpkp8nO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRpbWVEaWZmZXJlbmNlID0gcGFyc2VJbnQoX3RpbWVEaWZmZXJlbmNlIC8gMzYwMDAwMCkgKyAn5bCP5pe2J+OAgCArXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoX3RpbWVEaWZmZXJlbmNlICUgMzYwMDAwMCAvIDYwMDAwKSArICfliIbpkp8nO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVEaWZmZXJlbmNlO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOe6v+S4i+WNoOW6p1xuICAgICAqIOWIpOaWreeUqOaIt+S9jee9ruW5tuaJq+aPj+S6jOe7tOeggeWQjuWKoOi9vWpz5Y+R6YCB6K+35rGCXG4gICAgICovXG4gICAgb2ZmbGluZUhvbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW4oKTtcbiAgICB9XG5cbiAgICBzY2FuKCkge1xuICAgICAgICB2YXIgeyAkd2luZG93IH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvIy9zY2FuP3NlYXRJZD0xMDAwJ1xuICAgICAgICAkd2luZG93Lnd4LnNjYW5RUkNvZGUoe1xuICAgICAgICAgICAgbmVlZFJlc3VsdDogMCwgLy8g6buY6K6k5Li6MO+8jOaJq+aPj+e7k+aenOeUseW+ruS/oeWkhOeQhu+8jDHliJnnm7TmjqXov5Tlm57miavmj4/nu5PmnpzvvIxcbiAgICAgICAgICAgIHNjYW5UeXBlOiBbJ3FyQ29kZScsICdiYXJDb2RlJ10sIC8vIOWPr+S7peaMh+WumuaJq+S6jOe7tOeggei/mOaYr+S4gOe7tOegge+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5yZXN1bHRTdHI7IC8vIOW9k25lZWRSZXN1bHQg5Li6IDEg5pe277yM5omr56CB6L+U5Zue55qE57uT5p6cXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5bmtojmgKfotKjmjInpkq5cbiAgICAgKiAgICAgIGNsY09yZGVyOiDlj5bmtojpooTnuqZcbiAgICAgKiAgICAgIHRtcExldjog5pqC5pe256a75byAXG4gICAgICogICAgICBjbGNVc2U6IOWPlua2iOS9v+eUqFxuICAgICAqL1xuICAgIGNsY0YoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5yZWNvcmQuY2xjU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsY09yZGVyJzpcbiAgICAgICAgICAgICAgICB0aGlzLmNsY09yZGVyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0bXBMZXYnOlxuICAgICAgICAgICAgICAgIHRoaXMudG1wTGV2KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjbGNVc2UnOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xjVXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5bmtojpooTnuqblh73mlbAo6aKE57qm54q25oCB5LiLKVxuICAgICAqL1xuICAgIGNsY09yZGVyKCkge1xuICAgICAgICB2YXIgeyBzZWF0U2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgc2VhdFNlcnZpY2UuY2FuY2VsKHRoaXMuc2VhdElkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25Db25maXJtKCfpooTnuqblj5bmtojmiJDlip/vvIzlho3op4HjgIInLCAxKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uRXJyb3IoZC5kYXRhLnN0YXRlSW5mbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGUgPT4ge1xuICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlVW5rbm93RXJyb3IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaaguaXtuemu+W8gOWHveaVsFxuICAgICAqL1xuICAgIHRtcExldigpIHtcbiAgICAgICAgdmFyIHsgc2VhdFNlcnZpY2UgfSA9IHRoaXMuc2VydmljZXM7XG4gICAgICAgIHNlYXRTZXJ2aWNlLnRlbXAodGhpcy5zZWF0SWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkNvbmZpcm0oJ+S9oOaciTEwbWlu77yM6K6w5b6X5Zue5p2l5ZOm44CCJywgMSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkVycm9yKGQuZGF0YS5zdGF0ZUluZm8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5bmtojkvb/nlKjlh73mlbAo5bCx5bqn54q25oCB5LiLKVxuICAgICAqL1xuICAgIGNsY1VzZSgpIHtcbiAgICAgICAgdmFyIHsgc2VhdFNlcnZpY2UgfSA9IHRoaXMuc2VydmljZXM7XG4gICAgICAgIHNlYXRTZXJ2aWNlLnJlbGVhc2UodGhpcy5zZWF0SWQpXG4gICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkNvbmZpcm0oJ+emu+W6p+aIkOWKn++8jOacn+W+heS9oOeahOS4i+asoeS9v+eUqOOAgicsIDEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25FcnJvcihkLmRhdGEuc3RhdGVJbmZvKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZSA9PiB7XG4gICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVVbmtub3dFcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56Gu5a6a5oCn6LSo5oyJ6ZKuXG4gICAgICogICAgICB1c2VTZWF0OiDnoa7orqTlsLHluqdcbiAgICAgKiAgICAgIGZpbmlzaFVzZTog5L2/55So5a6M5oiQXG4gICAgICogICAgICBiYWNrOiDov5Tlm57luqfkvY1cbiAgICAgKi9cbiAgICBzdXJlRigpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnJlY29yZC5zdXJlU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3VzZVNlYXQnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmluaXNoVXNlJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmFjayc6XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvb/nlKjlrozmiJDlh73mlbBcbiAgICAgKi9cbiAgICBmaW5pc2hVc2UoKSB7XG4gICAgICAgIHZhciB7IHNlYXRTZXJ2aWNlIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICBzZWF0U2VydmljZS5yZWxlYXNlKHRoaXMuc2VhdElkKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25Db25maXJtKCfnprvluqfmiJDlip/vvIzmnJ/lvoXkvaDnmoTkuIvmrKHkvb/nlKjjgIInLCAxKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uRXJyb3IoZC5kYXRhLnN0YXRlSW5mbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGUgPT4ge1xuICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlVW5rbm93RXJyb3IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9ob21lL2hvbWUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogaG9tZUN0cmwsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4wLjZAbmctYW5ub3RhdGUtbG9hZGVyL2xvYWRlci5qcz9hZGQ9dHJ1ZSEuL34vLjEuNi4zQGVzbGludC1sb2FkZXIhLi9hcHAvaG9tZS9ob21lLmpzIiwidmFyIHBhdGggPSAnL2FwcC9ob21lL2hvbWUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwicGFnZSBpbmRleFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhZ2VfX2hkXFxcIj5cXG4gICAgICAgIDxpbWcgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi9pbWFnZS90dXNodWd1YW4wMS5qcGdcIikgKyBcIlxcXCIgYWx0PVxcXCIjXFxcIiBjbGFzcz1cXFwiaGVhZC1pbWdcXFwiPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2V1aS1jZWxsIHdldWktY2VsbF9hY2Nlc3MganNfaXRlbSB3aGl0ZS1ib3ggYXZhdGFyLWNlbGxcXFwiIG9uY2xpY2s9XFxcIndpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvbXlJbmZvJ1xcXCI+XFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2UvYXZhdGFyLmpwZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIiNcXFwiIGNsYXNzPVxcXCJhdmF0YXJcXFwiPlxcbiAgICAgICAgPHA+e3t2bS51c2VyLm5hbWV9fTwvcD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbF9fZnRcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2V1aS1ncmlkcyB3aGl0ZV9iZ2MgaXRlbV9zaGFvdyBib3JkZXJfcmFkdWlzIGxpc3RfaXRlbSB3aGl0ZS1ib3hcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIndldWktZ3JpZFxcXCIgaHJlZj0nLyMvc2VsZWN0Jz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZXVpLWdyaWRfX2ljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2UvbXlzaXRlLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcIndldWktZ3JpZF9fbGFiZWxcXFwiPue6v+S4iumihOe6pjwvcD5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJ3ZXVpLWdyaWRcXFwiIG5nLWNsaWNrPVxcXCJ2bS5vZmZsaW5lSG9sZCgpXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZXVpLWdyaWRfX2ljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2UvbGlicmFyeS5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ3ZXVpLWdyaWRfX2xhYmVsXFxcIj7nur/kuIvljaDluqc8L3A+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBocmVmPVxcXCIjL2hlbHBcXFwiIGNsYXNzPVxcXCJ3ZXVpLWdyaWQgcmlnaHRfbm9uZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2V1aS1ncmlkX19pY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uL2ltYWdlL2hlbHAucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwid2V1aS1ncmlkX19sYWJlbFxcXCI+5biu5YqpPC9wPlxcbiAgICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2V1aS1jZWxsIHdldWktY2VsbF9hY2Nlc3MganNfaXRlbSB3aGl0ZV9iZ2MgaXRlbV9zaGFvdyBib3JkZXJfcmFkdWlzIGxpc3RfaXRlbSBjdG50LWNlbGwgdG9wX2JvcmRlcl9ub25lXFxcIiBvbmNsaWNrPVxcXCJ3aW5kb3cubG9jYXRpb24uaHJlZj0nIy9ub3RpY2UnXFxcIj5cXG4gICAgICAgIDxoND7miJHnmoTlhazlkYo8L2g0PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2V1aS1jZWxsX19mdFxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlXFxcIiBuZy1zaG93PVxcXCJ2bS52aW9sYXRpb24ubmV3XFxcIiDjgIA+XFxuICAgICAgICAgICAgPHA+e3t2bS52aW9sYXRpb24udGV4dH19PHNwYW4gY2xhc3M9XFxcIndldWktYmFkZ2Ugd2V1aS1iYWRnZV9kb3RcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogNXB4O21hcmdpbi1yaWdodDogNXB4O1xcXCI+PC9zcGFuPjwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwid2V1aS1mb3JtLXByZXZpZXcgd2hpdGVfYmdjIGl0ZW1fc2hhb3cgYm9yZGVyX3JhZHVpcyBsaXN0X2l0ZW0gY3RudC1wYW5lbCB0b3BfYm9yZGVyX25vbmUgYm90dG9tX2JvcmRlcl9ub25lXFxcIiBuZy1zaG93PVxcXCJ2bS5yZWNvcmQuZGlzcGxheVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZXVpLWZvcm0tcHJldmlld19faGRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktZm9ybS1wcmV2aWV3X19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJ3ZXVpLWZvcm0tcHJldmlld19fbGFiZWxcXFwiIG5nLWJpbmQ9XFxcInZtLnJlY29yZC5zZWF0VGl0XFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZW0gY2xhc3M9XFxcIndldWktZm9ybS1wcmV2aWV3X192YWx1ZVxcXCIgbmctYmluZD1cXFwidm0ucmVjb3JkLnNlYXRDdG50XFxcIj48L2VtPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZXVpLWZvcm0tcHJldmlld19fYmRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktZm9ybS1wcmV2aWV3X19pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJ3ZXVpLWZvcm0tcHJldmlld19fbGFiZWxcXFwiIG5nLWJpbmQ9XFxcInZtLnJlY29yZC50aW1lVGl0XFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwid2V1aS1mb3JtLXByZXZpZXdfX3ZhbHVlXFxcIiBuZy1iaW5kPVxcXCJ2bS5yZWNvcmQudGltZUN0bnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2V1aS1mb3JtLXByZXZpZXdfX2Z0XFxcIj5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwid2V1aS1mb3JtLXByZXZpZXdfX2J0biB3ZXVpLWZvcm0tcHJldmlld19fYnRuX3ByaW1hcnlcXFwiIG5nLWNsYXNzPVxcXCJ7dHJ1ZTogJ3dhcm4nLCBmYWxzZTogJ2FsZXJ0J31bdm0ucmVjb3JkLmNsYXNzUmxzXVxcXCIgbmctYmluZD1cXFwidm0ucmVjb3JkLmJ0bkNsZVxcXCIgbmctY2xpY2s9XFxcInZtLmNsY0YoKVxcXCI+PC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJ3ZXVpLWZvcm0tcHJldmlld19fYnRuIHdldWktZm9ybS1wcmV2aWV3X19idG5fcHJpbWFyeVxcXCIgbmctYmluZD1cXFwidm0ucmVjb3JkLmJ0blN1cmVcXFwiIG5nLWNsaWNrPVxcXCJ2bS5zdXJlRigpXFxcIj48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9ob21lL2hvbWUuaHRtbFxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdHVzaHVndWFuMDEuYWMyNTExLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2ltYWdlL3R1c2h1Z3VhbjAxLmpwZ1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndCREFBTUNBZ01DQWdNREF3TUVBd01FQlFnRkJRUUVCUW9IQndZSURBb01EQXNLQ3dzTkRoSVFEUTRSRGdzTEVCWVFFUk1VRlJVVkRBOFhHQllVR0JJVUZSVC8yd0JEQVFNRUJBVUVCUWtGQlFrVURRc05GQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJUL3dBQVJDQURJQU1nREFSRUFBaEVCQXhFQi84UUFIUUFBQVFRREFRRUFBQUFBQUFBQUFBQUFCUUFFQmdjQ0F3Z0pBZi9FQUVVUUFBRURBZ1FEQlFZRUF3UUlCd0FBQUFJQUF3UUZFZ1lUSWpJSFFsSVVJMkp5OEFFSU00S1NvaFd5d3VJUkpFTVdJVFRTRnpGRVUxUmpjL0lKSmlkUmdaT2ovOFFBRkFFQkFBQUFBQUFBQUFBQUFBQUFBQUFBQVAvRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FNQXdFQUFoRURFUUEvQVBNK3F4aDdRWkRvQjNkNEVBeU5jRHR2eUlDMFk3enRRU0NtejhuVjY2LzBmWjlZR0FyWkExYUpXQjZQbStyOC9TZ1F5WFBoRnloYnQrZjkzNXJkcURQT0kvWi9FaTFsZC84QXJ2NU9mNmk1QkFkU0RhRDd0d09YRm9NSFJNTGRGbWdEK1RiMC93RFZKQXRWbVJibytGWmI4OW42dXJ5SU5vVklnZHVJdGQxeEg0eTUvV256SU1nUE9DMGVtellnM1pKWldrdWE5QVBrc2tGL1FnRHpIaUMvMTYzb0FrbWZZSHk3RUFxVFBNeHVJa0FxVEp6aVFhZ0FqMmlnd1FKQWtDUUpBa0R1Qk5rMCtRRW1JKzdIZkQyNlhXanNJZm1RV1BNb0xSaTYwVEJBZSt3eTJoODZDSlZpQVVCMExoc3ZHNFQ2eFFOenVCcndJQ0ZOazM4M3IxNjJJRGNZeTJqK1gxNjhlb1Frck5Ic3BlZnlhUFgxL3N2TFVnZC8yaGtzMGdLWTFHamRuMUFSNVZ4bjE3dlhXZktnWXhtZTlBUitMY1BuOEhyZDBBSTZrRHVwUXhBdTYwYWRuSjYrM3J1SkJoQWg5c2ZCaCs1a3pMZWZWNjlBZ3hPQjJZN2gyZXZYK1pBZGpVck9hQXQva1FNcWxUWFdSOWV2V2hCQksyOWtrVzJ5MzE2L01naTd6Mis5QU5reWI5S0JzZzJmeE5uVUpXM2RKSU5LQklFZ1NCSU56TFYvbDVrRy93QnNiK09udzZVRnNRM2hreGY2UUJyMzI2djAvd0RZZ2J6NmF3ODZiRDdSRzA3ckU3a0VhbVlZa3d6ZGRZYWNlaEJ6b0JMTnJMdHc2QTZFQmhxVGxjdDRIb3MzZXZRN1VFcHAySS80UlFhYkp5dy9uMWV2cTViQlFQVGVoZ0hkQ1JnQTZUMGg2SDdlaTgwRFlKSXMyRUxUbWpkZVgxK3ZyUWFzNHBQOVZ3RDMzMy9SNitnRUVyb01NbnRjeW9ESmpnMFlDQmo2OWRTQWhQZ0RlQXNhOW5yMXE4aUFsUjR3ZzFieUFIcjFzOHlEVmllTUlNYmZYcjkvU2dwM0VrYTI5MGlLeTc2L1hxMFVFSm55YjlPbjVFQThBdVFabWcxSUVnU0JJTm9Na1hLZ0lScWQ3V3h2Y0hkc0F4M0lISFk3SFFhNnRBb0c4OWxxTkl5aU1qUG1Eb0pCYUVaNW9KUUUwR2pUYjN2TmZ6b0U5TWZldk4wUk1CMEZxUVBhUEphWkVHSFJjdk1OVE54Mk5JTldKTVBVK3F1bVgrMTIzazdINS9HZ0JQWVBxYkkzUmJaa2YvazZEK2hBSDcrQWZmdEV5QmxzUFFnTHc1SlpRRmRyMzd2WDdVSDE1NThDNnd0NUVHYk1sMWt6MDMybDY5Ymk4Q0F2RHhuK0c3cWVKOVJtN3M5ZjlpQjJIRVZxd0xxWVYvUUIrdlc5QTdEakJGakVCalRIL3dEN2YyZXVTeEFKcjNGM3Q3UmkxVExBOGJ2cjExSUlWWHNXL2pEVnVRMnpwczlldnFRUTk0N3pRWWhkeW9QbW8wR0tEY3pITjUwQkVkeUIvd0RoUXNtZWE2Tm5JZlVnY00wNWk0WENIdWgwbmVTQjZiTFRKaHlIMElNM3V6VzVwRGUwQldPb0IvYkd6RFhkbW1WNVdEc0ZBS2VQWGR6SUw0eC93M3hEd1dxNFUvRWJGZ09qZkZxTFZ4eDNmSWZVZ2l3UEE4UU5DV3QxMExYbWVRaVFTbU5BWWpTRHlyVFBLQjJ3T2Y2VURxU0EzUjNXdFprTjVoditoQnVoM1htVyszdXNveDJlQkFTWnByV1FaRUpUSS9LMFk2TktCcWZEMmxWSU8yWnJ0SzA2dXo4dmpNRUErcGNLNWtNMmlZbU1QUkhSQzExMGJMdWIwYUFZZUJxckdhdUtHMmVxeThKUS9xUURKK0hwMU5NQ2t3NWJJSHo1VjRmYWdCU2RGOXJUblI4QTBBZDRIVEU3UjI3cnhRTW5tUzI1b2hwMUJhU0JIVFgzZ3VFQ3Q1anlDNWtHRDJHNXdCY0VXVHVzSzlpeTFBV1o0YTFnMm83cm9neTA3dE0zRUdRY096eW5YWEpRNkJ1c1pHOUE1UEFudGdNRWJqR2R0dXVMYWcyQmg3T2ROb1JKNEdoelRzYXN0MGIwQWQ0Q2pEdEV3ZEhUcDJlQkFRQ0JEN0htdXY4QWFlNnZzdDJhOTZCU1htZ2F6WkpGbWsxWUlIeURab0JCSFpsVnZhc1lFUWFRRHd6WGlLM1gxSUcvK3Yyb1BWaVpVc1BjV3NKT3RWT014VmFaS0t3bW5odjFEK1V2R2c1RTRvOEJLbmdDcnV1MFVuWjlNbERtdEFBL3pEV3Y3a0VFcHRZZGpFRFRqN1FHZG1zeHN0UUhvZFNkazk3M1R4aG8zYTBCcG1HTXczVDBoSDJGZm9OQVFwdEhJNSthSk9uRWFMVUFjbitWQVdlbzVCTmlPekx2NWkreGw3ZnA2ekUrY2V0QnRqTXpBZHlvWkNCaVBkR0JYbVZvWGN2aEN4QTNreG53TnJLSHVyUlB1dGJwM2J6RDF5SUdodzg1M3YzYzZRWS83T1JuWUEvbS9lZ2IvaVhZMnJTYUY2NjIwekxiNnNRSTZsbk91dXRNWHg0NVgyR1AyYWZINjFvTVFqTkhGM0RwMXV1bTE5YUFUUGVFQ2FFV0NQS0t5L1ptM0g1T2hCcVp0cXMxb1NkMWwzV1ViV3MvQWdGU1pJM3gzOVJtMC9zZCtMNTlucXhCaEpyMU9qU08wdXVrZlpiM1hRQWREK3ZrUHptZ0ZScGtNeU4ycHVzUE5FT2xuZVozY21uME5pQnVlS21Bb3hpTWFJQWFJK2k0TTNtdlFSbWZVaGVIdEpFSVM3ZTZObm5RTmFyV3htU2pJWXJVTnF6VXoxZnVRQVpNdzNuYjBHcGtDZU8xQVZNQmpRenRIbFFDbVdTTTBIZHZBM0dEVkhyTHRLa3UyUjVSWHRkRnlDMk9JVUFaa1duekJ0UEtJdzBkQklLaXhod3VwV0toTjBtTW1YL3hESVdIKzVCVWxlNGFWckRlYUxBOXZDM1E2R2d3ODZDTmZqRDhBY3JLZlpNTDlEM09nSVVySEw1eXJYODN1ckRHOHJ3OGV0QVRERzNiSUJ2eHRodjZvanc1b0hiMTNJTjU4UldvWVNMaXpwZjlDeTNWMW5lUDd2MW9DY3pIbE1tQ0JER3laYlRRWlhZZDRlUU5vYzZCdlVzUXh1enREREZoNEFzelhRNTBEaG5GVUdIRHlKSkRKTjBuU2RDTzFmbGFMOUd2YjUwR016RTdFa0k3UTJ2QVRXVVI1UWZaeWlnMHpLcXdFUE50YzdSL1ZldDBOQjBYOHlBTEpyRVo0QXRra0FaQkErRnBtRnQrZ3pQOWFDUHpNVGtIZnRXZ3kwVzh4M2tJY216b1FSZVRpZDAzWFgrOU16YUROem5iTHZJZ0ZIVzdHbW5SL3dBUUJieks3VCtuVWdiKzJxQ3hJZUJraElTUFNRNnRLQWZNbG1Ic3ljd1RaNVI2RURjNU9jSVhjZ29HcGxkN2Y0b1BpQWxUV2RONkJ4VWpGbGpidUpBTE40ajA3QlFkTlg5N2NOMTZDY1VUaWRXR1JqMCtjK01tRVRvQmVlOFVGd1VvTTRiYkVHVXpEWXpPVzh5M0lJYlh1RzdFa1R1WUUvT2dyU3ZjSDRieG4vTFdINE5LQ0dWTGhLVU1qS00rN1owSHJRUmQ3Qk5UZ05XNXVkYnJhdkxhZmtRQXBsRW5BVFFrTGdXN2p1dlFNak45bmN4WnN0YUF2em9GK0t6Z0d3U0lMeDcwMmRCNzltbEE0aHozZTBHNzJZZ3Z0dTcvQUhJRzgrcFRKT2tuU0JvdDRadXY1OUNBT2RWbUFZRDJtOExyOVpJR1JtVHd1bVphdXU2OUEwdi9BSWlJM1dENWtDZVBYdXZRYWIwR0tCSUVnZXc0QlBHZ01BeUxMU0FiVnkrRUtBWWc2Zy9xbWdYSWc2S3dsUDdaUzZmSjVKVEF1LzUvdlFUdUFBbUZ5Qnc5VFduaHV0dlFBcWxoVVh0b29JdlVzRTN4ejdyV2doOVM0ZTMzNmZvUVJHcGNQZFozTklJdlV1RzUzYVd0K2hCSThIKzc4N1dIYmlZKzFCMGJ3dTl6eWd6OHI4UWd0UGVjVUZoNG45eHZBN01LNXFqeGdQd0NnNVU0MCs2cFE2T0xwVStHSUdIUWc1ZHIzQ2FaQ2VkeUJLeEJBSmtGNkE2VGI0MkdnYklNeEFpLzFDZzJzd0gzdHJaZTFBUWpZZWZlM0lDY2JEd3M3eFFQZXhqR0RhZ0h2YXlRQmFvZDhqNVVERkIxQTU4VTBDQXhzUVhWd3JtZHN3UTFxMXc1VHNjdktXb1Axb0xMcFVuT0JCSzRid21DRExzd25wUWFwTUFUc1FCNU5CRTc5T3RBTWV3ZU1rdExWaURIL1J1RjdKRXhlQUZlZ3RMQWNDa1E5SlpRWG9Mam9qME9HRnpSRGVnVll4VTA4QjNQajRVRktjU0Rwa3lMSUoxMXBCeTFqbXNZYXBUVWdibW5uZWdFSEpXUHV6R01oeTBRTXowb0k3UjZGN1pRQTRZLzNJSlpBdzIwRm5kQ2dMQlJHZzVVRzM4TkZrTnFCbEpBUTZVQVNZZTlBS2VRUjJXVjhoMHYvY2tHbEIwN3pvTXcxb0xGNE9WaHBtcVZDbE9sb21OWnJYL1ZIOWlDM1lEMlNSaWdtRk5lMDNvRFlIb1FPQVp2SzM2Z1FiV2FVSm1HbEFXaDBFTnhJRFRORUd6VUtDQlkvd0NGRDlTL21xTFVKTkhtaHp4QzBmUWdyTCswbkVIQjdweHFxK05Wamh0a05EWWFBRFh1TTFUalhsbWtncERpdHg5bkN3VFRrd3RZNldnM2tnNXdyV09LcFdYU3ZmSmtPa0QvQUZJQjBDRy9XSlEzRVI5Um1TQ3lxVlJNbG9CdFFTQ05ERUIyb016WnNGQXhrbWdCVko2eS9yUVJ5WTlyUUQ1TDJUSE12cFFSMUFrSFRYOVpCdTVya0RpQlBmcFZSanpHUGl4eXZGQjBWUWFxeFdJRWVZd1doOFVFdXBVbXl5NGtFaWpIZU90QVdqSDhpQXJETWRDQ1VRREZBWVpzZUcwVUQ3c0RUdytOQkVjVllWWW1NTzNOYTdVSEovRlRodTY5S2RHTUpYbVhJZzUweFZ3RWZra2J0cm1hZ2d2K2haOWwzdmJ2SWdsRks0ZERUUURTZ05mZ2dzN1JRTlRqV0dnWXpEUUNwSE9namxWUFVnQlBiMEFXcnZheGFIKzdxUURFQ1FkTmV6ZWFEY2dYZ1FUcmhkaTM4TmtIVEhTN3AwcjJyK1UraEJlZEhtSUpYRGV2TU5OaUEwQjZQQWdmTXo4a2tCMmxWSnJ6b0pMRGVzc0s0ZklnTU0xV0REYXpaVWx1TUhXOFdnVUFjK0plQXFsSU9DT0txTTlML3dCMEV3VE5CSDVtRmFaVXBCdWdUYndIMEVnaHVNTU40YXdyU1pGVHE4eU5EanREZVJ5Q1FjaVl0NHdjT1FxN294cW1KaGR2Qm83RUVmUGlMaENaL2hxdkcrY3JFRFNUaVNtUEQzRXhoN3lFZ0JUS3d3ZDlwSUJqMG0veUlCODg5QitCQkVwaGtabjFvQlVsNFl6Uk9rZ2pUaGs2ZnRJdjd5SkJnZ1NEcHIrcWFEY0NCZm5RTFVCWENWaUM2dUdtTXhyY1hJZkwrZGFIdmZINDBGdDBlWm5CcUpCSTJaTjRhU1FONTV1bTBlVnZRVWp4RjQ4WXE0UlRXaWs0Vmt2UW43c2lXRG9XR2dwckUvdjU0em4zdFFSYXBROWVWZWYzSUtkeFh4aXIrTlpHZFdzUTFLZWZRNjZWZy9LZ2pJVmhzRHVGOGdNZWRCTzhLKzh0ajNCTEFNVXpFY25zbzZCWmtkNkZ2eklJMXhDNHk0cTRuU2hkeERXSHA0aHNaMnREOHFDRW04Um9NTDBHeHFRVE8wakR5a2duK0I0RXZMN1hKZGN5aTJDUklKV1pvQk0rVHBRUnFTZmVtU0NNVlNaMmwyMGZoRHRRTVVDUUpCMHhmM3BvTnQ2RE85QWo2a0QvQUF4TWZoNGhwN3JCRUI1b2dWblFTRHBHQkpkaG5sTzZQMW9KTEduN05XNUJJNmJySzY1QkgrTk9FZ3hiZ2lRTFRYYVpEQTlvYURySkJ3dFdLUFJhclVzcDFpOEMwYUJzTWZBZ2ZSdmRwSEVMUUZTS2d4bWsxbTVMdWpRZzFUUGRGeExHQXlGK212TkJ1TUpnYUVIUnZ1OC8rRi9RZUpXQkptSU1ZWTVtMHVWSEl2WWRPbzdEUjVXbitPcDA5My93S0RrN2lGd0g5bUY4VXlLYlNhbU02T0R1VUJ5KzZMZHBRVjdKd2xNaG1ZdnRFellWaFhvQnIwQVdRdUpBN3c5U3huendGMGIyaDFHZ3MvdElnSUFJMkFQSUNCdTlNc0ZCSDVrbSsvVWdqdGJra0RGZzgyNUJIMENRSkFrSFN2czNtZ2NBZ1FJRVpvSlJ3Nm9MOVlyMFNUa0YyUmdyeU0rZEIwYWRLN1pBRHJEYWFEVkFNalBLTFFZY2lDVzAwN0JRRXpldkZCeUY3dy9CeDJqMVNSaXJEelR2WkhTelpVY1A2UmRZZUZCV09HT0tNbWpnWTV0aGwwYUwwRXd3ZmpPb2NVY2Y0Zm9keEFFK1lBU2dBdHpRNnoreTlCMDl3NjRxUDRZd3pXSWJUNUFFZ2lCQnk1akMzRldQT3pQam5OU3RCQWdvZkZzaVZTcXpOcFU1MHMySzZUWG04U0NPQUR0U2Z0Ykcvd0RTZ2wxS2hqQVlCaG90Zk1hQTFlUUJjZ1pUSHRCb0FVK1RraGR6a2dCVkU3Mmd1MzNJQmlCSUVnU0RwVURFMEcwTm01QStwdE5tVlV3R0d3NDhmZ1FXTGhYZzQ2OFlPMVVydy80ZGxCYUVPaU1VM0tZWWFGbG9kb0FnbWNhTll3Z0h6NEJnNkQ3UTZ3UUZhTzhNbVBkYWdKOW12RUVBeXQ0WUtwTkdJbHYrOUJ6VnhPOTNnWjc3c21OQmRaZE10UnhOaC9JZ0grNjd3eHF0QjQrMGM1TER2WjQ3RXAyOTRlZkt0L1dnSVlocVQ5QnFWVGdsY0J0UG1GbnpvQVBCeWlGaTNpL0VJdmhSUktRNmZRQW9LWTk0cW5OdytNTllFR2lNSGJYYkFRUjZsVTJTK0lpTFhabXVnRUVqalVUSkJCdGtzaXlDQ08xS2VMSUdSZlFnakp2RkpPOGtEZWY4SVBNZ0dvRWdTQklPcGFWaGlwMXVSYkdqRlovdlQwQWdzM0N2QnhyUTdPTHRKOUhJZ3RpaVlKWWh0QUxUQXMyY2lDVGZob3cyTkk2MERGbUhmTjhpQTNHQVFHMjFBM2tzM2lhQVl6TUtsU3RYd3J0U0NZVTE1cDVyd0lKSEFqTlBBSGlRUFR3eERlRFVLRFVHR0lOS3FVV1N3MElPbVZsOXZLZ0dZejRGWU94NUlPWlU2WlpMZCtLOUhkSm96K2xCSDJlRmVFK0dOTmtOVU9uakR6ZGJycGxlNjc1ekpCd3J4eXBURXppcWI0am9OcXo3MEErSFNtQWEyaUNCalBOcGtFRVByZFNFTDlXZ1VFSGt6Q21TTHVYa0RwUVlvTk03NEtBYWdTQklFZzlTcWJoSVdYVHRhRUVFdXB0RUZrQXRGQVlDR0xJN1VEU1lhQVpHWjErZEFRQUxMRUNlRFNmNkVBS2V6WUozYTBES2xWc3FPK0RUcDkwZk9hQ2RVZkVJR0FXbVAxSUpkR3J6UmhxMWdnMmhKQ2ZQanRDV3k4L3NRSGM2eHJVUW9LNngvZWNWMFduYzQ3TmdJUFAvQUl3U1RqWTNDN3BJRUFyOFZhQnE2NUJGNjNXQjFsZFlDQ3Y2clVpbUgveXVVRURIblFiZ1FZVC9BSUJCODZBVWdTQklFZzltUHcwV1h6MG9IVE1hd0x0NkJxOGVvMEF5WUgzb000ekpnQUlOOWdoWWdheVFHMUFIbVduZUpvSTFVbzFsMm5RZ0EvakU2Z3lMbWlKNlA5NElKSFN1SnpCamFUdGlDdytFV0toeEpqQjJNTG92WlVVenMrY0VGNFNhVUdWZUtDdk1jd094MGlSYU9veDFHZzgxK1B4LytkUklkNGthQ3ZKbFM3RzBHYVd2bEJCRmFsUGRtSGNXemxCQU1NN1VHQUlOd0FnVW40WHlvQkpoYWd4UUpBa0h0YkpaL21qUVlIb0MxQUtrNzdrREk5L1dnZE1ob1FmVDJJR0wzbFFDcGx0eUNQenoxV29JelVtYnp1UVErdk1pZXJuNndRV2g3bTBOMTdIbUk1Sk9rWU5RV21odjVibmYySU8wRDBSYitkQlV2RTU3SnBzZ2kyV2tnOHgrUEV4MW5GRHBOV2daa1d0QlVMeDNscUlqUHhvQjhrN05LQnJ6b05vQWdjTWdnd2UySUdSc29OUFp6UVlteVFJTlNEMnlrZ0lTblVBK1NkNkJxOEJhN2tEVEoxZ2cyc2dWaURGN1JxdVFDWk1uclFDcGtuUnFRQXBqMnZVZ0F6REswOWFDTlZnTHhPNUJkZnVad0xIOFZ5ZVFuV0d2c05CMVJNMFJRUVVweFVlUHNjZ2QrbEI1cys4REdJSzhCRVBNYUNvREJBM05sQTN5ZXBCa0FJSEFBZ1JnZ2I1SGhRWnN4dXBBNDdHZ2F5YVJmcUhlZzlrcGgzeUR0UU43TDBHcDVtejVrR28yZnJRWVBiUEdnWlNUMFdvQU13eVFDbm5rQVNZZSszZWdDVEQzaVNDUDFJeU1keURvdjNSWXd4c0pWV1RiL2lLaitVQVFkQVQ1STlsdFFVMXhScVRXUTZQSjRFSG52N3dnREpxalRvOVNDbVRqSUdyek5pQmliS0JBQ0ROQmhaZWd6Qm05QTRaWlFQUWpYb0hBUVBDZzlacEoyU2o1RUh6VGJxUVluZGRkdlFZUGJ4UU1wSjJYb0E4eDZ6bVFBcGoxNW9COG56V0lCTXpjWFdnQ3lYaXRRUitwQnYxSU9rUGRtZTdOdzJEa01wa2cvdlFXVldLOFVhTHUwZU5CVUdPWmpVeUxJSzVvenQ2a0hFUEYxNFo4OExkRmpwNkVGYnZROUNBUEpaMUlCNXM2OUtETHM1b05SaHJRSUE4S0RjREtCMHlDQjlHWnZzMG9DVE1hOUI2a1BBUnlqdlFPK3pjcElNN09WQTNlRFQxb0JNd0NzTUVFZG1QRUI3VUFsN3c3MERmSkU5U0FmUGgySUkxUEN5KzM2MEVYbnZiMEhUSHUvTS8rbHRQTHJmZi9BRG9KQmlvSFh2SDRMclVGT1l0TTJhWElkZGFLd0JMbTNJT1BjVHZGVXNRMjIyQUY1b0E4eUhZR2xCR1o3T3RBeUJuVnBRYlRqSU5SdzBDQ01nY1E2YTdNTjBXR2llTnJkcUZCZ3lHcTNuQkFUaHNqY2dNUm8xNkQvOWs9XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9pbWFnZS9hdmF0YXIuanBnXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQU1BQUFDYWhsNnNBQUFBVkZCTVZFVUFBQUFRajk4UWw5OFFsZG9RbHRzUWw5c1FsTnNRbHR3UWx0d1FsZG9RbGRvUWx0c1NsOXNTbGRzU2x0c1NsZHdTbHRvUmx0c1JsZHNSbHRzUmx0c1JsZG9SbHRvUmx0b1JsZHNSbGRzUmx0c1NsdHR3T0YwckFBQUFHM1JTVGxNQUVDQXdQMEJQVUY5Z2IzQi9nSStRb0srd3Y4RFAwTi9nNy9DQ2lTSWhBQUFESzBsRVFWUjQydTNkMjNLak1CQUVVQW1DTVhHSVdSRG1Ndi8vbi9zVXZKV1lXRGRFNCsxK1RKVlNuQUJDZ1pHa0ZNTXdETU13RE1Nd0RHWk9uMTB2dTZmdlB0K0NHTytUd0dSNjkyYmtnMEJseVAwYzFTUmdtU29mUnltQUtUMnVxd2tSTXJsZlhiMUFwbmUrUVFRMHJyZkpnQW9aSE8rUWU4czYyLyt4bk5YMzQzRzdTeTVMdXdKamhISHZReTlPN2N4WHN3WmxyTlI4SFpIeGcrUW9rTndQc2p4RWNJYXZ5NlBFcXhVZ1JBZ2hoQkJDQ0NHRUVFSUlJWVFRUWdnaGhCQkNDQ0ZrTFRNdVpIWnE5VEt2VEJkSWpRTHhmSWxkQzlncHlUMC9LK1QvZktmWCt6UDB4K1Q3bHgydHY0VkY3cE9lWlhUOHhSVXF4TGxtWU1TRWpPNTMxNHdJbVQzNm5nb1I0bFdNVXVGQktzKytlOFNDak43UE5GM1BPSkE1YkpCUk5tYmNIekthcGxRYnhXd0RNU3AxQ0NHRUVFSUlJZVRKVU90N2ZiOUpEVEhmSy8xOUJsdm5uM1dtTzBORVJJYXo2M0N4ZXpEaUFZQ0lkRTd2UWg3WGswTkFuS3JLVityaU1TQU9FcjFTRnc4Q2tkNzI2bW9FRzJKYmpKd0pPa1N5b0JNQ0JMRTdKUk0reEtxSWVYMUtFZzdFYXVwQmZRUkkvVDlCekJFZ2hoQkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkJDQ0NHRUVFSUlJWVNRVjRSRW1aVmNBRUNxR0pCbHFtQ2JITEpVUTNVeElOM0QrcVVra0h1aDNVZTQ0M1A1WldWeWlMNy8vTThwYUczajdOU3RUQVpNQWxrdlJnMUpzd01rMndLUzdRRFo0cFEwYWcrSXZzVjIzUFF1RVB1NSs1YjVNZXMrRmNSeW5yajErY2pWWGhDbDIzaU9WcXY5SUVvVkpnN0RGTUdIRXRvNnUxeE5ZSzVWRnVWUVlyYU9Ha0lJMlNqOXEwQmtJMGpxZGR6eXpTQ0pGdzFyTm9PazNZd2ttemFESk4wZVJ2KzJiMU1vWktxU09ZcGZ0enNLaFloMDV4UjdENzJkbjJ5akZRNFJrYUhiT0JaN2dVV0JJT1Q2S3BDYUVMQVVZYzlUbk5oMG5mVUJIRlpMNVZZSGdMU0JZMDZZMkEwd1pueUlEaDA5SCtuS0F0MisxV3NRUG9JN2JzNWZKZzkrUXBTNnZjSWRBdDhEenk3clVsMkFJVzV2UUhDN1lOZC90cHNYY1lDT0hXZWZ4WEpMdk1lSjhYdnhvYTlZak5IL1haVFZVdExKR0dGYkk1UU5nbVc4eG5qSG1aZDFhOHcrbnRtWXRpNEI5aU5uR0laaEdJWmhHSVpaelY5bkt6OVZWOWxQZkFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2ltYWdlL215c2l0ZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBTUFBQUNhaGw2c0FBQUFWMUJNVkVVQUFBQlFyMUJJcjFCS3IxQk5ybEZNcjFCS3JsRk5yMUJMcmxGS3IxQk1yMUJMcjFCTXIxQk1yMUJMcjFCTXIxQkxyMUJMcjFCTXIxQkxybEJNcjFCTXJsQkxyMUJNcmxCTHIxQkxybEJNcjFCTHJsQk1yMUJVQUpUbEFBQUFISFJTVGxNQUVDQXdQMEJQVUY5Z2IzQi9nSStRbjZDdnNML0F6OURmNE8vd1FxdTU5QUFBQlVWSlJFRlVlTnJ0bmVtV295QVFoWU9PTVJxTnhpMXhlZi9ubk5OSDFESnVvTmlCbVZ2L0p0Tk4rOGtGYmhVNWNMbWNHNWFmVlUyVEpUNjdtQnhXMXZRUlc4WmlzRWN6aW9laHZYS3JtbytvWE1OVk5VUm1tcjVZMEN4RVlKUyszUGZ3NUdYb09HRTUvUHZ0R3FtcWtqKzJTMUFTUS9RVmtFRWU5a0ppSVJuMGdRRVlEbEZWUG5yMVZrNzA1ZWl1cW1SNDJOcjcvRit2TmtWZlBsRlZORE05c1lqb3k5ZFhWUVZSbFQzL016YlJWNkdudmxpOHBxcDVmY1ZNYjFVOVY1K1BQVFhXbDAxVTlkcFVqUE1pcHNYVzFPYldkNUhmdU5jNm1tSnFjMVBCcDJJcDBkZE5EMVZSUXlJeER6bWxWdnFpTnJjTzVYNDNyUFV4eGRUbXB0SnJ0WlZxWW9xdG5hb2lMNkxVSWVtaXlWTzRVeHJVRkRmZk1jWExObGV5Vzc5cmlxbk5MUS9LKzV0SlY3QmhjeVgxRlgwcDZScXBTc2tTOEJWVExHcHo1ZUwzVGJFdnB5ckhEeDVCY0xYazlIVytLWGFrYks0M1RBbkZkaG1ibXVLVDlTVm5jeW0wMkd2K0xWTjhFMDZlZnVJNXFUSVdtd0liSlYxbm1XSnFjN2RWeFlxWmVtbTFQY1dkYm9wSHF0cTJ1Yk1jUWlRalU2eGVYMjRsWjNNSGlaUjVtZytqK0Mzd1pDZWFZbW1iNi9WRHFlMENxMy9ObVhUU3BjNjBqUFlJaEpJbnh2dXZ0S2U1cmRpOEdwNndFK0hLMjF6K0dDODJvN1ppaHlsV29hOWROcmRWUnYweHN2bElFWjJLMUpyaStUMkNyWWw2WG9VVzl6VjdrcTZEcG5objh0UzZwbnJDM1E2VDl6NVRmQ0RwWXNsT205disrWFJwTHR0cmlwT2RnOTdmblR6bEMvTWIxNVpVVzRkTnNjZ2V3VkswYjNGbVpwQ1pnTlVrWGFQazZTNzdFdFNDakUyeFhOTGxTOW5jVTZWMXhCVEwyZHh6Qi90YzBpVm9pdVgzQ0pZVzlvWHA5N1Z2N3BGTnVtN1ZrV3J1Nm9Mb1NDNklLNlo0VTEvSHE3bkVvbndrSDEyS3NqOWJFamJGUi9ZSTVyVDF0bVpNWTM3RWFvanRSQnpiSXhpOUVmN3FxcUZUV2Ric25IeGxUZkhjVjJIMmw5dDZXL0duYmJ3M24vbkJsamQzSW5iWlhKRlV0OHF5Yk9qcTEvR21WMDJ4cWoyQ1NmTHhFYldTdXNqaVRzUm82VkNVN2ROdFc4VWNQL3FhWFZSbzZTWlNWMytKSmh3dmRZMVRVMXl3Q1VldXRDTG01Q09NMGxQWk9EWEZuQ1JTdjBmUW96eDdDYVIzNWJXMkllbUtpSEZRcWlySzRvWmg2RG1udEQyWTRwOFJ6NWVQV3ZjdjU4Mi9wcm92Ky9FY29UYjA2OTZNazFpWHV3cmo4TTArYVovL2ZpeEgwQ0hhbGZlNW1KWWFFeUczY0FEUkV5UXpGeVRqbFk2d203NE1EYXVyRDloajQyWGNPaklVQWtyUnJXTXQrNE56dkVoV1dqMnVmd3lMNjZOTGE3MmhMbWgwNUNPN1ltNTBSdEUybkdSSW9PMlh5Und2ZTZHQ1oxaDNmSmdTNXFVR3N0U3BON3YrTVdjUzNDVFRqM2dDUUQ3cGNob1NUNzY3Y2s1VGJSemQxNXhtWXM1MEF5ZWMxa2NWTnJVakFBSVFnQUFFSUFBQkNFQUFBaENBQUFRZ0FBRUlRQUFDRUlBQUJDQUFBUWhBQUFJUWdBQUVJQUFCQ0VBQUFoQ0FBQVFnQUFFSVFBQUNFSUFBQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhDQUFBUWdBQUVJUUFBQ0VJQUFSQmNReHMvaWFrOFVpK254WE8yZjhza25mdnNSL2FIMmJvYUNmcVNtS2FuamFXNXhwZTk1UVZVc2Vya0NQWFZkenhDN2ZDZzI0UmluZUp1ak1PTkFxdXlmNkErQlB2SE1PU1JzL1FEdmJwdy9kYm8xZlJSMmR3NzI2aTFTOTg5ajlyUkU0V2ZNM1RmWGNiMDVlcEowWlRsdnBpNUN4MWk2T3VmVDZHaC9QS3MxOVdpeklCZnRZeFhrR2lSOE1jeTBqL1k1aXlTNFRqb3JiZ3lOZURRUWdzYmdHQzZGWVhGamRQVFh2eVdONFpHTVptV1RJeVNUY3RPVVVXaFlSUDFOVUQ4am5wc3c5ZGZCL0VaMGw4SThlMXVpdTcvYWNwQ3N5MERjaTZIaGR0a0pQeGI0WW16OE0vZVBSTHgrbDAvTFptWkZQQUl4UGdBQ0VJRDhMeUIvQVozWTArakFUNU95QUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvaW1hZ2UvbGlicmFyeS5wbmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTWdBQUFESUNBTUFBQUNhaGw2c0FBQUFWMUJNVkVVQUFBRC83eUQzN3lqMDZpdjM2eWp6NnlqMTdDcjE3Q24wNmlqMDZpajA2aW4wNnluMTZ5cno2U3IwNmluMDZpbjA2aXIwNmluejZTbno2U3IwNmluejZpbjA2aXIwNmlyMDZTbjA2U256NmlyejZpbjA2aXJrY0ZUMUFBQUFISFJTVGxNQUVDQXdQMEJQVUY5Z2IzQi9nSStRbjZDdnNML0F6OURmNE8vd1FxdTU5QUFBQ1VSSlJFRlVlTnJWWFcxN3N5d1BGaXh6VnBtNml2V0YvLzg3bnkrN3I2ZERvQ0VrdE12SEhjY3FKOG1aaEJDZ3FsaEVYQzU5UDg3emJQL0pQTTlqMzE4dW92b2JJaS85K0RCOG44eGpmNUZ2RGVKeS9WNHRVTmJ2NitVdFFkVFhiNXNzMzlmNnZWQjhqS3RGeWpwK3ZBK0szV2JKL2c1WVpMOWFBbG43MTdML2M3WmtNbisrQ29XZ1VjYWpXbDRSWTJRdU0veHNrY1ZoV0NZcENrV3d3YkRXMnJHWWdmVzdaWlc5TCtPcFZzc3VLNzhIazBDSGE0eldTcWtIS3hGS0thMk5BVHBqWnFyMHo0ZHczSFFUemFEcVJ0K081Ny9EYVY5cWVmTHhiV3FCV1dEZFR0dVRIMXZVaTlSeDd4SlQyYnE3djBJcGNvbWpRQm0xakdOWkdKalNSbnp1cGpNK0tIWEV4dmEyWUFpOE5ibS8zdHhLaGNlSVdVMGsycGRURWZOU0liTTZOTmw4Q1IxeXlUdVo5MnI1WWNTaEVCSGxLMlJVNU1tZENCbllGeVBORFV2OW96WmNsQmQrbWg5TnhTU04zNzRXd1lKallGd3lpSUVCaVIvSHBpcFdVUnMxRWorT2lYMEY1eWM5SG9rWEJ4ODduaklGaThTTDQxNm9OaUR2WkVpOE9LWmloUUd2ZVMyWVh4cUpRcXk4L0FoRlFqR21mOS9qQkk5RWJ5VS92K1pmbFlwbDdqOFNURk41aURJUVRNZVJGTXVETmZyMUM2eWIrc2cyQ3VXaGVRSTludFJUd2JWMzRhRjhrbG5JUFFlSEFwU01nSlZSRDVKZFpqa3NPQTVvNVF1V0IzcVFKRGpoTVFOSGI2R3lOMGdrSTU3b1lCeHlzUWtDVW9vSFNZc2xDQmhIbTFqZVhuQklnRFE1VGVvaE1rTFlrMm8xeEtXTEF4WGhOVHArWUhaTjlob1ZUelFtZ2loR0hOYXVvdUlaMUlvTnBScTVGN0tnakhaSkhzN0V4bytrOUdsS05DNkpkVmdxWTMrcVFibXV1T2R5by9JQlRZcHl0aFZCTkpFdTRlY2srNEN1YS9NNklEVGtFMDNLMkZZa1Fick1iVnlKb2NrS1ovb0dKSWpNM2E4R3FVUnMwUDg2R1RvMGdreXhyYXhCNjBaMU9yb0J1cU1jeWk2QTQ0RXVLMlZrRCtqeFc3SUw3azNCZ3RVQXMzeUpUYkVtK0I1UUU5Z3l2TUY4NHdGeXdSUFNZd1VVNHEva0JTcTdGalpwRFVRbDduaE1ScjBsVnNscmMvWnlERUFscmtMQU5STnZiMG9rSS9ENmFxQ2pyNS9UMkhWWjBCRGlUMDZpL01xcElVNVBIWmRHTXQxdldTcHRvUVFteVNsVDZaNFppSWJpcUpaMFE5R3AwTVAvdXo2aElGd2hJdFd3QXYvVFFiOTN4TDNFakZXSXdqRDNqc3hTUENxWjQ3NFhYZ1B6ZWRNNmNUQkp6a1ZFUGJCRy9xcDNUQnRHamVDdzVUb3VIYU82ekFKaWVJSElDTjBiVE9iamo3VWdjNWM1UUtwYk9KV2FjRmxXQUFqQUFXWHRxalZoSHV5Sk5oNEhvakJBYk1JM3Q5Qmlwc0g2M3JPZTBVRHVGWnFYVGNpeWtuYWdOV1p1Nnl5T3VCUWJBajRyWlc0OHhRM0lrRlFlRUNlZ3JvSDU2WktBbkROQXdOS2l4YTRSL1NzQkdmOHowcllncm1MS1NGRTh0dFY1K1pwbVdlZGlKbVJCdG1adTFqcTJkZk82a0s3S1FRSnFLbEQ0OVlqZkRMdy9pMmp4YS85ejdBZXNlWGJHNUdjeHQ2YzhGTmtxakVpbHRlNFUxdEdsdDJZY0hpdTZZUk5mcEhnTHJLbDJNSGxJc25MMDJDWlc3cFB0b0R0SEVwbE5rVFFaMFZYc0NFbkVpZXNITnc2ZFhEMkNrRVNkZnRrdzQyZ3RpVUxjckZ1ZmFLTmZnUU9oRUdmK3B4TzA1Z1U0MG1Qd3lZZWJVMXl2WDRBRFpjNjFHOXNGZXAxR2hRTTVlZTY0VlZiR1NJRURTY3U3NDdaVUthY1ZhdkhBZnRJNFFIUWhweFU4Rm9SdGlSNmNnUmNDRW14VlVUUWExazRZVWFWeDRGTTc1V1RQcGdTUTF0SVMvUXpFRkFGU0J3OHhWbHhBV0E0akJEczhzcHk5Y0lEd3gwTVJhcUc5NTAyYlV6ZmxCekx5NEhCSHpnNmtZOEpSR2tqTmhhTTBrSVVMUjJFZ0F4dU9za0FVSDQ2eVFHWStITzdJTjA0Z0xTTU9GNGhoQkNLOEhWQWJVZnJnbExFNGdmaHJXRVJsQVZFd2FWenBWdWd2elg1YjJnWElFeUFEWHdsN0lVN2M0d3NydnFXdVlpUzZaNm5iWnUyM3BBWjF4Zlh6bXJFY3RHYnVRU2VXZ3hTMnRRV1Q5dFpzREZRVlc0NHkwTlhpUUNWVHRpSzJZWFM5bGFlSTdYeXdaWm94VEU5RlZNN2JDZ09QLzVVRU81NXc3enVkMXRTR1o4Ym9LWExlZWxPSXN6VzRoSkV5U0RsTmY2cGlZN3Ntclk4KzQ3cW9LcmREc1BzYlFIeDlKemVXNEh2akJlSnI0ZWhZU0dKNGdld2VNNnBaU0dKWU0wWnZteE1QU1FaV0lON0dNOGZlRmpheUV3YjJ4Y3ZybHVON1p5Q0UvVHFCNWt4cEdXeExNYTV5ZzMyeEc0ZHRjUzVHbGtBT041U3dyWUhOc3FhUU02UHg5MDQvTUdXdlpMREozN0d0bGFnVStIQTM2ZEVSNG5DcUFVZlk2Wk0xYlNtdEoyTUdUZHNGRmprSVV5ZmNDL0Y2bVNQVHZ2R3RTY2xGeHRhZG1zM2wwMHYwK0o0RTNxYndCaEkvVUJtSG1TT1h5K1ZDMmlpcDQ0VUF4YUVTY2YzaEplRnpRdTY1KzFQOTZrNnZrbC9QZTZ5S1JTSG5FbE9MdVR3bXV2Wnh0MGRJYm9CM080M09nZFk5OUpYcnVEeFh0QytDM0dYNU9pSTFhYkphKzNxMDhwRUFMcTg0cVdTbXBDUlZ5akJERnAyYXNIWWV1cVlxTTNkc1FXczFWeVVaTGpoNC8xbWVXei9wV1hJdmhjTHZFV1c1OVFINFk4QTdocExUT3FxMWpnSTNjVk9wSkhZQkd0NFpuanBiSXRyZExFa1pJdmJFRTk2MnhvUjlJNFUvOWM4T0pPa3lQYWVHamkycFJYQ2dxLzJuTHVqNC90ZnZPNFp1N3dQazNBVXRFM2phdm85cGpjbS9jeWRvWGFjSDBxVzMxZjgvbU9CYjNjamRiNFA1R2ZFem53YWZUVVFDSW1xdi9aeEt3L1JhNjl1a3N4WldodFN5enFrMDUrRThXTktJT1JwMmRsaEh1YnJiamU1SWxlZjRTVnNNeC9rQ1ZmVDYyWU9qYVBuUTkxQUZwZ1hiOXpwQzJZS2dCd2tOanFOMFlmcDBpeldOWFZsVkZaZjJVU2tHTVFCZkthYXRYaUNpL2ZGZTI0VFo2bWwyNWxhcE5EQktJWTNoeXRySVhXNENSdW9UbUs4UjcwTW1kL0huY1BqbzhRZHgrQitUL0hzNDFGb0doMGgvN1N4ZkhmUTRtc1ZhYTJlMitQcnByK01iYWh6L3Btdm1lZngwcGovQjc1V0JlaXZ0dDg4Tm5SZ25qK2RPMTNaUCswQnd2NVBmY0FGZCtPMjk1SWR4TVBEUjg2MVJzaG9WMCtPZTNpOTlaemNEZkh5SDYwYzhhV0pvOStZcjU2SDVQcnkvWlErbTVVZTRYclZjVVZqa05mcktIZHVic2RISHFwWStNYlRVL1pPMytoanZrYnZIdjd4L1g0Rmc2dXY0N0dHZk8rZnRhL1ZobjhrKzk1L1JJZFFmL1F4NG5ZajVXajloTEVpVythdi8vSlZkaXN2bDBuL053SmNmRFgvUlIyMldYYllpRDF6L0x2TXd5S0dyUXZMWW1rd3Z1dVJLa0EvS1ZMd2l5Z0hsR0Y3U2Nkd1MwMzdyWGxaZWFDWTZHS2F0WGltaUkxSExwdCtnaTcwZU1yRWNVMU85aWRUNmp0YkY4RFlvZmhMeTdwYnV4bTdkZTU2TGtPMEV0ckx0MXFucXJVVjFnNG5yeGt4YS9aazZybEt0SG93eDV0OXJCY2FZUVd2RnBZYi9BWDRoMkpMZzNXcDJBQUFBQUVsRlRrU3VRbUNDXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9pbWFnZS9oZWxwLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcblxuY2xhc3MgVXRpbCB7XG4gICAgc3RhdGljIGhhbmRsZVVua25vd0Vycm9yKCkge1xuICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ+WHuumUmeWVpu+8gScsXG4gICAgICAgICAgICB0ZXh0OiAn6K+36IGU57O7566h55CG5ZGY77yBJyxcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNvbW1vbkVycm9yKHR4dCkge1xuICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICAgICAgICB0ZXh0OiB0eHRcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNvbW1vbldhcm5pbmcodHh0KSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgdGl0bGU6ICdXYXJuIScsXG4gICAgICAgICAgICB0ZXh0OiB0eHRcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNvbW1vbkNvbmZpcm0odHh0LCByZWxvYWQpIHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgICAgICAgIHRleHQ6IHR4dCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlbG9hZClcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvIy8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMC42QG5nLWFubm90YXRlLWxvYWRlci9sb2FkZXIuanM/YWRkPXRydWUhLi9+Ly4xLjYuM0Blc2xpbnQtbG9hZGVyIS4vYXBwL3V0aWxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gU3dlZXRBbGVydFxuLy8gMjAxNC0yMDE1IChjKSAtIFRyaXN0YW4gRWR3YXJkc1xuLy8gZ2l0aHViLmNvbS90NHQ1L3N3ZWV0YWxlcnRcblxuLypcbiAqIGpRdWVyeS1saWtlIGZ1bmN0aW9ucyBmb3IgbWFuaXB1bGF0aW5nIHRoZSBET01cbiAqL1xuXG52YXIgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uID0gcmVxdWlyZSgnLi9tb2R1bGVzL2hhbmRsZS1kb20nKTtcblxuLypcbiAqIEhhbmR5IHV0aWxpdGllc1xuICovXG5cbnZhciBfZXh0ZW5kJGhleFRvUmdiJGlzSUU4JGxvZ1N0ciRjb2xvckx1bWluYW5jZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy91dGlscycpO1xuXG4vKlxuICogIEhhbmRsZSBzd2VldEFsZXJ0J3MgRE9NIGVsZW1lbnRzXG4gKi9cblxudmFyIF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlcy9oYW5kbGUtc3dhbC1kb20nKTtcblxuLy8gSGFuZGxlIGJ1dHRvbiBldmVudHMgYW5kIGtleWJvYXJkIGV2ZW50c1xuXG52YXIgX2hhbmRsZUJ1dHRvbiRoYW5kbGVDb25maXJtJGhhbmRsZUNhbmNlbCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9oYW5kbGUtY2xpY2snKTtcblxudmFyIF9oYW5kbGVLZXlEb3duID0gcmVxdWlyZSgnLi9tb2R1bGVzL2hhbmRsZS1rZXknKTtcblxudmFyIF9oYW5kbGVLZXlEb3duMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9oYW5kbGVLZXlEb3duKTtcblxuLy8gRGVmYXVsdCB2YWx1ZXNcblxudmFyIF9kZWZhdWx0UGFyYW1zID0gcmVxdWlyZSgnLi9tb2R1bGVzL2RlZmF1bHQtcGFyYW1zJyk7XG5cbnZhciBfZGVmYXVsdFBhcmFtczIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZGVmYXVsdFBhcmFtcyk7XG5cbnZhciBfc2V0UGFyYW1ldGVycyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9zZXQtcGFyYW1zJyk7XG5cbnZhciBfc2V0UGFyYW1ldGVyczIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc2V0UGFyYW1ldGVycyk7XG5cbi8qXG4gKiBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG4gKiAoV2UgYWxzbyB1c2Ugd2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudCBhcyBhIGdsb2JhbCB2YXJpYWJsZSlcbiAqL1xudmFyIHByZXZpb3VzV2luZG93S2V5RG93bjtcbnZhciBsYXN0Rm9jdXNlZEJ1dHRvbjtcblxuLypcbiAqIEdsb2JhbCBzd2VldEFsZXJ0IGZ1bmN0aW9uXG4gKiAodGhpcyBpcyB3aGF0IHRoZSB1c2VyIGNhbGxzKVxuICovXG52YXIgc3dlZXRBbGVydCwgc3dhbDtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3dlZXRBbGVydCA9IHN3YWwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXN0b21pemF0aW9ucyA9IGFyZ3VtZW50c1swXTtcblxuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ3N0b3Atc2Nyb2xsaW5nJyk7XG4gIF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5yZXNldElucHV0KCk7XG5cbiAgLypcbiAgICogVXNlIGFyZ3VtZW50IGlmIGRlZmluZWQgb3IgZGVmYXVsdCB2YWx1ZSBmcm9tIHBhcmFtcyBvYmplY3Qgb3RoZXJ3aXNlLlxuICAgKiBTdXBwb3J0cyB0aGUgY2FzZSB3aGVyZSBhIGRlZmF1bHQgdmFsdWUgaXMgYm9vbGVhbiB0cnVlIGFuZCBzaG91bGQgYmVcbiAgICogb3ZlcnJpZGRlbiBieSBhIGNvcnJlc3BvbmRpbmcgZXhwbGljaXQgYXJndW1lbnQgd2hpY2ggaXMgYm9vbGVhbiBmYWxzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGFyZ3VtZW50T3JEZWZhdWx0KGtleSkge1xuICAgIHZhciBhcmdzID0gY3VzdG9taXphdGlvbnM7XG4gICAgcmV0dXJuIGFyZ3Nba2V5XSA9PT0gdW5kZWZpbmVkID8gX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J11ba2V5XSA6IGFyZ3Nba2V5XTtcbiAgfVxuXG4gIGlmIChjdXN0b21pemF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX2V4dGVuZCRoZXhUb1JnYiRpc0lFOCRsb2dTdHIkY29sb3JMdW1pbmFuY2UubG9nU3RyKCdTd2VldEFsZXJ0IGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IF9leHRlbmQkaGV4VG9SZ2IkaXNJRTgkbG9nU3RyJGNvbG9yTHVtaW5hbmNlLmV4dGVuZCh7fSwgX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10pO1xuXG4gIHN3aXRjaCAodHlwZW9mIGN1c3RvbWl6YXRpb25zKSB7XG5cbiAgICAvLyBFeDogc3dhbChcIkhlbGxvXCIsIFwiSnVzdCB0ZXN0aW5nXCIsIFwiaW5mb1wiKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcGFyYW1zLnRpdGxlID0gY3VzdG9taXphdGlvbnM7XG4gICAgICBwYXJhbXMudGV4dCA9IGFyZ3VtZW50c1sxXSB8fCAnJztcbiAgICAgIHBhcmFtcy50eXBlID0gYXJndW1lbnRzWzJdIHx8ICcnO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBFeDogc3dhbCh7IHRpdGxlOlwiSGVsbG9cIiwgdGV4dDogXCJKdXN0IHRlc3RpbmdcIiwgdHlwZTogXCJpbmZvXCIgfSk7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChjdXN0b21pemF0aW9ucy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF9leHRlbmQkaGV4VG9SZ2IkaXNJRTgkbG9nU3RyJGNvbG9yTHVtaW5hbmNlLmxvZ1N0cignTWlzc2luZyBcInRpdGxlXCIgYXJndW1lbnQhJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnRpdGxlID0gY3VzdG9taXphdGlvbnMudGl0bGU7XG5cbiAgICAgIGZvciAodmFyIGN1c3RvbU5hbWUgaW4gX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10pIHtcbiAgICAgICAgcGFyYW1zW2N1c3RvbU5hbWVdID0gYXJndW1lbnRPckRlZmF1bHQoY3VzdG9tTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgXCJDb25maXJtXCIgaW5zdGVhZCBvZiBcIk9LXCIgaWYgY2FuY2VsIGJ1dHRvbiBpcyB2aXNpYmxlXG4gICAgICBwYXJhbXMuY29uZmlybUJ1dHRvblRleHQgPSBwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiA/ICdDb25maXJtJyA6IF9kZWZhdWx0UGFyYW1zMlsnZGVmYXVsdCddLmNvbmZpcm1CdXR0b25UZXh0O1xuICAgICAgcGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0ID0gYXJndW1lbnRPckRlZmF1bHQoJ2NvbmZpcm1CdXR0b25UZXh0Jyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gY2xpY2tpbmcgb24gXCJPS1wiL1wiQ2FuY2VsXCJcbiAgICAgIHBhcmFtcy5kb25lRnVuY3Rpb24gPSBhcmd1bWVudHNbMV0gfHwgbnVsbDtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgX2V4dGVuZCRoZXhUb1JnYiRpc0lFOCRsb2dTdHIkY29sb3JMdW1pbmFuY2UubG9nU3RyKCdVbmV4cGVjdGVkIHR5cGUgb2YgYXJndW1lbnQhIEV4cGVjdGVkIFwic3RyaW5nXCIgb3IgXCJvYmplY3RcIiwgZ290ICcgKyB0eXBlb2YgY3VzdG9taXphdGlvbnMpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICBfc2V0UGFyYW1ldGVyczJbJ2RlZmF1bHQnXShwYXJhbXMpO1xuICBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZml4VmVydGljYWxQb3NpdGlvbigpO1xuICBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24ub3Blbk1vZGFsKGFyZ3VtZW50c1sxXSk7XG5cbiAgLy8gTW9kYWwgaW50ZXJhY3Rpb25zXG4gIHZhciBtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuXG4gIC8qXG4gICAqIE1ha2Ugc3VyZSBhbGwgbW9kYWwgYnV0dG9ucyByZXNwb25kIHRvIGFsbCBldmVudHNcbiAgICovXG4gIHZhciAkYnV0dG9ucyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICB2YXIgYnV0dG9uRXZlbnRzID0gWydvbmNsaWNrJywgJ29ubW91c2VvdmVyJywgJ29ubW91c2VvdXQnLCAnb25tb3VzZWRvd24nLCAnb25tb3VzZXVwJywgJ29uZm9jdXMnXTtcbiAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGUpIHtcbiAgICByZXR1cm4gX2hhbmRsZUJ1dHRvbiRoYW5kbGVDb25maXJtJGhhbmRsZUNhbmNlbC5oYW5kbGVCdXR0b24oZSwgcGFyYW1zLCBtb2RhbCk7XG4gIH07XG5cbiAgZm9yICh2YXIgYnRuSW5kZXggPSAwOyBidG5JbmRleCA8ICRidXR0b25zLmxlbmd0aDsgYnRuSW5kZXgrKykge1xuICAgIGZvciAodmFyIGV2dEluZGV4ID0gMDsgZXZ0SW5kZXggPCBidXR0b25FdmVudHMubGVuZ3RoOyBldnRJbmRleCsrKSB7XG4gICAgICB2YXIgYnRuRXZ0ID0gYnV0dG9uRXZlbnRzW2V2dEluZGV4XTtcbiAgICAgICRidXR0b25zW2J0bkluZGV4XVtidG5FdnRdID0gb25CdXR0b25FdmVudDtcbiAgICB9XG4gIH1cblxuICAvLyBDbGlja2luZyBvdXRzaWRlIHRoZSBtb2RhbCBkaXNtaXNzZXMgaXQgKGlmIGFsbG93ZWQgYnkgdXNlcilcbiAgX3N3ZWV0QWxlcnRJbml0aWFsaXplJGdldE1vZGFsJGdldE92ZXJsYXkkZ2V0SW5wdXQkc2V0Rm9jdXNTdHlsZSRvcGVuTW9kYWwkcmVzZXRJbnB1dCRmaXhWZXJ0aWNhbFBvc2l0aW9uLmdldE92ZXJsYXkoKS5vbmNsaWNrID0gb25CdXR0b25FdmVudDtcblxuICBwcmV2aW91c1dpbmRvd0tleURvd24gPSB3aW5kb3cub25rZXlkb3duO1xuXG4gIHZhciBvbktleUV2ZW50ID0gZnVuY3Rpb24gb25LZXlFdmVudChlKSB7XG4gICAgcmV0dXJuIF9oYW5kbGVLZXlEb3duMlsnZGVmYXVsdCddKGUsIHBhcmFtcywgbW9kYWwpO1xuICB9O1xuICB3aW5kb3cub25rZXlkb3duID0gb25LZXlFdmVudDtcblxuICB3aW5kb3cub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGhhcyBmb2N1c2VkIGF3YXkgYW5kIGZvY3VzZWQgYmFjayBmcm9tIHRoZSB3aG9sZSB3aW5kb3cuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBQdXQgaW4gYSB0aW1lb3V0IHRvIGp1bXAgb3V0IG9mIHRoZSBldmVudCBzZXF1ZW5jZS5cbiAgICAgIC8vIENhbGxpbmcgZm9jdXMoKSBpbiB0aGUgZXZlbnQgc2VxdWVuY2UgY29uZnVzZXMgdGhpbmdzLlxuICAgICAgaWYgKGxhc3RGb2N1c2VkQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGFzdEZvY3VzZWRCdXR0b24uZm9jdXMoKTtcbiAgICAgICAgbGFzdEZvY3VzZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLy8gU2hvdyBhbGVydCB3aXRoIGVuYWJsZWQgYnV0dG9ucyBhbHdheXNcbiAgc3dhbC5lbmFibGVCdXR0b25zKCk7XG59O1xuXG4vKlxuICogU2V0IGRlZmF1bHQgcGFyYW1zIGZvciBlYWNoIHBvcHVwXG4gKiBAcGFyYW0ge09iamVjdH0gdXNlclBhcmFtc1xuICovXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzID0gc3dhbC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICh1c2VyUGFyYW1zKSB7XG4gIGlmICghdXNlclBhcmFtcykge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlclBhcmFtcyBpcyByZXF1aXJlZCcpO1xuICB9XG4gIGlmICh0eXBlb2YgdXNlclBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJQYXJhbXMgaGFzIHRvIGJlIGEgb2JqZWN0Jyk7XG4gIH1cblxuICBfZXh0ZW5kJGhleFRvUmdiJGlzSUU4JGxvZ1N0ciRjb2xvckx1bWluYW5jZS5leHRlbmQoX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10sIHVzZXJQYXJhbXMpO1xufTtcblxuLypcbiAqIEFuaW1hdGlvbiB3aGVuIGNsb3NpbmcgbW9kYWxcbiAqL1xuc3dlZXRBbGVydC5jbG9zZSA9IHN3YWwuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtb2RhbCA9IF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRNb2RhbCgpO1xuXG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5mYWRlT3V0KF9zd2VldEFsZXJ0SW5pdGlhbGl6ZSRnZXRNb2RhbCRnZXRPdmVybGF5JGdldElucHV0JHNldEZvY3VzU3R5bGUkb3Blbk1vZGFsJHJlc2V0SW5wdXQkZml4VmVydGljYWxQb3NpdGlvbi5nZXRPdmVybGF5KCksIDUpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24uZmFkZU91dChtb2RhbCwgNSk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcyhtb2RhbCwgJ3Nob3dTd2VldEFsZXJ0Jyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5hZGRDbGFzcyhtb2RhbCwgJ2hpZGVTd2VldEFsZXJ0Jyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcyhtb2RhbCwgJ3Zpc2libGUnKTtcblxuICAvKlxuICAgKiBSZXNldCBpY29uIGFuaW1hdGlvbnNcbiAgICovXG4gIHZhciAkc3VjY2Vzc0ljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS1zdWNjZXNzJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcygkc3VjY2Vzc0ljb24sICdhbmltYXRlJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcygkc3VjY2Vzc0ljb24ucXVlcnlTZWxlY3RvcignLnNhLXRpcCcpLCAnYW5pbWF0ZVN1Y2Nlc3NUaXAnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRzdWNjZXNzSWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtbG9uZycpLCAnYW5pbWF0ZVN1Y2Nlc3NMb25nJyk7XG5cbiAgdmFyICRlcnJvckljb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaWNvbi5zYS1lcnJvcicpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJGVycm9ySWNvbiwgJ2FuaW1hdGVFcnJvckljb24nKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRlcnJvckljb24ucXVlcnlTZWxlY3RvcignLnNhLXgtbWFyaycpLCAnYW5pbWF0ZVhNYXJrJyk7XG5cbiAgdmFyICR3YXJuaW5nSWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLXdhcm5pbmcnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCR3YXJuaW5nSWNvbiwgJ3B1bHNlV2FybmluZycpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24ucmVtb3ZlQ2xhc3MoJHdhcm5pbmdJY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1ib2R5JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCR3YXJuaW5nSWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtZG90JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcblxuICAvLyBSZXNldCBjdXN0b20gY2xhc3MgKGRlbGF5IHNvIHRoYXQgVUkgY2hhbmdlcyBhcmVuJ3QgdmlzaWJsZSlcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1c3RvbUNsYXNzID0gbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycpO1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcyhtb2RhbCwgY3VzdG9tQ2xhc3MpO1xuICB9LCAzMDApO1xuXG4gIC8vIE1ha2UgcGFnZSBzY3JvbGxhYmxlIGFnYWluXG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnc3RvcC1zY3JvbGxpbmcnKTtcblxuICAvLyBSZXNldCB0aGUgcGFnZSB0byBpdHMgcHJldmlvdXMgc3RhdGVcbiAgd2luZG93Lm9ua2V5ZG93biA9IHByZXZpb3VzV2luZG93S2V5RG93bjtcbiAgaWYgKHdpbmRvdy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICB3aW5kb3cucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbiAgbGFzdEZvY3VzZWRCdXR0b24gPSB1bmRlZmluZWQ7XG4gIGNsZWFyVGltZW91dChtb2RhbC50aW1lb3V0KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qXG4gKiBWYWxpZGF0aW9uIG9mIHRoZSBpbnB1dCBmaWVsZCBpcyBkb25lIGJ5IHVzZXJcbiAqIElmIHNvbWV0aGluZyBpcyB3cm9uZyA9PiBjYWxsIHNob3dJbnB1dEVycm9yIHdpdGggZXJyb3JNZXNzYWdlXG4gKi9cbnN3ZWV0QWxlcnQuc2hvd0lucHV0RXJyb3IgPSBzd2FsLnNob3dJbnB1dEVycm9yID0gZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICB2YXIgbW9kYWwgPSBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZ2V0TW9kYWwoKTtcblxuICB2YXIgJGVycm9ySWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pbnB1dC1lcnJvcicpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24uYWRkQ2xhc3MoJGVycm9ySWNvbiwgJ3Nob3cnKTtcblxuICB2YXIgJGVycm9yQ29udGFpbmVyID0gbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWVycm9yLWNvbnRhaW5lcicpO1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUkaXNEZXNjZW5kYW50JGdldFRvcE1hcmdpbiRmYWRlSW4kZmFkZU91dCRmaXJlQ2xpY2skc3RvcEV2ZW50UHJvcGFnYXRpb24uYWRkQ2xhc3MoJGVycm9yQ29udGFpbmVyLCAnc2hvdycpO1xuXG4gICRlcnJvckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdwJykuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucygpO1xuICB9LCAxKTtcblxuICBtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmZvY3VzKCk7XG59O1xuXG4vKlxuICogUmVzZXQgaW5wdXQgZXJyb3IgRE9NIGVsZW1lbnRzXG4gKi9cbnN3ZWV0QWxlcnQucmVzZXRJbnB1dEVycm9yID0gc3dhbC5yZXNldElucHV0RXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gSWYgcHJlc3MgZW50ZXIgPT4gaWdub3JlXG4gIGlmIChldmVudCAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciAkbW9kYWwgPSBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZ2V0TW9kYWwoKTtcblxuICB2YXIgJGVycm9ySWNvbiA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaW5wdXQtZXJyb3InKTtcbiAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlJGlzRGVzY2VuZGFudCRnZXRUb3BNYXJnaW4kZmFkZUluJGZhZGVPdXQkZmlyZUNsaWNrJHN0b3BFdmVudFByb3BhZ2F0aW9uLnJlbW92ZUNsYXNzKCRlcnJvckljb24sICdzaG93Jyk7XG5cbiAgdmFyICRlcnJvckNvbnRhaW5lciA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtZXJyb3ItY29udGFpbmVyJyk7XG4gIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSRpc0Rlc2NlbmRhbnQkZ2V0VG9wTWFyZ2luJGZhZGVJbiRmYWRlT3V0JGZpcmVDbGljayRzdG9wRXZlbnRQcm9wYWdhdGlvbi5yZW1vdmVDbGFzcygkZXJyb3JDb250YWluZXIsICdzaG93Jyk7XG59O1xuXG4vKlxuICogRGlzYWJsZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICovXG5zd2VldEFsZXJ0LmRpc2FibGVCdXR0b25zID0gc3dhbC5kaXNhYmxlQnV0dG9ucyA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgbW9kYWwgPSBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZ2V0TW9kYWwoKTtcbiAgdmFyICRjb25maXJtQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbmZpcm0nKTtcbiAgdmFyICRjYW5jZWxCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gICRjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgJGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59O1xuXG4vKlxuICogRW5hYmxlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gKi9cbnN3ZWV0QWxlcnQuZW5hYmxlQnV0dG9ucyA9IHN3YWwuZW5hYmxlQnV0dG9ucyA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgbW9kYWwgPSBfc3dlZXRBbGVydEluaXRpYWxpemUkZ2V0TW9kYWwkZ2V0T3ZlcmxheSRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlJG9wZW5Nb2RhbCRyZXNldElucHV0JGZpeFZlcnRpY2FsUG9zaXRpb24uZ2V0TW9kYWwoKTtcbiAgdmFyICRjb25maXJtQnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbmZpcm0nKTtcbiAgdmFyICRjYW5jZWxCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gICRjb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICRjYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBUaGUgJ2hhbmRsZS1jbGljaycgbW9kdWxlIHJlcXVpcmVzXG4gIC8vIHRoYXQgJ3N3ZWV0QWxlcnQnIHdhcyBzZXQgYXMgZ2xvYmFsLlxuICB3aW5kb3cuc3dlZXRBbGVydCA9IHdpbmRvdy5zd2FsID0gc3dlZXRBbGVydDtcbn0gZWxzZSB7XG4gIF9leHRlbmQkaGV4VG9SZ2IkaXNJRTgkbG9nU3RyJGNvbG9yTHVtaW5hbmNlLmxvZ1N0cignU3dlZXRBbGVydCBpcyBhIGZyb250ZW5kIG1vZHVsZSEnKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9zd2VldGFsZXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCcgJyArIGNsYXNzTmFtZSArICcgJykudGVzdCgnICcgKyBlbGVtLmNsYXNzTmFtZSArICcgJyk7XG59O1xuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgdmFyIG5ld0NsYXNzID0gJyAnICsgZWxlbS5jbGFzc05hbWUucmVwbGFjZSgvW1xcdFxcclxcbl0vZywgJyAnKSArICcgJztcbiAgaWYgKGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkpIHtcbiAgICB3aGlsZSAobmV3Q2xhc3MuaW5kZXhPZignICcgKyBjbGFzc05hbWUgKyAnICcpID49IDApIHtcbiAgICAgIG5ld0NsYXNzID0gbmV3Q2xhc3MucmVwbGFjZSgnICcgKyBjbGFzc05hbWUgKyAnICcsICcgJyk7XG4gICAgfVxuICAgIGVsZW0uY2xhc3NOYW1lID0gbmV3Q2xhc3MucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB9XG59O1xuXG52YXIgZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0cikpO1xuICByZXR1cm4gZGl2LmlubmVySFRNTDtcbn07XG5cbnZhciBfc2hvdyA9IGZ1bmN0aW9uIF9zaG93KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59O1xuXG52YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZWxlbXMpIHtcbiAgaWYgKGVsZW1zICYmICFlbGVtcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gX3Nob3coZWxlbXMpO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyArK2kpIHtcbiAgICBfc2hvdyhlbGVtc1tpXSk7XG4gIH1cbn07XG5cbnZhciBfaGlkZSA9IGZ1bmN0aW9uIF9oaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtcykge1xuICBpZiAoZWxlbXMgJiYgIWVsZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBfaGlkZShlbGVtcyk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7ICsraSkge1xuICAgIF9oaWRlKGVsZW1zW2ldKTtcbiAgfVxufTtcblxudmFyIGlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZ2V0VG9wTWFyZ2luID0gZnVuY3Rpb24gZ2V0VG9wTWFyZ2luKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHZhciBoZWlnaHQgPSBlbGVtLmNsaWVudEhlaWdodCxcbiAgICAgIHBhZGRpbmc7XG4gIGlmICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBJRSA4XG4gICAgcGFkZGluZyA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZWxlbSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHBhZGRpbmcgPSBwYXJzZUludChlbGVtLmN1cnJlbnRTdHlsZS5wYWRkaW5nKTtcbiAgfVxuXG4gIGVsZW0uc3R5bGUubGVmdCA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJldHVybiAnLScgKyBwYXJzZUludCgoaGVpZ2h0ICsgcGFkZGluZykgLyAyKSArICdweCc7XG59O1xuXG52YXIgZmFkZUluID0gZnVuY3Rpb24gZmFkZUluKGVsZW0sIGludGVydmFsKSB7XG4gIGlmICgrZWxlbS5zdHlsZS5vcGFjaXR5IDwgMSkge1xuICAgIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTY7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHZhciBsYXN0ID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIHRpY2sgPSAoZnVuY3Rpb24gKF90aWNrKSB7XG4gICAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgICByZXR1cm4gX3RpY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdGljay50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aWNrLnRvU3RyaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGljaztcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSArZWxlbS5zdHlsZS5vcGFjaXR5ICsgKG5ldyBEYXRlKCkgLSBsYXN0KSAvIDEwMDtcbiAgICAgIGxhc3QgPSArbmV3IERhdGUoKTtcblxuICAgICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPCAxKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGljaywgaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRpY2soKTtcbiAgfVxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvL2ZhbGxiYWNrIElFOFxufTtcblxudmFyIGZhZGVPdXQgPSBmdW5jdGlvbiBmYWRlT3V0KGVsZW0sIGludGVydmFsKSB7XG4gIGludGVydmFsID0gaW50ZXJ2YWwgfHwgMTY7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gIHZhciBsYXN0ID0gK25ldyBEYXRlKCk7XG4gIHZhciB0aWNrID0gKGZ1bmN0aW9uIChfdGljazIpIHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgcmV0dXJuIF90aWNrMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHRpY2sudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RpY2syLnRvU3RyaW5nKCk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aWNrO1xuICB9KShmdW5jdGlvbiAoKSB7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gK2VsZW0uc3R5bGUub3BhY2l0eSAtIChuZXcgRGF0ZSgpIC0gbGFzdCkgLyAxMDA7XG4gICAgbGFzdCA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKCtlbGVtLnN0eWxlLm9wYWNpdHkgPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KHRpY2ssIGludGVydmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG4gIHRpY2soKTtcbn07XG5cbnZhciBmaXJlQ2xpY2sgPSBmdW5jdGlvbiBmaXJlQ2xpY2sobm9kZSkge1xuICAvLyBUYWtlbiBmcm9tIGh0dHA6Ly93d3cubm9ub2J0cnVzaXZlLmNvbS8yMDExLzExLzI5L3Byb2dyYW1hdGljYWxseS1maXJlLWNyb3NzYnJvd3Nlci1jbGljay1ldmVudC13aXRoLWphdmFzY3JpcHQvXG4gIC8vIFRoZW4gZml4ZWQgZm9yIHRvZGF5J3MgQ2hyb21lIGJyb3dzZXIuXG4gIGlmICh0eXBlb2YgTW91c2VFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVwLXRvLWRhdGUgYXBwcm9hY2hcbiAgICB2YXIgbWV2dCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChtZXZ0KTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgIC8vIEZhbGxiYWNrXG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgIGV2dC5pbml0RXZlbnQoJ2NsaWNrJywgZmFsc2UsIGZhbHNlKTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCkge1xuICAgIG5vZGUuZmlyZUV2ZW50KCdvbmNsaWNrJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5vZGUub25jbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUub25jbGljaygpO1xuICB9XG59O1xuXG52YXIgc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBmdW5jdGlvbiBzdG9wRXZlbnRQcm9wYWdhdGlvbihlKSB7XG4gIC8vIEluIHBhcnRpY3VsYXIsIG1ha2Ugc3VyZSB0aGUgc3BhY2UgYmFyIGRvZXNuJ3Qgc2Nyb2xsIHRoZSBtYWluIHdpbmRvdy5cbiAgaWYgKHR5cGVvZiBlLnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCAmJiB3aW5kb3cuZXZlbnQuaGFzT3duUHJvcGVydHkoJ2NhbmNlbEJ1YmJsZScpKSB7XG4gICAgd2luZG93LmV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydHMuaGFzQ2xhc3MgPSBoYXNDbGFzcztcbmV4cG9ydHMuYWRkQ2xhc3MgPSBhZGRDbGFzcztcbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzcztcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGVzY2FwZUh0bWw7XG5leHBvcnRzLl9zaG93ID0gX3Nob3c7XG5leHBvcnRzLnNob3cgPSBzaG93O1xuZXhwb3J0cy5faGlkZSA9IF9oaWRlO1xuZXhwb3J0cy5oaWRlID0gaGlkZTtcbmV4cG9ydHMuaXNEZXNjZW5kYW50ID0gaXNEZXNjZW5kYW50O1xuZXhwb3J0cy5nZXRUb3BNYXJnaW4gPSBnZXRUb3BNYXJnaW47XG5leHBvcnRzLmZhZGVJbiA9IGZhZGVJbjtcbmV4cG9ydHMuZmFkZU91dCA9IGZhZGVPdXQ7XG5leHBvcnRzLmZpcmVDbGljayA9IGZpcmVDbGljaztcbmV4cG9ydHMuc3RvcEV2ZW50UHJvcGFnYXRpb24gPSBzdG9wRXZlbnRQcm9wYWdhdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtZG9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLypcbiAqIEFsbG93IHVzZXIgdG8gcGFzcyB0aGVpciBvd24gcGFyYW1zXG4gKi9cbnZhciBleHRlbmQgPSBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG4vKlxuICogQ29udmVydCBIRVggY29kZXMgdG8gUkdCIHZhbHVlcyAoIzAwMDAwMCAtPiByZ2IoMCwwLDApKVxuICovXG52YXIgaGV4VG9SZ2IgPSBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8gcGFyc2VJbnQocmVzdWx0WzFdLCAxNikgKyAnLCAnICsgcGFyc2VJbnQocmVzdWx0WzJdLCAxNikgKyAnLCAnICsgcGFyc2VJbnQocmVzdWx0WzNdLCAxNikgOiBudWxsO1xufTtcblxuLypcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHVzaW5nIEludGVybmV0IEV4cGxvcmVyIDggKGZvciBmYWxsYmFja3MpXG4gKi9cbnZhciBpc0lFOCA9IGZ1bmN0aW9uIGlzSUU4KCkge1xuICByZXR1cm4gd2luZG93LmF0dGFjaEV2ZW50ICYmICF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcjtcbn07XG5cbi8qXG4gKiBJRSBjb21wYXRpYmxlIGxvZ2dpbmcgZm9yIGRldmVsb3BlcnNcbiAqL1xudmFyIGxvZ1N0ciA9IGZ1bmN0aW9uIGxvZ1N0cihzdHJpbmcpIHtcbiAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgLy8gSUUuLi5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ1N3ZWV0QWxlcnQ6ICcgKyBzdHJpbmcpO1xuICB9XG59O1xuXG4vKlxuICogU2V0IGhvdmVyLCBhY3RpdmUgYW5kIGZvY3VzLXN0YXRlcyBmb3IgYnV0dG9ucyBcbiAqIChzb3VyY2U6IGh0dHA6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWdlbmVyYXRlLWxpZ2h0ZXItZGFya2VyLWNvbG9yKVxuICovXG52YXIgY29sb3JMdW1pbmFuY2UgPSBmdW5jdGlvbiBjb2xvckx1bWluYW5jZShoZXgsIGx1bSkge1xuICAvLyBWYWxpZGF0ZSBoZXggc3RyaW5nXG4gIGhleCA9IFN0cmluZyhoZXgpLnJlcGxhY2UoL1teMC05YS1mXS9naSwgJycpO1xuICBpZiAoaGV4Lmxlbmd0aCA8IDYpIHtcbiAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gIH1cbiAgbHVtID0gbHVtIHx8IDA7XG5cbiAgLy8gQ29udmVydCB0byBkZWNpbWFsIGFuZCBjaGFuZ2UgbHVtaW5vc2l0eVxuICB2YXIgcmdiID0gJyMnO1xuICB2YXIgYztcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGMgPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgIGMgPSBNYXRoLnJvdW5kKE1hdGgubWluKE1hdGgubWF4KDAsIGMgKyBjICogbHVtKSwgMjU1KSkudG9TdHJpbmcoMTYpO1xuICAgIHJnYiArPSAoJzAwJyArIGMpLnN1YnN0cihjLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gcmdiO1xufTtcblxuZXhwb3J0cy5leHRlbmQgPSBleHRlbmQ7XG5leHBvcnRzLmhleFRvUmdiID0gaGV4VG9SZ2I7XG5leHBvcnRzLmlzSUU4ID0gaXNJRTg7XG5leHBvcnRzLmxvZ1N0ciA9IGxvZ1N0cjtcbmV4cG9ydHMuY29sb3JMdW1pbmFuY2UgPSBjb2xvckx1bWluYW5jZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2hleFRvUmdiID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcyA9IHJlcXVpcmUoJy4vaGFuZGxlLWRvbScpO1xuXG52YXIgX2RlZmF1bHRQYXJhbXMgPSByZXF1aXJlKCcuL2RlZmF1bHQtcGFyYW1zJyk7XG5cbnZhciBfZGVmYXVsdFBhcmFtczIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZGVmYXVsdFBhcmFtcyk7XG5cbi8qXG4gKiBBZGQgbW9kYWwgKyBvdmVybGF5IHRvIERPTVxuICovXG5cbnZhciBfaW5qZWN0ZWRIVE1MID0gcmVxdWlyZSgnLi9pbmplY3RlZC1odG1sJyk7XG5cbnZhciBfaW5qZWN0ZWRIVE1MMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbmplY3RlZEhUTUwpO1xuXG52YXIgbW9kYWxDbGFzcyA9ICcuc3dlZXQtYWxlcnQnO1xudmFyIG92ZXJsYXlDbGFzcyA9ICcuc3dlZXQtb3ZlcmxheSc7XG5cbnZhciBzd2VldEFsZXJ0SW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIHN3ZWV0QWxlcnRJbml0aWFsaXplKCkge1xuICB2YXIgc3dlZXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN3ZWV0V3JhcC5pbm5lckhUTUwgPSBfaW5qZWN0ZWRIVE1MMlsnZGVmYXVsdCddO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyB0byBib2R5XG4gIHdoaWxlIChzd2VldFdyYXAuZmlyc3RDaGlsZCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3dlZXRXcmFwLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIG1vZGFsXG4gKi9cbnZhciBnZXRNb2RhbCA9IChmdW5jdGlvbiAoX2dldE1vZGFsKSB7XG4gIGZ1bmN0aW9uIGdldE1vZGFsKCkge1xuICAgIHJldHVybiBfZ2V0TW9kYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGdldE1vZGFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZ2V0TW9kYWwudG9TdHJpbmcoKTtcbiAgfTtcblxuICByZXR1cm4gZ2V0TW9kYWw7XG59KShmdW5jdGlvbiAoKSB7XG4gIHZhciAkbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsQ2xhc3MpO1xuXG4gIGlmICghJG1vZGFsKSB7XG4gICAgc3dlZXRBbGVydEluaXRpYWxpemUoKTtcbiAgICAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB9XG5cbiAgcmV0dXJuICRtb2RhbDtcbn0pO1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIGlucHV0IChpbiBtb2RhbClcbiAqL1xudmFyIGdldElucHV0ID0gZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICBpZiAoJG1vZGFsKSB7XG4gICAgcmV0dXJuICRtb2RhbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICB9XG59O1xuXG4vKlxuICogR2V0IERPTSBlbGVtZW50IG9mIG92ZXJsYXlcbiAqL1xudmFyIGdldE92ZXJsYXkgPSBmdW5jdGlvbiBnZXRPdmVybGF5KCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdmVybGF5Q2xhc3MpO1xufTtcblxuLypcbiAqIEFkZCBib3gtc2hhZG93IHN0eWxlIHRvIGJ1dHRvbiAoZGVwZW5kaW5nIG9uIGl0cyBjaG9zZW4gYmctY29sb3IpXG4gKi9cbnZhciBzZXRGb2N1c1N0eWxlID0gZnVuY3Rpb24gc2V0Rm9jdXNTdHlsZSgkYnV0dG9uLCBiZ0NvbG9yKSB7XG4gIHZhciByZ2JDb2xvciA9IF9oZXhUb1JnYi5oZXhUb1JnYihiZ0NvbG9yKTtcbiAgJGJ1dHRvbi5zdHlsZS5ib3hTaGFkb3cgPSAnMCAwIDJweCByZ2JhKCcgKyByZ2JDb2xvciArICcsIDAuOCksIGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpJztcbn07XG5cbi8qXG4gKiBBbmltYXRpb24gd2hlbiBvcGVuaW5nIG1vZGFsXG4gKi9cbnZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWwoY2FsbGJhY2spIHtcbiAgdmFyICRtb2RhbCA9IGdldE1vZGFsKCk7XG4gIF9yZW1vdmVDbGFzcyRnZXRUb3BNYXJnaW4kZmFkZUluJHNob3ckYWRkQ2xhc3MuZmFkZUluKGdldE92ZXJsYXkoKSwgMTApO1xuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLnNob3coJG1vZGFsKTtcbiAgX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcy5hZGRDbGFzcygkbW9kYWwsICdzaG93U3dlZXRBbGVydCcpO1xuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLnJlbW92ZUNsYXNzKCRtb2RhbCwgJ2hpZGVTd2VldEFsZXJ0Jyk7XG5cbiAgd2luZG93LnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIHZhciAkb2tCdXR0b24gPSAkbW9kYWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmNvbmZpcm0nKTtcbiAgJG9rQnV0dG9uLmZvY3VzKCk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcy5hZGRDbGFzcygkbW9kYWwsICd2aXNpYmxlJyk7XG4gIH0sIDUwMCk7XG5cbiAgdmFyIHRpbWVyID0gJG1vZGFsLmdldEF0dHJpYnV0ZSgnZGF0YS10aW1lcicpO1xuXG4gIGlmICh0aW1lciAhPT0gJ251bGwnICYmIHRpbWVyICE9PSAnJykge1xuICAgIHZhciB0aW1lckNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgJG1vZGFsLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkb25lRnVuY3Rpb25FeGlzdHMgPSAodGltZXJDYWxsYmFjayB8fCBudWxsKSAmJiAkbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWhhcy1kb25lLWZ1bmN0aW9uJykgPT09ICd0cnVlJztcbiAgICAgIGlmIChkb25lRnVuY3Rpb25FeGlzdHMpIHtcbiAgICAgICAgdGltZXJDYWxsYmFjayhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3ZWV0QWxlcnQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lcik7XG4gIH1cbn07XG5cbi8qXG4gKiBSZXNldCB0aGUgc3R5bGluZyBvZiB0aGUgaW5wdXRcbiAqIChmb3IgZXhhbXBsZSBpZiBlcnJvcnMgaGF2ZSBiZWVuIHNob3duKVxuICovXG52YXIgcmVzZXRJbnB1dCA9IGZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICB2YXIgJGlucHV0ID0gZ2V0SW5wdXQoKTtcblxuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLnJlbW92ZUNsYXNzKCRtb2RhbCwgJ3Nob3ctaW5wdXQnKTtcbiAgJGlucHV0LnZhbHVlID0gX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10uaW5wdXRWYWx1ZTtcbiAgJGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIF9kZWZhdWx0UGFyYW1zMlsnZGVmYXVsdCddLmlucHV0VHlwZSk7XG4gICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgX2RlZmF1bHRQYXJhbXMyWydkZWZhdWx0J10uaW5wdXRQbGFjZWhvbGRlcik7XG5cbiAgcmVzZXRJbnB1dEVycm9yKCk7XG59O1xuXG52YXIgcmVzZXRJbnB1dEVycm9yID0gZnVuY3Rpb24gcmVzZXRJbnB1dEVycm9yKGV2ZW50KSB7XG4gIC8vIElmIHByZXNzIGVudGVyID0+IGlnbm9yZVxuICBpZiAoZXZlbnQgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgJG1vZGFsID0gZ2V0TW9kYWwoKTtcblxuICB2YXIgJGVycm9ySWNvbiA9ICRtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc2EtaW5wdXQtZXJyb3InKTtcbiAgX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcy5yZW1vdmVDbGFzcygkZXJyb3JJY29uLCAnc2hvdycpO1xuXG4gIHZhciAkZXJyb3JDb250YWluZXIgPSAkbW9kYWwucXVlcnlTZWxlY3RvcignLnNhLWVycm9yLWNvbnRhaW5lcicpO1xuICBfcmVtb3ZlQ2xhc3MkZ2V0VG9wTWFyZ2luJGZhZGVJbiRzaG93JGFkZENsYXNzLnJlbW92ZUNsYXNzKCRlcnJvckNvbnRhaW5lciwgJ3Nob3cnKTtcbn07XG5cbi8qXG4gKiBTZXQgXCJtYXJnaW4tdG9wXCItcHJvcGVydHkgb24gbW9kYWwgYmFzZWQgb24gaXRzIGNvbXB1dGVkIGhlaWdodFxuICovXG52YXIgZml4VmVydGljYWxQb3NpdGlvbiA9IGZ1bmN0aW9uIGZpeFZlcnRpY2FsUG9zaXRpb24oKSB7XG4gIHZhciAkbW9kYWwgPSBnZXRNb2RhbCgpO1xuICAkbW9kYWwuc3R5bGUubWFyZ2luVG9wID0gX3JlbW92ZUNsYXNzJGdldFRvcE1hcmdpbiRmYWRlSW4kc2hvdyRhZGRDbGFzcy5nZXRUb3BNYXJnaW4oZ2V0TW9kYWwoKSk7XG59O1xuXG5leHBvcnRzLnN3ZWV0QWxlcnRJbml0aWFsaXplID0gc3dlZXRBbGVydEluaXRpYWxpemU7XG5leHBvcnRzLmdldE1vZGFsID0gZ2V0TW9kYWw7XG5leHBvcnRzLmdldE92ZXJsYXkgPSBnZXRPdmVybGF5O1xuZXhwb3J0cy5nZXRJbnB1dCA9IGdldElucHV0O1xuZXhwb3J0cy5zZXRGb2N1c1N0eWxlID0gc2V0Rm9jdXNTdHlsZTtcbmV4cG9ydHMub3Blbk1vZGFsID0gb3Blbk1vZGFsO1xuZXhwb3J0cy5yZXNldElucHV0ID0gcmVzZXRJbnB1dDtcbmV4cG9ydHMucmVzZXRJbnB1dEVycm9yID0gcmVzZXRJbnB1dEVycm9yO1xuZXhwb3J0cy5maXhWZXJ0aWNhbFBvc2l0aW9uID0gZml4VmVydGljYWxQb3NpdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9oYW5kbGUtc3dhbC1kb20uanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgdGl0bGU6ICcnLFxuICB0ZXh0OiAnJyxcbiAgdHlwZTogbnVsbCxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IGZhbHNlLFxuICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gIGNsb3NlT25Db25maXJtOiB0cnVlLFxuICBjbG9zZU9uQ2FuY2VsOiB0cnVlLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzhDRDRGNScsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VTaXplOiBudWxsLFxuICB0aW1lcjogbnVsbCxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBodG1sOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgaW5wdXRUeXBlOiAndGV4dCcsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2Vcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRQYXJhbXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Jvd2VyX2NvbXBvbmVudHMvc3dlZXRhbGVydC9saWIvbW9kdWxlcy9kZWZhdWx0LXBhcmFtcy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaW5qZWN0ZWRIVE1MID1cblxuLy8gRGFyayBvdmVybGF5XG5cIjxkaXYgY2xhc3M9XFxcInN3ZWV0LW92ZXJsYXlcXFwiIHRhYkluZGV4PVxcXCItMVxcXCI+PC9kaXY+XCIgK1xuXG4vLyBNb2RhbFxuXCI8ZGl2IGNsYXNzPVxcXCJzd2VldC1hbGVydFxcXCI+XCIgK1xuXG4vLyBFcnJvciBpY29uXG5cIjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2EtZXJyb3JcXFwiPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYS14LW1hcmtcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWxpbmUgc2EtbGVmdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWxpbmUgc2EtcmlnaHRcXFwiPjwvc3Bhbj5cXG4gICAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlwiICtcblxuLy8gV2FybmluZyBpY29uXG5cIjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2Etd2FybmluZ1xcXCI+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInNhLWJvZHlcXFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EtZG90XFxcIj48L3NwYW4+XFxuICAgIDwvZGl2PlwiICtcblxuLy8gSW5mbyBpY29uXG5cIjxkaXYgY2xhc3M9XFxcInNhLWljb24gc2EtaW5mb1xcXCI+PC9kaXY+XCIgK1xuXG4vLyBTdWNjZXNzIGljb25cblwiPGRpdiBjbGFzcz1cXFwic2EtaWNvbiBzYS1zdWNjZXNzXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EtbGluZSBzYS10aXBcXFwiPjwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwic2EtbGluZSBzYS1sb25nXFxcIj48L3NwYW4+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2EtcGxhY2Vob2xkZXJcXFwiPjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNhLWZpeFxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlwiICsgXCI8ZGl2IGNsYXNzPVxcXCJzYS1pY29uIHNhLWN1c3RvbVxcXCI+PC9kaXY+XCIgK1xuXG4vLyBUaXRsZSwgdGV4dCBhbmQgaW5wdXRcblwiPGgyPlRpdGxlPC9oMj5cXG4gICAgPHA+VGV4dDwvcD5cXG4gICAgPGZpZWxkc2V0PlxcbiAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiB0YWJJbmRleD1cXFwiM1xcXCIgLz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzYS1pbnB1dC1lcnJvclxcXCI+PC9kaXY+XFxuICAgIDwvZmllbGRzZXQ+XCIgK1xuXG4vLyBJbnB1dCBlcnJvcnNcblwiPGRpdiBjbGFzcz1cXFwic2EtZXJyb3ItY29udGFpbmVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj4hPC9kaXY+XFxuICAgICAgPHA+Tm90IHZhbGlkITwvcD5cXG4gICAgPC9kaXY+XCIgK1xuXG4vLyBDYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uc1xuXCI8ZGl2IGNsYXNzPVxcXCJzYS1idXR0b24tY29udGFpbmVyXFxcIj5cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJjYW5jZWxcXFwiIHRhYkluZGV4PVxcXCIyXFxcIj5DYW5jZWw8L2J1dHRvbj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzYS1jb25maXJtLWJ1dHRvbi1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiY29uZmlybVxcXCIgdGFiSW5kZXg9XFxcIjFcXFwiPk9LPC9idXR0b24+XCIgK1xuXG4vLyBMb2FkaW5nIGFuaW1hdGlvblxuXCI8ZGl2IGNsYXNzPVxcXCJsYS1iYWxsLWZhbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlwiICtcblxuLy8gRW5kIG9mIG1vZGFsXG5cIjwvZGl2PlwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGluamVjdGVkSFRNTDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ib3dlcl9jb21wb25lbnRzL3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvaW5qZWN0ZWQtaHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb2xvckx1bWluYW5jZSA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9nZXRNb2RhbCA9IHJlcXVpcmUoJy4vaGFuZGxlLXN3YWwtZG9tJyk7XG5cbnZhciBfaGFzQ2xhc3MkaXNEZXNjZW5kYW50ID0gcmVxdWlyZSgnLi9oYW5kbGUtZG9tJyk7XG5cbi8qXG4gKiBVc2VyIGNsaWNrZWQgb24gXCJDb25maXJtXCIvXCJPS1wiIG9yIFwiQ2FuY2VsXCJcbiAqL1xudmFyIGhhbmRsZUJ1dHRvbiA9IGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbihldmVudCwgcGFyYW1zLCBtb2RhbCkge1xuICB2YXIgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdjb25maXJtJykgIT09IC0xO1xuICB2YXIgdGFyZ2V0ZWRPdmVybGF5ID0gdGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdzd2VldC1vdmVybGF5JykgIT09IC0xO1xuICB2YXIgbW9kYWxJc1Zpc2libGUgPSBfaGFzQ2xhc3MkaXNEZXNjZW5kYW50Lmhhc0NsYXNzKG1vZGFsLCAndmlzaWJsZScpO1xuICB2YXIgZG9uZUZ1bmN0aW9uRXhpc3RzID0gcGFyYW1zLmRvbmVGdW5jdGlvbiAmJiBtb2RhbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nKSA9PT0gJ3RydWUnO1xuXG4gIC8vIFNpbmNlIHRoZSB1c2VyIGNhbiBjaGFuZ2UgdGhlIGJhY2tncm91bmQtY29sb3Igb2YgdGhlIGNvbmZpcm0gYnV0dG9uIHByb2dyYW1tYXRpY2FsbHksXG4gIC8vIHdlIG11c3QgY2FsY3VsYXRlIHdoYXQgdGhlIGNvbG9yIHNob3VsZCBiZSBvbiBob3Zlci9hY3RpdmVcbiAgdmFyIG5vcm1hbENvbG9yLCBob3ZlckNvbG9yLCBhY3RpdmVDb2xvcjtcbiAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgbm9ybWFsQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICAgIGhvdmVyQ29sb3IgPSBfY29sb3JMdW1pbmFuY2UuY29sb3JMdW1pbmFuY2Uobm9ybWFsQ29sb3IsIC0wLjA0KTtcbiAgICBhY3RpdmVDb2xvciA9IF9jb2xvckx1bWluYW5jZS5jb2xvckx1bWluYW5jZShub3JtYWxDb2xvciwgLTAuMTQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGNvbG9yKSB7XG4gICAgaWYgKHRhcmdldGVkQ29uZmlybSAmJiBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGhvdmVyQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3Iobm9ybWFsQ29sb3IpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdtb3VzZWRvd24nOlxuICAgICAgc2hvdWxkU2V0Q29uZmlybUJ1dHRvbkNvbG9yKGFjdGl2ZUNvbG9yKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbW91c2V1cCc6XG4gICAgICBzaG91bGRTZXRDb25maXJtQnV0dG9uQ29sb3IoaG92ZXJDb2xvcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgIHZhciAkY29uZmlybUJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG4gICAgICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcblxuICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAkY2FuY2VsQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjb25maXJtQnV0dG9uLnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY2xpY2snOlxuICAgICAgdmFyIGNsaWNrZWRPbk1vZGFsID0gbW9kYWwgPT09IHRhcmdldDtcbiAgICAgIHZhciBjbGlja2VkT25Nb2RhbENoaWxkID0gX2hhc0NsYXNzJGlzRGVzY2VuZGFudC5pc0Rlc2NlbmRhbnQobW9kYWwsIHRhcmdldCk7XG5cbiAgICAgIC8vIElnbm9yZSBjbGljayBvdXRzaWRlIGlmIGFsbG93T3V0c2lkZUNsaWNrIGlzIGZhbHNlXG4gICAgICBpZiAoIWNsaWNrZWRPbk1vZGFsICYmICFjbGlja2VkT25Nb2RhbENoaWxkICYmIG1vZGFsSXNWaXNpYmxlICYmICFwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0gJiYgZG9uZUZ1bmN0aW9uRXhpc3RzICYmIG1vZGFsSXNWaXNpYmxlKSB7XG4gICAgICAgIGhhbmRsZUNvbmZpcm0obW9kYWwsIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKGRvbmVGdW5jdGlvbkV4aXN0cyAmJiBtb2RhbElzVmlzaWJsZSB8fCB0YXJnZXRlZE92ZXJsYXkpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsKG1vZGFsLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChfaGFzQ2xhc3MkaXNEZXNjZW5kYW50LmlzRGVzY2VuZGFudChtb2RhbCwgdGFyZ2V0KSAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcbiAgICAgICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8qXG4gKiAgVXNlciBjbGlja2VkIG9uIFwiQ29uZmlybVwiL1wiT0tcIlxuICovXG52YXIgaGFuZGxlQ29uZmlybSA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm0obW9kYWwsIHBhcmFtcykge1xuICB2YXIgY2FsbGJhY2tWYWx1ZSA9IHRydWU7XG5cbiAgaWYgKF9oYXNDbGFzcyRpc0Rlc2NlbmRhbnQuaGFzQ2xhc3MobW9kYWwsICdzaG93LWlucHV0JykpIHtcbiAgICBjYWxsYmFja1ZhbHVlID0gbW9kYWwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblxuICAgIGlmICghY2FsbGJhY2tWYWx1ZSkge1xuICAgICAgY2FsbGJhY2tWYWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHBhcmFtcy5kb25lRnVuY3Rpb24oY2FsbGJhY2tWYWx1ZSk7XG5cbiAgaWYgKHBhcmFtcy5jbG9zZU9uQ29uZmlybSkge1xuICAgIHN3ZWV0QWxlcnQuY2xvc2UoKTtcbiAgfVxuICAvLyBEaXNhYmxlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaWYgdGhlIHBhcmFtZXRlciBpcyB0cnVlXG4gIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgIHN3ZWV0QWxlcnQuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgfVxufTtcblxuLypcbiAqICBVc2VyIGNsaWNrZWQgb24gXCJDYW5jZWxcIlxuICovXG52YXIgaGFuZGxlQ2FuY2VsID0gZnVuY3Rpb24gaGFuZGxlQ2FuY2VsKG1vZGFsLCBwYXJhbXMpIHtcbiAgLy8gQ2hlY2sgaWYgY2FsbGJhY2sgZnVuY3Rpb24gZXhwZWN0cyBhIHBhcmFtZXRlciAodG8gdHJhY2sgY2FuY2VsIGFjdGlvbnMpXG4gIHZhciBmdW5jdGlvbkFzU3RyID0gU3RyaW5nKHBhcmFtcy5kb25lRnVuY3Rpb24pLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gIHZhciBmdW5jdGlvbkhhbmRsZXNDYW5jZWwgPSBmdW5jdGlvbkFzU3RyLnN1YnN0cmluZygwLCA5KSA9PT0gJ2Z1bmN0aW9uKCcgJiYgZnVuY3Rpb25Bc1N0ci5zdWJzdHJpbmcoOSwgMTApICE9PSAnKSc7XG5cbiAgaWYgKGZ1bmN0aW9uSGFuZGxlc0NhbmNlbCkge1xuICAgIHBhcmFtcy5kb25lRnVuY3Rpb24oZmFsc2UpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jbG9zZU9uQ2FuY2VsKSB7XG4gICAgc3dlZXRBbGVydC5jbG9zZSgpO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIGhhbmRsZUJ1dHRvbjogaGFuZGxlQnV0dG9uLFxuICBoYW5kbGVDb25maXJtOiBoYW5kbGVDb25maXJtLFxuICBoYW5kbGVDYW5jZWw6IGhhbmRsZUNhbmNlbFxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL2hhbmRsZS1jbGljay5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zdG9wRXZlbnRQcm9wYWdhdGlvbiRmaXJlQ2xpY2sgPSByZXF1aXJlKCcuL2hhbmRsZS1kb20nKTtcblxudmFyIF9zZXRGb2N1c1N0eWxlID0gcmVxdWlyZSgnLi9oYW5kbGUtc3dhbC1kb20nKTtcblxudmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50LCBwYXJhbXMsIG1vZGFsKSB7XG4gIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xuXG4gIHZhciAkb2tCdXR0b24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY29uZmlybScpO1xuICB2YXIgJGNhbmNlbEJ1dHRvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jYW5jZWwnKTtcbiAgdmFyICRtb2RhbEJ1dHRvbnMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bdGFiaW5kZXhdJyk7XG5cbiAgaWYgKFs5LCAxMywgMzIsIDI3XS5pbmRleE9mKGtleUNvZGUpID09PSAtMSkge1xuICAgIC8vIERvbid0IGRvIHdvcmsgb24ga2V5cyB3ZSBkb24ndCBjYXJlIGFib3V0LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciAkdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICB2YXIgYnRuSW5kZXggPSAtMTsgLy8gRmluZCB0aGUgYnV0dG9uIC0gbm90ZSwgdGhpcyBpcyBhIG5vZGVsaXN0LCBub3QgYW4gYXJyYXkuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgJG1vZGFsQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICgkdGFyZ2V0RWxlbWVudCA9PT0gJG1vZGFsQnV0dG9uc1tpXSkge1xuICAgICAgYnRuSW5kZXggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleUNvZGUgPT09IDkpIHtcbiAgICAvLyBUQUJcbiAgICBpZiAoYnRuSW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBObyBidXR0b24gZm9jdXNlZC4gSnVtcCB0byB0aGUgY29uZmlybSBidXR0b24uXG4gICAgICAkdGFyZ2V0RWxlbWVudCA9ICRva0J1dHRvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICBpZiAoYnRuSW5kZXggPT09ICRtb2RhbEJ1dHRvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAkdGFyZ2V0RWxlbWVudCA9ICRtb2RhbEJ1dHRvbnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkdGFyZ2V0RWxlbWVudCA9ICRtb2RhbEJ1dHRvbnNbYnRuSW5kZXggKyAxXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfc3RvcEV2ZW50UHJvcGFnYXRpb24kZmlyZUNsaWNrLnN0b3BFdmVudFByb3BhZ2F0aW9uKGUpO1xuICAgICR0YXJnZXRFbGVtZW50LmZvY3VzKCk7XG5cbiAgICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcikge1xuICAgICAgX3NldEZvY3VzU3R5bGUuc2V0Rm9jdXNTdHlsZSgkdGFyZ2V0RWxlbWVudCwgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChrZXlDb2RlID09PSAxMykge1xuICAgICAgaWYgKCR0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgICAgICRva0J1dHRvbi5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnRuSW5kZXggPT09IC0xKSB7XG4gICAgICAgIC8vIEVOVEVSL1NQQUNFIGNsaWNrZWQgb3V0c2lkZSBvZiBhIGJ1dHRvbi5cbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSAkb2tCdXR0b247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEbyBub3RoaW5nIC0gbGV0IHRoZSBicm93c2VyIGhhbmRsZSBpdC5cbiAgICAgICAgJHRhcmdldEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAyNyAmJiBwYXJhbXMuYWxsb3dFc2NhcGVLZXkgPT09IHRydWUpIHtcbiAgICAgICR0YXJnZXRFbGVtZW50ID0gJGNhbmNlbEJ1dHRvbjtcbiAgICAgIF9zdG9wRXZlbnRQcm9wYWdhdGlvbiRmaXJlQ2xpY2suZmlyZUNsaWNrKCR0YXJnZXRFbGVtZW50LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmFsbGJhY2sgLSBsZXQgdGhlIGJyb3dzZXIgaGFuZGxlIGl0LlxuICAgICAgJHRhcmdldEVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBoYW5kbGVLZXlEb3duO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ib3dlcl9jb21wb25lbnRzL3N3ZWV0YWxlcnQvbGliL21vZHVsZXMvaGFuZGxlLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pc0lFOCA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9nZXRNb2RhbCRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlID0gcmVxdWlyZSgnLi9oYW5kbGUtc3dhbC1kb20nKTtcblxudmFyIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZSA9IHJlcXVpcmUoJy4vaGFuZGxlLWRvbScpO1xuXG52YXIgYWxlcnRUeXBlcyA9IFsnZXJyb3InLCAnd2FybmluZycsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnaW5wdXQnLCAncHJvbXB0J107XG5cbi8qXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBtb2RhbFxuICovXG52YXIgc2V0UGFyYW1ldGVycyA9IGZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIHZhciBtb2RhbCA9IF9nZXRNb2RhbCRnZXRJbnB1dCRzZXRGb2N1c1N0eWxlLmdldE1vZGFsKCk7XG5cbiAgdmFyICR0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XG4gIHZhciAkdGV4dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgdmFyICRjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2FuY2VsJyk7XG4gIHZhciAkY29uZmlybUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jb25maXJtJyk7XG5cbiAgLypcbiAgICogVGl0bGVcbiAgICovXG4gICR0aXRsZS5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50aXRsZSA6IF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5lc2NhcGVIdG1sKHBhcmFtcy50aXRsZSkuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKTtcblxuICAvKlxuICAgKiBUZXh0XG4gICAqL1xuICAkdGV4dC5pbm5lckhUTUwgPSBwYXJhbXMuaHRtbCA/IHBhcmFtcy50ZXh0IDogX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmVzY2FwZUh0bWwocGFyYW1zLnRleHQgfHwgJycpLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+Jyk7XG4gIGlmIChwYXJhbXMudGV4dCkgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLnNob3coJHRleHQpO1xuXG4gIC8qXG4gICAqIEN1c3RvbSBjbGFzc1xuICAgKi9cbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcyhtb2RhbCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLWNsYXNzJywgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGaW5kIHByZXZpb3VzbHkgc2V0IGNsYXNzZXMgYW5kIHJlbW92ZSB0aGVtXG4gICAgdmFyIGN1c3RvbUNsYXNzID0gbW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLWN1c3RvbS1jbGFzcycpO1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5yZW1vdmVDbGFzcyhtb2RhbCwgY3VzdG9tQ2xhc3MpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgnZGF0YS1jdXN0b20tY2xhc3MnLCAnJyk7XG4gIH1cblxuICAvKlxuICAgKiBJY29uXG4gICAqL1xuICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZShtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2EtaWNvbicpKTtcblxuICBpZiAocGFyYW1zLnR5cGUgJiYgIV9pc0lFOC5pc0lFOCgpKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgdmFsaWRUeXBlID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxlcnRUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09IGFsZXJ0VHlwZXNbaV0pIHtcbiAgICAgICAgICB2YWxpZFR5cGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICAgIGxvZ1N0cignVW5rbm93biBhbGVydCB0eXBlOiAnICsgcGFyYW1zLnR5cGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHY6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlc1dpdGhJY29ucyA9IFsnc3VjY2VzcycsICdlcnJvcicsICd3YXJuaW5nJywgJ2luZm8nXTtcbiAgICAgIHZhciAkaWNvbiA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVzV2l0aEljb25zLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgICAgICAkaWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLicgKyAnc2EtJyArIHBhcmFtcy50eXBlKTtcbiAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLnNob3coJGljb24pO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGlucHV0ID0gX2dldE1vZGFsJGdldElucHV0JHNldEZvY3VzU3R5bGUuZ2V0SW5wdXQoKTtcblxuICAgICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgICBzd2l0Y2ggKHBhcmFtcy50eXBlKSB7XG5cbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLCAnYW5pbWF0ZScpO1xuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtdGlwJyksICdhbmltYXRlU3VjY2Vzc1RpcCcpO1xuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbi5xdWVyeVNlbGVjdG9yKCcuc2EtbG9uZycpLCAnYW5pbWF0ZVN1Y2Nlc3NMb25nJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5hZGRDbGFzcygkaWNvbiwgJ2FuaW1hdGVFcnJvckljb24nKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLXgtbWFyaycpLCAnYW5pbWF0ZVhNYXJrJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLCAncHVsc2VXYXJuaW5nJyk7XG4gICAgICAgICAgX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmFkZENsYXNzKCRpY29uLnF1ZXJ5U2VsZWN0b3IoJy5zYS1ib2R5JyksICdwdWxzZVdhcm5pbmdJbnMnKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MoJGljb24ucXVlcnlTZWxlY3RvcignLnNhLWRvdCcpLCAncHVsc2VXYXJuaW5nSW5zJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICBjYXNlICdwcm9tcHQnOlxuICAgICAgICAgICRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBwYXJhbXMuaW5wdXRUeXBlKTtcbiAgICAgICAgICAkaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgICAgICAgICAkaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuYWRkQ2xhc3MobW9kYWwsICdzaG93LWlucHV0Jyk7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHN3YWwucmVzZXRJbnB1dEVycm9yKTtcbiAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBpZiAodHlwZW9mIF9yZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gX3JldC52O1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEN1c3RvbSBpbWFnZVxuICAgKi9cbiAgaWYgKHBhcmFtcy5pbWFnZVVybCkge1xuICAgIHZhciAkY3VzdG9tSWNvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5zYS1pY29uLnNhLWN1c3RvbScpO1xuXG4gICAgJGN1c3RvbUljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgcGFyYW1zLmltYWdlVXJsICsgJyknO1xuICAgIF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5zaG93KCRjdXN0b21JY29uKTtcblxuICAgIHZhciBfaW1nV2lkdGggPSA4MDtcbiAgICB2YXIgX2ltZ0hlaWdodCA9IDgwO1xuXG4gICAgaWYgKHBhcmFtcy5pbWFnZVNpemUpIHtcbiAgICAgIHZhciBkaW1lbnNpb25zID0gcGFyYW1zLmltYWdlU2l6ZS50b1N0cmluZygpLnNwbGl0KCd4Jyk7XG4gICAgICB2YXIgaW1nV2lkdGggPSBkaW1lbnNpb25zWzBdO1xuICAgICAgdmFyIGltZ0hlaWdodCA9IGRpbWVuc2lvbnNbMV07XG5cbiAgICAgIGlmICghaW1nV2lkdGggfHwgIWltZ0hlaWdodCkge1xuICAgICAgICBsb2dTdHIoJ1BhcmFtZXRlciBpbWFnZVNpemUgZXhwZWN0cyB2YWx1ZSB3aXRoIGZvcm1hdCBXSURUSHhIRUlHSFQsIGdvdCAnICsgcGFyYW1zLmltYWdlU2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaW1nV2lkdGggPSBpbWdXaWR0aDtcbiAgICAgICAgX2ltZ0hlaWdodCA9IGltZ0hlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkY3VzdG9tSWNvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJGN1c3RvbUljb24uZ2V0QXR0cmlidXRlKCdzdHlsZScpICsgJ3dpZHRoOicgKyBfaW1nV2lkdGggKyAncHg7IGhlaWdodDonICsgX2ltZ0hlaWdodCArICdweCcpO1xuICB9XG5cbiAgLypcbiAgICogU2hvdyBjYW5jZWwgYnV0dG9uP1xuICAgKi9cbiAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy1jYW5jZWwtYnV0dG9uJywgcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pO1xuICBpZiAocGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICAkY2FuY2VsQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZSgkY2FuY2VsQnRuKTtcbiAgfVxuXG4gIC8qXG4gICAqIFNob3cgY29uZmlybSBidXR0b24/XG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWNvbmZpcm0tYnV0dG9uJywgcGFyYW1zLnNob3dDb25maXJtQnV0dG9uKTtcbiAgaWYgKHBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbikge1xuICAgICRjb25maXJtQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBfaGFzQ2xhc3MkYWRkQ2xhc3MkcmVtb3ZlQ2xhc3MkZXNjYXBlSHRtbCRfc2hvdyRzaG93JF9oaWRlJGhpZGUuaGlkZSgkY29uZmlybUJ0bik7XG4gIH1cblxuICAvKlxuICAgKiBDdXN0b20gdGV4dCBvbiBjYW5jZWwvY29uZmlybSBidXR0b25zXG4gICAqL1xuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvblRleHQpIHtcbiAgICAkY2FuY2VsQnRuLmlubmVySFRNTCA9IF9oYXNDbGFzcyRhZGRDbGFzcyRyZW1vdmVDbGFzcyRlc2NhcGVIdG1sJF9zaG93JHNob3ckX2hpZGUkaGlkZS5lc2NhcGVIdG1sKHBhcmFtcy5jYW5jZWxCdXR0b25UZXh0KTtcbiAgfVxuICBpZiAocGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0KSB7XG4gICAgJGNvbmZpcm1CdG4uaW5uZXJIVE1MID0gX2hhc0NsYXNzJGFkZENsYXNzJHJlbW92ZUNsYXNzJGVzY2FwZUh0bWwkX3Nob3ckc2hvdyRfaGlkZSRoaWRlLmVzY2FwZUh0bWwocGFyYW1zLmNvbmZpcm1CdXR0b25UZXh0KTtcbiAgfVxuXG4gIC8qXG4gICAqIEN1c3RvbSBjb2xvciBvbiBjb25maXJtIGJ1dHRvblxuICAgKi9cbiAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAvLyBTZXQgY29uZmlybSBidXR0b24gdG8gc2VsZWN0ZWQgYmFja2dyb3VuZCBjb2xvclxuICAgICRjb25maXJtQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG5cbiAgICAvLyBTZXQgdGhlIGNvbmZpcm0gYnV0dG9uIGNvbG9yIHRvIHRoZSBsb2FkaW5nIHJpbmdcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBwYXJhbXMuY29uZmlybUxvYWRpbmdCdXR0b25Db2xvcjtcbiAgICAkY29uZmlybUJ0bi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gcGFyYW1zLmNvbmZpcm1Mb2FkaW5nQnV0dG9uQ29sb3I7XG5cbiAgICAvLyBTZXQgYm94LXNoYWRvdyB0byBkZWZhdWx0IGZvY3VzZWQgYnV0dG9uXG4gICAgX2dldE1vZGFsJGdldElucHV0JHNldEZvY3VzU3R5bGUuc2V0Rm9jdXNTdHlsZSgkY29uZmlybUJ0biwgcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcik7XG4gIH1cblxuICAvKlxuICAgKiBBbGxvdyBvdXRzaWRlIGNsaWNrXG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsb3ctb3V0c2lkZS1jbGljaycsIHBhcmFtcy5hbGxvd091dHNpZGVDbGljayk7XG5cbiAgLypcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb25cbiAgICovXG4gIHZhciBoYXNEb25lRnVuY3Rpb24gPSBwYXJhbXMuZG9uZUZ1bmN0aW9uID8gdHJ1ZSA6IGZhbHNlO1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLWRvbmUtZnVuY3Rpb24nLCBoYXNEb25lRnVuY3Rpb24pO1xuXG4gIC8qXG4gICAqIEFuaW1hdGlvblxuICAgKi9cbiAgaWYgKCFwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsICdub25lJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcy5hbmltYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsIHBhcmFtcy5hbmltYXRpb24pOyAvLyBDdXN0b20gYW5pbWF0aW9uXG4gIH0gZWxzZSB7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGlvbicsICdwb3AnKTtcbiAgfVxuXG4gIC8qXG4gICAqIFRpbWVyXG4gICAqL1xuICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXInLCBwYXJhbXMudGltZXIpO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc2V0UGFyYW1ldGVycztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYm93ZXJfY29tcG9uZW50cy9zd2VldGFsZXJ0L2xpYi9tb2R1bGVzL3NldC1wYXJhbXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9ub3RpY2UuaHRtbCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi91dGlscyc7XG5cbmNsYXNzIG5vdGljZUN0cmwge1xuICAgIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIFsndXNlclNlcnZpY2UnXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih1c2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnNlcnZpY2VzID0geyB1c2VyU2VydmljZSB9O1xuICAgICAgICB0aGlzLnVzZSA9IHt9O1xuICAgICAgICB0aGlzLnZpb2xhdGlvbiA9IHt9O1xuICAgICAgICB0aGlzLnJlbmRlclZpb2xhdGlvbigpLnJlbmRlclJlY29yZHMoKTtcbiAgICB9XG5cbiAgICBzaG93RGV0YWlsKCkge1xuICAgICAgICB0aGlzLnZpb2xhdGlvbi5kZXRhaWwgPSAhdGhpcy52aW9sYXRpb24uZGV0YWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXJWaW9sYXRpb24oKSB7XG4gICAgICAgIHZhciB7IHVzZXJTZXJ2aWNlIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICB1c2VyU2VydmljZS52aW9sYXRpb24oKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpb2xhdGlvbi5kaXNwbGF5ID0gZC5kYXRhLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aW9sYXRpb24udGltZXMgPSBkLmRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZpb2xhdGlvbuOAgCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGQuZGF0YSwgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmlvbGF0aW9uID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Zpb2xhdGlvbi5jcmVhdGVUaW1lID0gdmFsdWUuY3JlYXRlVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUucmVhc29uID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Zpb2xhdGlvbi5yZWFzb24gPSAn6Zet6aaG5pyq5q2j5bi456a75byAJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnJlYXNvbiA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92aW9sYXRpb24ucmVhc29uID0gJ+aaguemu+i2heaXtic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5yZWFzb24gPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmlvbGF0aW9uLnJlYXNvbiA9ICfpooTnuqblj5bmtognO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aW9sYXRpb24ucHVzaChfdmlvbGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlvbGF0aW9uLnJlY29yZHMgPSB2aW9sYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25FcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZW5kZXJSZWNvcmRzKCkge1xuICAgICAgICB2YXIgeyB1c2VyU2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgdXNlclNlcnZpY2Uubm90ZSgpXG4gICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGQuZGF0YSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfcmVjb3JkID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBfcmVjb3JkLmNyZWF0ZVRpbWUgPSB2YWx1ZS5jcmVhdGVUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXRlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVjb3JkLmNsYXNzID0gJ3dhcm4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWNvcmQuY3RudCA9ICfnprvluqcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5zdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlY29yZC5jbGFzcyA9ICd3YXJuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVjb3JkLmN0bnQgPSAn5YWl5bqnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuc3RhdGUgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWNvcmQuY2xhc3MgPSAnd2Fybic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlY29yZC5jdG50ID0gJ+aaguemuyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnN0YXRlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVjb3JkLmNsYXNzID0gJ3dhcm4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWNvcmQuY3RudCA9ICfpooTnuqYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5zdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlY29yZC5jbGFzcyA9ICd3YXJuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVjb3JkLmN0bnQgPSAn5Y+W5raIJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZC5wdXNoKF9yZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZS5yZWNvcmRzID0gcmVjb3JkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZSA9PiB7XG4gICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVVbmtub3dFcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZVVybDogJy9hcHAvbm90aWNlL25vdGljZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiBub3RpY2VDdHJsLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMC42QG5nLWFubm90YXRlLWxvYWRlci9sb2FkZXIuanM/YWRkPXRydWUhLi9+Ly4xLjYuM0Blc2xpbnQtbG9hZGVyIS4vYXBwL25vdGljZS9ub3RpY2UuanMiLCJ2YXIgcGF0aCA9ICcvYXBwL25vdGljZS9ub3RpY2UuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibmF2X3RpdGxlXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uL2ltYWdlL2JhY2syLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIiNcXFwiIG9uY2xpY2s9XFxcIndpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJ1xcXCI+XFxuICAgIDxwPuaIkeeahOWFrOWRijwvcD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ3aGl0ZV9iZ2MgaXRlbV9zaGFvdyBib3JkZXJfcmFkdWlzIGxpc3RfaXRlbSBub3RpY2VfdGl0bGVcXFwiIGlkPVxcXCJub3RpY2VfdGl0bGVcXFwiIG5nLXNob3c9XFxcInZtLnZpb2xhdGlvbi5kaXNwbGF5XFxcIiBuZy1jbGljaz1cXFwidm0uc2hvd0RldGFpbCgpXFxcIj5cXG4gICAgPHAgY2xhc3M9XFxcIndhcm4gd2Fybl90aXRsZVxcXCI+5oKo5bey6L+d6KeEe3t2bS52aW9sYXRpb24udGltZXN9feasoTwvcD5cXG4gICAgPHAgY2xhc3M9XFxcImdyYXlcXFwiPui/neinhDPmrKHlsIblnKgy5pif5pyf5YaF5peg5rOV6aKE57qmPC9wPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydEJveFxcXCIgaWQ9XFxcImFsZXJ0Qm94XFxcIiBuZy1zaG93PVxcXCJ2bS52aW9sYXRpb24uZGV0YWlsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbFxcXCIgbmctcmVwZWF0PVxcXCJyZWNvcmQgaW4gdm0udmlvbGF0aW9uLnJlY29yZHNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbF9fYmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwid2FyblxcXCI+e3tyZWNvcmQucmVhc29ufX08L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2V1aS1jZWxsX19mdFxcXCI+e3tyZWNvcmQuY3JlYXRlVGltZSB8IGRhdGU6J3l5eXktTU0tZGQgSEg6bW0nfX08L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ3aGl0ZV9iZ2MgaXRlbV9zaGFvdyBib3JkZXJfcmFkdWlzIGxpc3RfaXRlbSBub3RpY2VfY3RudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbCBcXFwiIG5nLXJlcGVhdD1cXFwicmVjb3JkIGluIHZtLnVzZS5yZWNvcmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbF9fYmRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ7e3JlY29yZC5jbGFzc319XFxcIj57e3JlY29yZC5jdG50fX08L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndldWktY2VsbF9fZnRcXFwiPnt7cmVjb3JkLmNyZWF0ZVRpbWUgfCBkYXRlOid5eXl5LU1NLWRkIEhIOm1tJ319PC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvbm90aWNlL25vdGljZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FNQUFBQ2FobDZzQUFBQVMxQk1WRVVBQUFELy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rRG1Rc0hBQUFBR0hSU1RsTUFFQ0F3UUZCZllIQi9nSStRbjZDd3Y4RFAwTi9nNy9EbkU0TFdBQUFCelVsRVFWUjQydTJkVzVLQ1FCQUVoNWV6c29pS0FuMy9rKzZQWWwvQWphNk96QnRraEdUSktGb0tBQUFBQUFBQUFBQUFBQUFBQUVBd210UDUxQ1R3cUp1WlBUdDVqN09abWRsVDNlTmlMNFlrSGpaS1grYkw0V0UxaWNmZTZucDB6a1A1RXVrMlMvSEM2cDNITHJ3aTFmSjVQSVE5ZnIySDhQdXNpL080NjNvMDNtUE9NWU5wUEg2WXdVZ2V1N0RId0p6SG5mTWtNNWpGNHlvODV6Zm1QQkx0a204RzA4eDVMendmQ2VkOEZmWTRNK2RoUFdiaE9jOTRWeXY4c1VISG5JZUNRK3JBZDdVY1VvZWFRUTZwbWZOdmVIQklIZXV1VnZpemN3NnBBODg1ZDdXaFBEaWtqaldEazY0SGg5UnhYMWZLaDlUbGxtTUcvUTZ1MGwrb2ZxYVl3Vks2SkI1bE91YThhSE4vWHg5TkVwRzVJQktENjB0a1UzOXBqZStMZlJFMytlUjNFWCsrYUQxTU5tMlQvdk1XWmFzcExuZjFCM05LODNBbWx6d21UUllUN1F6UDNrUTZYcE16MGM2d1B6RFZ6dkN3Wjhsd3QyZkpjRXVHeVRBWkpzTmttQXlUWVRKTWhza3dHU2JEWkpnTWsyRXlUSWJKTUJrbXcyU1lESk5oTWt5R3lUQVpKc05rbUF5VDRmL0lzUFJ2ZS9zTWI2MnlpYyt3OXJjaFhZYWxmMjdkWjFqOEIvQ1BESzlGbnJyTFA5UDB2bERxV0RQOGJRY0FBQUFBQUFBQUFBQUFBQUFBeE9FUFRyMkxtOTg3SkVRQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2ltYWdlL2JhY2syLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuL2hlbHAuaHRtbCc7XG5cbmNsYXNzIGhlbHBDdHJsIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGVVcmw6ICcvYXBwL2hlbHAvaGVscC5odG1sJyxcbiAgICBjb250cm9sbGVyOiBoZWxwQ3RybCxcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjAuNkBuZy1hbm5vdGF0ZS1sb2FkZXIvbG9hZGVyLmpzP2FkZD10cnVlIS4vfi8uMS42LjNAZXNsaW50LWxvYWRlciEuL2FwcC9oZWxwL2hlbHAuanMiLCJ2YXIgcGF0aCA9ICcvYXBwL2hlbHAvaGVscC5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJuYXZfdGl0bGVcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2UvYmFjazIucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiI1xcXCIgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy8nXFxcIj5cXG4gICAgPHA+5biu5YqpPC9wPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcIndoaXRlX2JnYyBpdGVtX3NoYW93IGJvcmRlcl9yYWR1aXMgbGlzdF9pdGVtIGhlbHBfYm94XFxcIj5cXG4gICAgPGgzPuS9v+eUqOaWueazlTwvaDM+XFxuICAgIDxwPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO+WNl+S6rOS/oeaBr+W3peeoi+Wkp+WtpuWkmueBq+W3peS9nOWupOOAgiDnvZHnq5nliLbkvZzvvIznp7vliqjlvIDlj5HvvIzop4bop4norr7orqHvvIzlrabmnK/nq57otZvjgILluIzmnJvlnKjljZfkv6HlpKflu7rnq4vkuIDkuKpJVOeahOWtpuS5oOS6pOa1geW5s+WPsOOAguWkmueBq+W3peS9nOWupO+8muWkp+a0uzIwMeOAguWNl+S6rOS/oeaBr+W3peeoi+Wkp+WtpuWkmueBq+W3peS9nOWupOOAgiDnvZHnq5nliLbkvZzvvIznp7vliqjlvIDlj5HvvIzop4bop4norr7orqHvvIzlrabmnK/nq57otZvjgILluIzmnJvlnKjljZfkv6HlpKflu7rnq4vkuIDkuKpJVOeahOWtpuS5oOS6pOa1geW5s+WPsOOAguWkmueBq+W3peS9nOWupO+8muWkp+a0uzIwMeOAguWNl+S6rOS/oeaBr+W3peeoi+Wkp+WtpuWkmueBq+W3peS9nOWupOOAgiDnvZHnq5nliLbkvZzvvIznp7vliqjlvIDlj5HvvIzop4bop4norr7orqHvvIzlrabmnK/nq57otZvjgILluIzmnJvlnKjljZfkv6HlpKflu7rnq4vkuIDkuKpJVOeahOWtpuS5oOS6pOa1geW5s+WPsOOAguWkmueBq+W3peS9nOWupO+8muWkp+a0uzIwMeOAgjwvcD5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2hlbHAvaGVscC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vbXlJbmZvLmh0bWwnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbHMnO1xuXG5jbGFzcyBteUluZm9DdHJsIHtcbiAgICBzdGF0aWMgZ2V0ICRpbmplY3QoKSB7XG4gICAgICAgIHJldHVybiBbJ3VzZXJTZXJ2aWNlJywgJyRjb29raWVzJ107XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlLCAkY29va2llcykge1xuICAgICAgICB0aGlzLnNlcnZpY2VzID0geyB1c2VyU2VydmljZSwgJGNvb2tpZXMgfTtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgdGltZTogJzBoJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0SW5mbygpO1xuICAgIH1cblxuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHZhciB7IHVzZXJTZXJ2aWNlIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICB1c2VyU2VydmljZS5pbmZvKClcbiAgICAgICAgICAgIC5zdWNjZXNzKGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnZShkLmRhdGEpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkVycm9yKGQuZGF0YS5zdGF0ZUluZm8pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX2xvZ291dCgpIHtcbiAgICAgICAgdmFyIHsgdXNlclNlcnZpY2UsICRjb29raWVzIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICB1c2VyU2VydmljZS5sb2dvdXQoKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGNvb2tpZXMuZ2V0QWxsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjb29raWVzLnJlbW92ZSgndXNlcklkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkNvbmZpcm0oJ+mAgOWHuueZu+W9leaIkOWKn+OAgicsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uRXJyb3IoZC5kYXRhLnN0YXRlSW5mbyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmVycm9yKGUgPT4ge1xuICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlVW5rbm93RXJyb3IoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGFsZXJ0KCdzdWNjZXNzJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGFnZShkYXRhKSB7XG4gICAgICAgIHRoaXMudXNlci5uYW1lID0gZGF0YS51c2VyLm5hbWU7XG4gICAgICAgIHRoaXMudXNlci50aW1lID0gZGF0YS51c2VyLnN0dWR5VGltZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZVVybDogJy9hcHAvbXlJbmZvL215SW5mby5odG1sJyxcbiAgICBjb250cm9sbGVyOiBteUluZm9DdHJsLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMC42QG5nLWFubm90YXRlLWxvYWRlci9sb2FkZXIuanM/YWRkPXRydWUhLi9+Ly4xLjYuM0Blc2xpbnQtbG9hZGVyIS4vYXBwL215SW5mby9teUluZm8uanMiLCJ2YXIgcGF0aCA9ICcvYXBwL215SW5mby9teUluZm8uaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibmF2X3RpdGxlXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uL2ltYWdlL2JhY2syLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIiNcXFwiIG9uY2xpY2s9XFxcIndpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJ1xcXCI+XFxuICAgIDxwPuaIkeeahDwvcD5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJ3aGl0ZV9iZ2MgaXRlbV9zaGFvdyBib3JkZXJfcmFkdWlzIGxpc3RfaXRlbSBtZV9ib3hcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhdmF0YXJfYm94XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcIm1lX2F2YXRhclxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi9pbWFnZS9hdmF0YXIuanBnXCIpICsgXCJcXFwiPjwvaW1nPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXZhdGFyX3RleHRcXFwiIG5nLWJpbmQ9XFxcInZtLnVzZXIubmFtZVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImF2YXRhcl90ZXh0IGdyYXlcXFwiPuW3suWtpuS5oOaXtumVv++8mjxzcGFuIG5nLWJpbmQ9XFxcInZtLnVzZXIudGltZSB8IGR1cmF0aW9uXFxcIj48L3NwYW4+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFwcGx5XFxcIiBuZy1jbGljaz1cXFwidm0ubG9nb3V0KClcXFwiPlxcbiAgICAgICAg6YCA5Ye655m75b2VXFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvbXlJbmZvL215SW5mby5odG1sXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4vc2VsZWN0Lmh0bWwnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbHMnO1xuXG5jbGFzcyBzZWxlY3RDdHJsIHtcbiAgICBzdGF0aWMgZ2V0ICRpbmplY3QoKSB7XG4gICAgICAgIHJldHVybiBbJ3Jvb21TZXJ2aWNlJywgJ3NlYXRTZXJ2aWNlJywgJyR3aW5kb3cnXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihyb29tU2VydmljZSwgc2VhdFNlcnZpY2UsICR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5jaG9vc2VTZWF0O1xuICAgICAgICB0aGlzLnNlcnZpY2VzID0geyByb29tU2VydmljZSwgc2VhdFNlcnZpY2UsICR3aW5kb3cgfTtcbiAgICAgICAgdGhpcy5kZXNrcyA9IFtdO1xuICAgICAgICB0aGlzLnJvb21JZDtcbiAgICAgICAgdGhpcy5yZW5kZXJEZXNrKCk7XG4gICAgfVxuXG4gICAgcGlja2VyKCkge1xuICAgICAgICB2YXIgeyAkd2luZG93IH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICAkd2luZG93LndldWkucGlja2VyKFt7XG4gICAgICAgICAgICBsYWJlbDogJzFzdOalvOWxgicsXG4gICAgICAgICAgICB2YWx1ZTogJ+S4gOalvOeahGlkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+aVmeWupO+8kScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAn5pWZ5a6k77yR55qEaWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3gyJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd4MicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAneDMnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJzJuZOalvOWxgicsXG4gICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3gxJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd4MScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAneDInLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICd4MycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAneDMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnM3Jk5qW85bGCJyxcbiAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAneDEnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICd4MicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAneDInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3gzJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd4MycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICc0dGjmpbzlsYIgKGRpc2FibGVkKScsXG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiAzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAneDEnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gxJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICd4MicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAneDInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3gzJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd4MycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICc1dGjmpbzlsYInLFxuICAgICAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICd4MScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAneDEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3gyJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd4MicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAneDMnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9XSwge1xuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db25maXJtOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93UGlja2VyVGV4dCcpLmlubmVyVGV4dCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hvb3NlUm9vbSgpIHtcblxuICAgICAgICAvL+aLv+WIsOaIv+mXtOeahElk5bm26LWL5YC857uZIHRoaXMucm9vbUlkXG5cbiAgICB9XG5cbiAgICByZW5kZXJEZXNrKCkge1xuICAgICAgICB2YXIgeyByb29tU2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgcm9vbVNlcnZpY2UuZGVza0RldGFpbCgxMDAwKVxuICAgICAgICAgICAgLnN1Y2Nlc3MoZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGQuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkZXNrIG9mIGQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9kZXNrID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBfZGVzay5jZWxscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9sZWZ0ID0gKGRlc2sueSAtIDEpICogNjAgKyAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdG9wID0gKGRlc2sueCAtIDEpICogNTAgKyAxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZXNrLnBvc2l0aW9uID0gYGxlZnQ6JHtfbGVmdH1weDt0b3A6JHtfdG9wfXB4O2A7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzZWF0IG9mIGRlc2suc2VhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3NlYXQgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc2VhdC5zdGF0ZSA9IHNlYXQuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3NlYXQuaWQgPSBzZWF0LnNlYXRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGVzay5jZWxscy5wdXNoKF9zZWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza3MucHVzaChfZGVzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25FcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaG9vc2UoaSwgaikge1xuICAgICAgICBpZiAoIXRoaXMuZGVza3NbaV0uY2VsbHNbal0uc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVza3NbaV0uY2VsbHNbal0uc3RhdGUgPSA0O1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hvb3NlU2VhdCkge1xuICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gdGhpcy5jaG9vc2VTZWF0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGVza3NbbGFzdFswXV0uY2VsbHNbbGFzdFsxXV0uc3RhdGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaG9vc2VTZWF0ID0gW2ksIGpdO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGVza3NbaV0uY2VsbHNbal0uc3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5kZXNrc1tpXS5jZWxsc1tqXS5zdGF0ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNob29zZVNlYXQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdWJtaXRTZWF0KCkge1xuICAgICAgICB2YXIgeyBzZWF0U2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgaWYgKHRoaXMuY2hvb3NlU2VhdCkge1xuICAgICAgICAgICAgbGV0IHNlYXQgPSB0aGlzLmNob29zZVNlYXQ7XG4gICAgICAgICAgICBzZWF0U2VydmljZS5vcmRlcih0aGlzLmRlc2tzW3NlYXRbMF1dLmNlbGxzW3NlYXRbMV1dLmlkKVxuICAgICAgICAgICAgICAgIC5zdWNjZXNzKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25Db25maXJtKCfpooTnuqbmiJDlip/vvIzlv6vngrnmnaXlkKfvvIEnLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVDb21tb25FcnJvcigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmVycm9yKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uV2FybmluZygn5L2g6L+Y5rKh5pyJ6YCJ5oup5bqn5L2N44CCJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZW1wbGF0ZVVybDogJy9hcHAvc2VsZWN0L3NlbGVjdC5odG1sJyxcbiAgICBjb250cm9sbGVyOiBzZWxlY3RDdHJsLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vLjAuMC42QG5nLWFubm90YXRlLWxvYWRlci9sb2FkZXIuanM/YWRkPXRydWUhLi9+Ly4xLjYuM0Blc2xpbnQtbG9hZGVyIS4vYXBwL3NlbGVjdC9zZWxlY3QuanMiLCJ2YXIgcGF0aCA9ICcvYXBwL3NlbGVjdC9zZWxlY3QuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibmF2X3RpdGxlIHNlbGVjdF9uYXZcXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vaW1hZ2UvYmFjazIucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiI1xcXCIgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy8nXFxcIj5cXG4gICAgPHA+57q/5LiK6aKE57qmPC9wPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImNob29zZVJvb21cXFwiPlxcbiAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OjtcXFwiIGNsYXNzPVxcXCJ3ZXVpLWNlbGwgd2V1aS1jZWxsX2FjY2VzcyBqc19pdGVtIHdoaXRlX2JnYyBpdGVtX3NoYW93IGJvcmRlcl9yYWR1aXMgbGlzdF9pdGVtIGN0bnQtY2VsbCB0b3BfYm9yZGVyX25vbmVcXFwiIG5nLWNsaWNrPVxcXCJ2bS5waWNrZXIoKVxcXCI+PHNwYW4gaWQ9XFxcInNob3dQaWNrZXJUZXh0XFxcIj7lt7LpgInmi6nvvJrkuIDmpbzlrp7pqozmlZnlrqQ8L3NwYW4+PC9hPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcInRpcHMtd3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9J3RpcCc+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VhdFxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0XFxcIj4g5Y+v6YCJPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz0ndGlwJz5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWF0IGFjdGl2ZVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0XFxcIj4g5bey6YCJPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz0ndGlwJz5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWF0IHRha2VuXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRleHRcXFwiPiDmraPlnKjkvb/nlKg8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPSd0aXAnPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNlYXQgYXdheVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0ZXh0XFxcIj4g5pqC56a7PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz0ndGlwJz5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzZWF0IGJvb2tpbmdcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidGV4dFxcXCI+IOmihOWNoOS4rTwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiY2FudmFzLXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYW52YXNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzayBncmlkXFxcIiBuZy1yZXBlYXQ9XFxcInRhYmxlIGluIHZtLmRlc2tzXFxcIiBzdHlsZT1cXFwie3t0YWJsZS5wb3NpdGlvbn19XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBuZy1yZXBlYXQ9XFxcInNlYXQgaW4gdGFibGUuY2VsbHNcXFwiIGNsYXNzPVxcXCJzZWF0IHt7JGluZGV4IHwgY2VsbFBvc2l0aW9ufX0ge3tzZWF0LnN0YXRlIHwgY2VsbFN0YXRlfX1cXFwiIG5nLWNsaWNrPVxcXCJ2bS5jaG9vc2UoJHBhcmVudC4kaW5kZXgsJGluZGV4KVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcInN1Ym1pdFNlYXRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWJtaXRDdG50XFxcIj5cXG4gICAgICAgIDxwPuaCqOW3sumAieaLqeS6huS4gOalvOWunumqjOaVmeWupO+8lu+8luWPt+W6p+S9jTwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInN1Ym1pdEJ0blxcXCIgbmctY2xpY2s9XFxcInZtLnN1Ym1pdFNlYXQoKVxcXCI+56Gu6K6k6YCJ5bqnPC9kaXY+XFxuPC9kaXY+XCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zZWxlY3Qvc2VsZWN0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9zY2FuLmh0bWwnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbHMnO1xuXG5jbGFzcyBzY2FuQ3RybCB7XG4gICAgc3RhdGljIGdldCAkaW5qZWN0KCkge1xuICAgICAgICByZXR1cm4gWyd1c2VyU2VydmljZScsICdzZWF0U2VydmljZScsICckbG9jYXRpb24nXTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodXNlclNlcnZpY2UsIHNlYXRTZXJ2aWNlLCAkbG9jYXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHsgdXNlclNlcnZpY2UsIHNlYXRTZXJ2aWNlLCAkbG9jYXRpb24gfTtcbiAgICAgICAgdGhpcy5zZWF0ID0ge307XG4gICAgICAgIHRoaXMudXNlciA9IHt9O1xuICAgICAgICB0aGlzLmdldEluZm8oKTtcbiAgICB9XG5cbiAgICBzZXRkYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIHsgJGxvY2F0aW9uIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICBsZXQgbG9jYWwgPSAkbG9jYXRpb24uc2VhcmNoKCk7XG4gICAgICAgIHRoaXMuc2VhdC5sb2NhbCA9IGxvY2FsLnNlYXRJZDtcbiAgICAgICAgdGhpcy51c2VyLnN0YXRlID0gZGF0YS51c2VyLnN0YXRlO1xuICAgICAgICBpZiAoZGF0YS51c2VyLnN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXQudXNlciA9IGRhdGEuc2VhdC5zZWF0SWQ7XG4gICAgICAgICAgICB0aGlzLnNlYXQuc3RhdGUgPSBkYXRhLnNlYXQuc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VhdCgpO1xuICAgIH1cblxuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHZhciB7IHVzZXJTZXJ2aWNlIH0gPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICB1c2VyU2VydmljZS5pbmZvKClcbiAgICAgICAgICAgIC5zdWNjZXNzKGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0ZGF0YShkLmRhdGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAvLyBVdGlsLmhhbmRsZUNvbW1vbkVycm9yKGQuZGF0YS5zdGF0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoYW5kbGVTZWF0KCkge1xuICAgICAgICB2YXIgeyBzZWF0U2VydmljZSB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgbGV0IF91c2VyID0gdGhpcy51c2VyLnN0YXRlO1xuICAgICAgICBsZXQgX2xvY2FsID0gdGhpcy5zZWF0LmxvY2FsO1xuICAgICAgICBpZiAoX3VzZXIpIHtcbiAgICAgICAgICAgIGxldCBfc3RhdGUgPSB0aGlzLnNlYXQuc3RhdGU7XG4gICAgICAgICAgICBsZXQgX3NlYXQgPSB0aGlzLnNlYXQudXNlcjtcbiAgICAgICAgICAgIC8v6aKE57qm5bCx5bqnXG4gICAgICAgICAgICBpZiAoX3N0YXRlID09IDMpIHtcbiAgICAgICAgICAgICAgICAvL+mihOe6puW6p+S9jeS4juaJq+eggeW6p+S9jeebuOWQjFxuICAgICAgICAgICAgICAgIGlmIChfbG9jYWwgPT0gX3NlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhdFNlcnZpY2UudXNlKF9sb2NhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uQ29uZmlybSgn5qyi6L+O5YWl5bqn44CCJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkVycm9yKGQuZGF0YS5zdGF0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIC8v6aKE57qm5bqn5L2N5LiO5omr56CB5bqn5L2N5LiN5ZCMXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uQ29uZmlybSgn5YWl5bqn5aSx6LSl77yM6aKE5a6a5bqn5L2N5LiO5omr56CB5bqn5L2N5LiN5ZCM44CCJywgMCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX3N0YXRlID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL+emu+W6p+WQjuWFpeW6p1xuICAgICAgICAgICAgICAgIGlmIChfbG9jYWwgPT0gX3NlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/nprvluqfluqfkvY3kuI7miavnoIHluqfkvY3nm7jlkIxcbiAgICAgICAgICAgICAgICAgICAgc2VhdFNlcnZpY2UudXNlKF9sb2NhbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWNjZXNzKGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uQ29uZmlybSgn5qyi6L+O5Zue5p2l77yM5Yqg5rK55a2m5Lmg5ZCn44CCJywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZUNvbW1vbkVycm9yKGQuZGF0YS5zdGF0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcnJvcihlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVdGlsLmhhbmRsZVVua25vd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIC8v56a75bqn5bqn5L2N5LiO5omr56CB5bqn5L2N5LiN5ZCMXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uQ29uZmlybSgn5omr56CB5aSx6LSl77yM6K+35Zue5Yiw5q2j56Gu5bqn5L2N5omr56CB44CCJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWF0U2VydmljZS5ob2xkKF9sb2NhbClcbiAgICAgICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuc3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uQ29uZmlybSgn5qyi6L+O5YWl5bqn44CCJywgMCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uRXJyb3IoZC5kYXRhLnN0YXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZXJyb3IoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlVW5rbm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVtcGxhdGVVcmw6ICcvYXBwL3NjYW4vc2Nhbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiBzY2FuQ3RybCxcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjAuNkBuZy1hbm5vdGF0ZS1sb2FkZXIvbG9hZGVyLmpzP2FkZD10cnVlIS4vfi8uMS42LjNAZXNsaW50LWxvYWRlciEuL2FwcC9zY2FuL3NjYW4uanMiLCJ2YXIgcGF0aCA9ICcvYXBwL3NjYW4vc2Nhbi5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCI+c2NhbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc2Nhbi9zY2FuLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9sb2dpbi5odG1sJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWxzJztcblxuY2xhc3MgbG9naW5DdHJsIHtcbiAgICBzdGF0aWMgZ2V0ICRpbmplY3QoKSB7XG4gICAgICAgIHJldHVybiBbJ3VzZXJTZXJ2aWNlJywgJyRjb29raWVzJywgJyRsb2NhdGlvbiddO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih1c2VyU2VydmljZSwgJGNvb2tpZXMsICRsb2NhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcyA9IHsgdXNlclNlcnZpY2UsICRjb29raWVzLCAkbG9jYXRpb24gfTtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICog55m75b2VXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZOOAgOWtpuWPtyBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3ZOOAgOWvhueggSBcbiAgICAgICAgICovXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHZhciB7IHVzZXJTZXJ2aWNlLCAkbG9jYXRpb24gfSA9IHRoaXMuc2VydmljZXM7XG4gICAgICAgIGxldCB2YWx1ZSA9ICRsb2NhdGlvbi5zZWFyY2goKTtcbiAgICAgICAgbGV0IGlkID0gdmFsdWUuaWQ7XG4gICAgICAgIGxldCBwYXNzd2QgPSB2YWx1ZS5wYXNzd2Q7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmxvZ2luKGlkLCBwYXNzd2QpXG4gICAgICAgICAgICAuc3VjY2VzcyhkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZC5zdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGNvb2tpZXMoZC5kYXRhKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuaGFuZGxlQ29tbW9uRXJyb3IoZC5kYXRhLnN0YXRlSW5mbyk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXJyb3IoZSA9PiB7XG4gICAgICAgICAgICAgICAgVXRpbC5oYW5kbGVVbmtub3dFcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572uY29va2llc1xuICAgICAqIEBwYXJhbSB7b2JqfSBkYXRh44CAIFxuICAgICAqICAgICAgZGF0YS51c2VySWQ6IOeUqOaIt2lkXG4gICAgICogICAgICBkYXRhLnRva2VuOiB0b2tlblxuICAgICAqL1xuICAgIHNldGNvb2tpZXMoZGF0YSkge1xuICAgICAgICB2YXIgeyAkY29va2llcyB9ID0gdGhpcy5zZXJ2aWNlcztcbiAgICAgICAgaWYgKCRjb29raWVzLmdldEFsbCgpKSB7XG4gICAgICAgICAgICAkY29va2llcy5yZW1vdmUoJ3VzZXJJZCcpO1xuICAgICAgICAgICAgJGNvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBleHBpcmVEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJlRGF0ZS5zZXREYXRlKGV4cGlyZURhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICRjb29raWVzLnB1dCgndXNlcklkJywgZGF0YS51c2VySWQsIHsgJ2V4cGlyZXMnOiBleHBpcmVEYXRlIH0pO1xuICAgICAgICAkY29va2llcy5wdXQoJ3Rva2VuJywgZGF0YS50b2tlbiwgeyAnZXhwaXJlcyc6IGV4cGlyZURhdGUgfSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8jLyc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICBjb250cm9sbGVyOiBsb2dpbkN0cmwsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi8uMC4wLjZAbmctYW5ub3RhdGUtbG9hZGVyL2xvYWRlci5qcz9hZGQ9dHJ1ZSEuL34vLjEuNi4zQGVzbGludC1sb2FkZXIhLi9hcHAvbG9naW4vbG9naW4uanMiLCJ2YXIgcGF0aCA9ICcvYXBwL2xvZ2luL2xvZ2luLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj5sb2dpbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvbG9naW4vbG9naW4uaHRtbFxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jc3MvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiB1c2VyU2VydmljZTpcbiAqICAgICAg55m75b2V77yabG9naW4oaWQscGFzc3dkKeOAgGlkOuWtpuWPtyBwYXNzd2Q65a+G56CBXG4gKiAgICAgIOeZu+WHuu+8mmxvZ291dCgpXG4gKiAgICAgIOS4quS6uuS/oeaBrzogaW5mbygpXG4gKiAgICAgIOi/neinhOiusOW9le+8mnZpb2xhdGlvbigpXG4gKiAgICAgIOS9v+eUqOiusOW9le+8mm5vdGUoKVxuICogc2VhdFNlcnZpY2U6XG4gKiAgICAgIOmihOWumu+8mm9yZGVyKHNlYXRJZCkgIHNlYXRJZDrluqfkvY1pZFxuICogICAgICDlj5bmtojpooTnuqbvvJpjYW5jZWwoc2VhdElkKSAgc2VhdElkOuW6p+S9jWlkXG4gKiAgICAgIOWFpeW6p++8mmhvbGQoc2VhdElkKSAgc2VhdElkOuW6p+S9jWlkXG4gKiAgICAgIOemu+W6p++8mnJlbGVhc2Uoc2VhdElkKSAgc2VhdElkOuW6p+S9jWlkXG4gKiAgICAgIOaaguemu++8mnRlbXAoc2VhdElkKSAgc2VhdElkOuW6p+S9jWlkXG4gKiAgICAgIOi/lOWbni/pooTnuqblhaXluqfvvJp1c2Uoc2VhdElkKSAgc2VhdElkOuW6p+S9jWlkXG4gKiByb29tU2VydmljZTpcbiAqICAgICAg6ZiF6KeI5a6k5YiX6KGo77yacm9vbURldGFpbCgpXG4gKiAgICAgIOahjOWtkOivpuaDhe+8mmRlc2tEZXRhaWwocm9vbUlkKSAgcm9vbUlkOumYheiniOWupGlkXG4gKiAgICAgIOW6p+S9jeivpuaDhe+8mnNlYXREZXRhaWwocm9vbUlkKSAgcm9vbUlkOumYheiniOWupGlkXG4gKi9cblxuXG5cbmFuZ3VsYXIubW9kdWxlKCdkYXRhU2VydmljZScsIFtdLFxuICAgICAgICBbXCIkaHR0cFByb3ZpZGVyXCIsIGZ1bmN0aW9uKCRodHRwUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIC8vIFVzZSB4LXd3dy1mb3JtLXVybGVuY29kZWQgQ29udGVudC1UeXBlXG4gICAgICAgICAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdFsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSB3b3JraG9yc2U7IGNvbnZlcnRzIGFuIG9iamVjdCB0byB4LXd3dy1mb3JtLXVybGVuY29kZWQgc2VyaWFsaXphdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gJycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIHZhbHVlLCBmdWxsU3ViTmFtZSwgc3ViTmFtZSwgc3ViVmFsdWUsIGlubmVyT2JqLCBpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9ialtuYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsU3ViTmFtZSA9IG5hbWUgKyAnWycgKyBpICsgJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyT2JqID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJPYmpbZnVsbFN1Yk5hbWVdID0gc3ViVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKz0gcGFyYW0oaW5uZXJPYmopICsgJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHN1Yk5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJWYWx1ZSA9IHZhbHVlW3N1Yk5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxTdWJOYW1lID0gbmFtZSArICdbJyArIHN1Yk5hbWUgKyAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJPYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lck9ialtmdWxsU3ViTmFtZV0gPSBzdWJWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSArPSBwYXJhbShpbm5lck9iaikgKyAnJic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyAnJic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA/IHF1ZXJ5LnN1YnN0cigwLCBxdWVyeS5sZW5ndGggLSAxKSA6IHF1ZXJ5O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgJGh0dHAgc2VydmljZSdzIGRlZmF1bHQgdHJhbnNmb3JtUmVxdWVzdFxuICAgICAgICAgICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy50cmFuc2Zvcm1SZXF1ZXN0ID0gW2Z1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5pc09iamVjdChkYXRhKSAmJiBTdHJpbmcoZGF0YSkgIT09ICdbb2JqZWN0IEZpbGVdJyA/IHBhcmFtKGRhdGEpIDogZGF0YTtcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XSlcbiAgICAuZmFjdG9yeSgndXNlclNlcnZpY2UnLCBbJyRodHRwJyxcbiAgICAgICAgJGh0dHAgPT4ge1xuICAgICAgICAgICAgbGV0IGxvZyA9IChwYXRoLCBpZCwgcGFzc3dkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IF9pZCA9IGlkIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBsZXQgX3Bhc3N3ZCA9IHBhc3N3ZCB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzogX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogX3Bhc3N3ZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmZvID0gcGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBwYXRoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9naW46IChpZCwgcGFzc3dkKSA9PiBsb2coJy9hcGkvdXNlci9sb2dpbicsIGlkLCBwYXNzd2QpLFxuICAgICAgICAgICAgICAgIGxvZ291dDogKCkgPT4gbG9nKCcvYXBpL3VzZXIvbG9nb3V0JyksXG4gICAgICAgICAgICAgICAgaW5mbzogKCkgPT4gaW5mbygnL2FwaS91c2VyJyksXG4gICAgICAgICAgICAgICAgdmlvbGF0aW9uOiAoKSA9PiBpbmZvKCcvYXBpL3VzZXIvdmlvbGF0aW9uJyksXG4gICAgICAgICAgICAgICAgbm90ZTogKCkgPT4gaW5mbygnL2FwaS91c2VyL25vdGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSlcbiAgICAuZmFjdG9yeSgnc2VhdFNlcnZpY2UnLCBbJyRodHRwJyxcbiAgICAgICAgJGh0dHAgPT4ge1xuICAgICAgICAgICAgbGV0IHNlYXQgPSBwYXRoID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBwYXRoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IChzZWF0SWQpID0+IHNlYXQoYC9hcGkvc2VhdC8ke3NlYXRJZH0vb3JkZXJgKSwgLy/pooTlrppcbiAgICAgICAgICAgICAgICBob2xkOiAoc2VhdElkKSA9PiBzZWF0KGAvYXBpL3NlYXQvJHtzZWF0SWR9L2hvbGRgKSwgLy/lhaXluqdcbiAgICAgICAgICAgICAgICByZWxlYXNlOiAoc2VhdElkKSA9PiBzZWF0KGAvYXBpL3NlYXQvJHtzZWF0SWR9L3JlbGVhc2VgKSwgLy/nprvluqdcbiAgICAgICAgICAgICAgICB0ZW1wOiAoc2VhdElkKSA9PiBzZWF0KGAvYXBpL3NlYXQvJHtzZWF0SWR9L3JlbGVhc2UvdG1wYCksIC8v5pqC56a7XG4gICAgICAgICAgICAgICAgdXNlOiAoc2VhdElkKSA9PiBzZWF0KGAvYXBpL3NlYXQvJHtzZWF0SWR9L2NvbWVCYWNrYCksIC8v6L+U5ZueL+mihOe6puWFpeW6p1xuICAgICAgICAgICAgICAgIGNhbmNlbDogKHNlYXRJZCkgPT4gc2VhdChgL2FwaS9zZWF0LyR7c2VhdElkfS9jYW5jZWxgKSwgLy/lj5bmtojpooTnuqZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pXG4gICAgLmZhY3RvcnkoJ3Jvb21TZXJ2aWNlJywgWyckaHR0cCcsXG4gICAgICAgICRodHRwID0+IHtcbiAgICAgICAgICAgIGxldCByb29tID0gcGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBwYXRoLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvb21EZXRhaWw6ICgpID0+IHJvb20oJy9hcGkvcm9vbS9saXN0JyksXG4gICAgICAgICAgICAgICAgZGVza0RldGFpbDogKHJvb21JZCkgPT4gcm9vbShgL2FwaS9yb29tLyR7cm9vbUlkfS9kZXNrc2ApLFxuICAgICAgICAgICAgICAgIHNlYXREZXRhaWw6IChyb29tSWQpID0+IHJvb20oYC9hcGkvcm9vbS8ke3Jvb21JZH0vc2VhdHNgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+Ly4wLjAuNkBuZy1hbm5vdGF0ZS1sb2FkZXIvbG9hZGVyLmpzP2FkZD10cnVlIS4vfi8uMS42LjNAZXNsaW50LWxvYWRlciEuL2FwcC9zZXJ2aWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==