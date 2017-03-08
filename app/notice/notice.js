import './notice.html';
import Util from '../utils';

class noticeCtrl {
    static get $inject() {
        return ['userService']
    }
    constructor(userService) {
        this.services = { userService };
        this.use = {};
        this.violation = {};
        this.renderViolation().renderRecords();
    }

    showDetail() {
        this.violation.detail = !this.violation.detail;
        return this;
    }

    renderViolation() {
        var { userService } = this.services;
        userService.violation()
            .success(d => {
                if (d.success) {
                    this.violation.display = d.data.length;
                    this.violation.times = d.data.length;
                    if (d.data.length) {
                        let violation　 = [];
                        angular.forEach(d.data, value => {
                            let _violation = {};
                            _violation.createTime = value.createTime;
                            if (value.reason == 1) {
                                _violation.reason = '闭馆未正常离开';
                            } else if (value.reason == 2) {
                                _violation.reason = '暂离超时';
                            } else if (value.reason == 3) {
                                _violation.reason = '预约取消';
                            }
                            console.log(value)
                            violation.push(_violation);
                        })

                        this.violation.records = violation;
                    }
                } else
                    Util.handleCommonError();
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    renderRecords() {
        var { userService } = this.services;
        userService.note()
            .success(d => {
                if (d.success) {
                    let record = [];
                    angular.forEach(d.data, (value, key) => {
                        let _record = {};
                        _record.createTime = value.createTime;
                        if (value.state == 0) {
                            _record.class = 'warn';
                            _record.ctnt = '离座';
                        } else if (value.state == 1) {
                            _record.class = 'warn';
                            _record.ctnt = '入座';
                        } else if (value.state == 2) {
                            _record.class = 'warn';
                            _record.ctnt = '暂离';
                        } else if (value.state == 3) {
                            _record.class = 'warn';
                            _record.ctnt = '预约';
                        } else if (value.state == 4) {
                            _record.class = 'warn';
                            _record.ctnt = '取消';
                        }
                        record.push(_record);
                    })
                    this.use.records = record;
                }
            })
            .error(e => {
                Util.handleUnknowError();
            })
    }
}

export default {
    templateUrl: '/app/notice/notice.html',
    controller: noticeCtrl,
    controllerAs: 'vm'
}