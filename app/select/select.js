import './select.html';
import Util from '../utils';

class selectCtrl {
    static get $inject() {
        return ['roomService', 'seatService', '$window']
    }
    constructor(roomService, seatService, $window) {
        this.chooseSeat;
        this.services = { roomService, seatService, $window };
        this.desks = [];
        this.roomId;
        this.renderDesk();
    }

    picker() {
        var { $window } = this.services;
        $window.weui.picker([{
            label: '1st楼层',
            value: '一楼的id',
            children: [{
                    label: '教室１',
                    value: '教室１的id',
                },
                {
                    label: 'x2',
                    value: 'x2',
                },
                {
                    label: 'x3',
                    value: 'x3',
                },
            ]
        }, {
            label: '2nd楼层',
            value: 1,
            children: [{
                    label: 'x1',
                    value: 'x1',
                },
                {
                    label: 'x2',
                    value: 'x2',
                },
                {
                    label: 'x3',
                    value: 'x3',
                },
            ]
        }, {
            label: '3rd楼层',
            value: 2,
            children: [{
                    label: 'x1',
                    value: 'x1',
                },
                {
                    label: 'x2',
                    value: 'x2',
                },
                {
                    label: 'x3',
                    value: 'x3',
                },
            ]
        }, {
            label: '4th楼层 (disabled)',
            disabled: true,
            value: 3,
            children: [{
                    label: 'x1',
                    value: 'x1',
                },
                {
                    label: 'x2',
                    value: 'x2',
                },
                {
                    label: 'x3',
                    value: 'x3',
                },
            ]
        }, {
            label: '5th楼层',
            value: 4,
            children: [{
                    label: 'x1',
                    value: 'x1',
                },
                {
                    label: 'x2',
                    value: 'x2',
                },
                {
                    label: 'x3',
                    value: 'x3',
                },
            ]
        }], {
            onChange: function(result) {
                console.log(result);
            },
            onConfirm: function(result) {
                console.log(result);
                document.getElementById('showPickerText').innerText = result;
            }
        });
    }

    chooseRoom() {

        //拿到房间的Id并赋值给 this.roomId

    }

    renderDesk() {
        var { roomService } = this.services;
        roomService.deskDetail(1000)
            .success(d => {
                if (d.success) {
                    for (let desk of d.data) {
                        let _desk = {};
                        _desk.cells = [];
                        let _left = (desk.y - 1) * 60 + 25;
                        let _top = (desk.x - 1) * 50 + 15;
                        _desk.position = `left:${_left}px;top:${_top}px;`;
                        for (let seat of desk.seats) {
                            let _seat = {};
                            _seat.state = seat.state;
                            _seat.id = seat.seatId;
                            _desk.cells.push(_seat);
                        }
                        this.desks.push(_desk);
                    }
                } else
                    Util.handleCommonError();
            })
            .error(e => {
                Util.handleUnknowError();
            })
        return this;
    }

    choose(i, j) {
        if (!this.desks[i].cells[j].state) {
            this.desks[i].cells[j].state = 4;
            if (this.chooseSeat) {
                let last = this.chooseSeat;
                this.desks[last[0]].cells[last[1]].state = 0;
            }
            this.chooseSeat = [i, j];
        } else if (this.desks[i].cells[j].state == 4) {
            this.desks[i].cells[j].state = 0;
            this.chooseSeat = '';
        }
        return this;
    }

    submitSeat() {
        var { seatService } = this.services;
        if (this.chooseSeat) {
            let seat = this.chooseSeat;
            seatService.order(this.desks[seat[0]].cells[seat[1]].id)
                .success(d => {
                    if (d.success)
                        Util.handleCommonConfirm('预约成功，快点来吧！', 0);
                    else
                        Util.handleCommonError();
                })
                .error(e => {
                    Util.handleUnknowError();
                })
        } else {
            Util.handleCommonWarning('你还没有选择座位。');
        }
    }
}

export default {
    templateUrl: '/app/select/select.html',
    controller: selectCtrl,
    controllerAs: 'vm'
}