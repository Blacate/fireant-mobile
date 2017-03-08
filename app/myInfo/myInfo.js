import './myInfo.html';
import Util from '../utils';

class myInfoCtrl {
    static get $inject() {
        return ['userService', '$cookies'];
    }
    constructor(userService, $cookies) {
        this.services = { userService, $cookies };
        this.user = {
            time: '0h'
        }
        this.getInfo();
    }

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
    _logout() {
        var { userService, $cookies } = this.services;
        userService.logout()
            .success(d => {
                if (d.success) {
                    if ($cookies.getAll()) {
                        $cookies.remove('userId');
                        $cookies.remove('token');
                        Util.handleCommonConfirm('退出登录成功。', 0);
                    }
                } else
                    Util.handleCommonError(d.data.stateInfo);
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }
    logout() {
        alert('success');
    }

    renderPage(data) {
        this.user.name = data.user.name;
        this.user.time = data.user.studyTime;
    }
}

export default {
    templateUrl: '/app/myInfo/myInfo.html',
    controller: myInfoCtrl,
    controllerAs: 'vm'
}