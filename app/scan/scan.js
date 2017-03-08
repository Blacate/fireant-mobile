import './scan.html';
import Util from '../utils';

class scanCtrl {
    static get $inject() {
        return ['userService', 'seatService', '$location'];
    }
    constructor(userService, seatService, $location) {
        this.services = { userService, seatService, $location };
        this.seat = {};
        this.user = {};
        this.getInfo();
    }

    setdata(data) {
        var { $location } = this.services;
        let local = $location.search();
        this.seat.local = local.seatId;
        this.user.state = data.user.state;
        if (data.user.state) {
            this.seat.user = data.seat.seatId;
            this.seat.state = data.seat.state;
        }
        return this.handleSeat();
    }

    getInfo() {
        var { userService } = this.services;
        userService.info()
            .success(d => {
                if (d.success)
                    this.setdata(d.data);
                else
                // Util.handleCommonError(d.data.stateInfo);
                    console.log(e)
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
        // var { userService } = this.services;
        // userService.info()
        //     .then(d => {
        //         if (d.data.success) {
        //             console.log(d)
        //             this.user.state = d.data.data.user.state;
        //             if (d.data.data.user.state) {
        //                 this.seat.user = d.data.data.seat.seatId;
        //                 this.seat.state = d.data.data.seat.state;
        //             }
        //         } else
        //             Util.handleCommonError(d.data.data.stateInfo);
        //     })
        //     .catch(e => {
        //         console.log(e)
        //         Util.handleUnknowError();
        //     })
        // return this;
    }

    handleSeat() {
        var { seatService } = this.services;
        let _user = this.user.state;
        let _local = this.seat.local;
        if (_user) {
            let _state = this.seat.state;
            let _seat = this.seat.user;
            //预约就座
            if (_state == 3) {
                //预约座位与扫码座位相同
                if (_local == _seat) {
                    seatService.use(_local)
                        .success(d => {
                            if (d.success)
                                Util.handleCommonConfirm('欢迎入座。', 0);
                            else
                                Util.handleCommonError(d.data.stateInfo);
                        })
                        .error(e => {
                            Util.handleUnknowError();
                        })
                } else
                //预约座位与扫码座位不同
                    Util.handleCommonConfirm('入座失败，预定座位与扫码座位不同。', 0);

            } else if (_state == 2) {
                //离座后入座
                if (_local == _seat) {
                    //离座座位与扫码座位相同
                    seatService.use(_local)
                        .success(d => {
                            if (d.success)
                                Util.handleCommonConfirm('欢迎回来，加油学习吧。', 0);
                            else
                                Util.handleCommonError(d.data.stateInfo);
                        })
                        .error(e => {
                            Util.handleUnknowError();
                        })
                } else
                //离座座位与扫码座位不同
                    Util.handleCommonConfirm('扫码失败，请回到正确座位扫码。', 0);
            }
        } else {
            seatService.hold(_local)
                .success(d => {
                    if (d.success)
                        Util.handleCommonConfirm('欢迎入座。', 0);
                    else
                        Util.handleCommonError(d.data.stateInfo);
                })
                .error(e => {
                    Util.handleUnknowError();
                })

        }



        return this;
    }
}

export default {
    templateUrl: '/app/scan/scan.html',
    controller: scanCtrl,
    controllerAs: 'vm'
}