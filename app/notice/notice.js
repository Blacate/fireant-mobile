import './notice.html';

class noticeCtrl {
    static get $inject() {
        return ['userService']
    }
    constructor(userService) {
        this.services = { userService };
        this.violation = {},
            this.use = {
                records: [{
                        ctnt: '预约超过2小时',
                        createTime: 1488651116000,
                        isWarn: true
                    },
                    {
                        ctnt: '暂离2小时',
                        createTime: 1488651116000,
                        isAlert: true
                    },
                    {
                        ctnt: '学习2小时',
                        createTime: 1488651116000,
                    }
                ]
            }
        this.renderViolation();
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
                    this.violation.records = d.data;
                }
            })
        return this;
    }
}

export default {
    templateUrl: '/app/notice/notice.html',
    controller: noticeCtrl,
    controllerAs: 'vm'
}