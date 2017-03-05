import './home.html';

class homeCtrl {
    static get $inject() {
        return ['userService', '$cookies', '$http'];
    }

    constructor(userService, $cookies, $http) {
        this.services = { userService, $cookies, $http };
        this.user = { name: '姓名' }
        this.record = { display: true };
        this.violation = {
                new: false,
                last: ''
            }
            //this.login().getInfo();
        this.getInfo();
    }

    login() {
        var { userService } = this.services;
        userService.login('20141305073', '20141305073')
            .success(d => {
                if (d.success) {
                    this.setcookies(d.data)
                }
            })
            .error(e => {
                console.log(e);
            })
        return this;
    }

    setcookies(data) {
        var { $cookies } = this.services;
        $cookies.put('userId', data.userId);
        $cookies.put('token', data.token);
        return this;
    }

    getInfo() {
        var { userService } = this.services;
        userService.info()
            .success(d => {
                if (d.success) {
                    this.renderPage(d.data)
                }
            })
            .error(e => {
                console.log(e);
            })
        return this;
    }

    renderPage(data) {
        var { timeDiff } = this.services;
        this.user.name = data.user.name;
        this.record.display = data.user.state;

        function switchPrint(a, b, c, d, e, f) {
            f.record.classRls = a;
            f.record.seatTit = b;
            f.record.timeTit = c;
            f.record.btnCle = d;
            f.record.btnSure = e;
        }
        if (data.user.state) {
            this.timeDiff(data.lastTime).then(
                (data) => {
                    this.record.timeCtnt = data;
                }
            );
            this.record.seatCtnt = data.room.name + data.seat.seatId + '号座位';
            switch (data.seat.state) {
                case 1:
                    switchPrint(true, '预约座位', '预约时间', '取消预约', '确认就座', this);
                    break;
                case 2:
                    switchPrint(false, '我的座位', '在线时长', '暂离座位', '使用完成', this);
                    break;
                case 3:
                    switchPrint(true, '我的座位', '已离时长', '取消使用', '确认返回', this);
                    break;
            }
        }

        return this;
    }

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

}

export default {
    templateUrl: '/app/home/home.html',
    controller: homeCtrl,
    controllerAs: 'vm'
}