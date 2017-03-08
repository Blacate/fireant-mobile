import './home.html';
import Util from '../utils';

class homeCtrl {
    static get $inject() {
        return ['userService', 'seatService', '$cookies', '$http', '$window'];
    }

    constructor(userService, seatService, $cookies, $http, $window) {
        this.services = { userService, seatService, $cookies, $http, $window };
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
            new: false,
            text: '您有新的违规记录'
        }

        // this.login('20141344051', 'duohuo').getInfo();
        // this.login('20141305073', '20141305073').getInfo();
        this.getInfo();
    }

    /**
     * 登录
     * @param {string} id　学号 
     * @param {string} passwd　密码 
     */
    login(id, passwd) {
        var { userService } = this.services;
        userService.login(id, passwd)
            .success(d => {
                if (d.success)
                    this.setcookies(d.data);
                else
                    Util.handleCommonError(d.data.stateInfo);

            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    /**
     * 设置cookies
     * @param {obj} data　 
     *      data.userId: 用户id
     *      data.token: token
     */
    setcookies(data) {
        var { $cookies } = this.services;
        if ($cookies.getAll()) {
            $cookies.remove('userId');
            $cookies.remove('token');
        }
        let expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        $cookies.put('userId', data.userId, { 'expires': expireDate });
        $cookies.put('token', data.token, { 'expires': expireDate });
        return this;
    }

    /**
     * 获取用户详细信息，并调用renderPage(data)处理数据
     */
    getInfo() {
        var { userService } = this.services;
        userService.info()
            .success(d => {
                if (d.success)
                    this.renderPage(d.data)
                else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
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
    renderPage(data) {
        var { timeDiff } = this.services;
        this.user.name = data.user.name;
        this.record.display = data.user.state;
        this.violation.new = data.user.msg;

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
            this.timeDiff(data.lastTime).then(
                (data) => {
                    this.record.timeCtnt = data;
                }
            );
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
    timeDiff(time) {
        var { $http } = this.services;
        let timeDifference = null;
        let _timeDifference = null;
        return $http.get('/api/system/time/now').then(d => {
            _timeDifference = d.data.data - time;
            if (_timeDifference < 60000)
                timeDifference = '0分钟';
            else if (_timeDifference < 60 * 60000)
                timeDifference = parseInt(_timeDifference / 60000) + '分钟';
            else
                timeDifference = parseInt(_timeDifference / 3600000) + '小时'　 +
                parseInt(_timeDifference % 3600000 / 60000) + '分钟';
            return timeDifference;
        });

    }

    /**
     * 线下占座
     * 判断用户位置并扫描二维码后加载js发送请求
     */
    offlineHold() {
        return this.scan();
    }

    scan() {
        var { $window } = this.services;
        window.location.href = '/#/scan?seatId=1000'
            // $window.wx.scanQRCode({
            //     needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            //     scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
            //     success: function(res) {
            //         var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            //     }
            // });
    }

    /**
     * 取消性质按钮
     *      clcOrder: 取消预约
     *      tmpLev: 暂时离开
     *      clcUse: 取消使用
     */
    clcF() {
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
    clcOrder() {
        var { seatService } = this.services;
        seatService.cancel(this.seatId)
            .success(d => {
                if (d.success)
                    Util.handleCommonConfirm('预约取消成功，再见。', 1);
                else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    /**
     * 暂时离开函数
     */
    tmpLev() {
        var { seatService } = this.services;
        seatService.temp(this.seatId)
            .success(d => {
                if (d.success)
                    Util.handleCommonConfirm('你有10min，记得回来哦。', 1);
                else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    /**
     * 取消使用函数(就座状态下)
     */
    clcUse() {
        var { seatService } = this.services;
        seatService.release(this.seatId)
            .success(d => {
                if (d.success)
                    Util.handleCommonConfirm('离座成功，期待你的下次使用。', 1);
                else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    /**
     * 确定性质按钮
     *      useSeat: 确认就座
     *      finishUse: 使用完成
     *      back: 返回座位
     */
    sureF() {
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
    finishUse() {
        var { seatService } = this.services;
        seatService.release(this.seatId)
            .success(d => {
                if (d.success)
                    Util.handleCommonConfirm('离座成功，期待你的下次使用。', 1);
                else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }
}

export default {
    templateUrl: '/app/home/home.html',
    controller: homeCtrl,
    controllerAs: 'vm'
}