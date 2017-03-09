import './login.html';
import Util from '../utils';

class loginCtrl {
    static get $inject() {
        return ['userService', '$cookies', '$location'];
    }
    constructor(userService, $cookies, $location) {
            this.services = { userService, $cookies, $location };
            this.login();
        }
        /**
         * 登录
         * @param {string} id　学号 
         * @param {string} passwd　密码 
         */
    login() {
        var { userService, $location } = this.services;
        let value = $location.search();
        let id = value.id;
        let passwd = value.passwd;
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
        window.location.href = '/#/';
        return this;
    }
}

export default {
    templateUrl: '/app/login/login.html',
    controller: loginCtrl,
    controllerAs: 'vm'
}