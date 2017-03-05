import './myInfo.html';

class myInfoCtrl {
    static get $inject() {
        return ['userService'];
    }
    constructor(userService) {
        this.services = { userService };
        this.user = {
            time: '0h'
        }
        this.getInfo();
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
    _logout() {
        var { userService } = this.services;
        userService.logout()
            .success(d => {

            })
        return this;
    }
    logout() {
        alert('success');
    }

    renderPage(data) {
        this.user.name = data.user.name;
        // this.user.time = data.user.time;
    }
}

export default {
    templateUrl: '/app/myInfo/myInfo.html',
    controller: myInfoCtrl,
    controllerAs: 'vm'
}