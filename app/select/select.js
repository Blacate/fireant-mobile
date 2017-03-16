import './select.html';
import Util from '../utils';

class selectCtrl {
    static get $inject() {
        return ['roomService', 'seatService', '$window']
    }
    constructor(roomService, seatService, $window) {
        this.chooseSeat; //选择的座位 [桌子的id,座位的序号]
        this.chooseInfo = '您暂未选择任何座位';
        this.chooseRoom = {}; //选择的阅览室
        this.roomList = [{
            label: '一楼',
            value: '0',
            disabled: true,
            children: []
        }, {
            label: '二楼',
            value: '1',
            disabled: true,
            children: []
        }, {
            label: '三楼',
            value: '2',
            disabled: true,
            children: []
        }, {
            label: '四楼',
            value: '3',
            disabled: true,
            children: []
        }, {
            label: '五楼',
            value: '4',
            disabled: true,
            children: []
        }, {
            label: '六楼',
            value: '5',
            disabled: true,
            children: []
        }];
        this.services = { roomService, seatService, $window };
        this.desks = []; //阅览室内所有桌子的详情
        this.canvas;
        this.getRooms();
    }

    getRooms() {
        var { roomService } = this.services;
        roomService.roomDetail()
            .success(d => {
                if (d.success) {
                    let floorList = ['一楼', '二楼', '三楼', '四楼', '五楼', '六楼'];
                    for (let room of d.data) {
                        let floorId = floorList.indexOf(room.floor);
                        if (floorId >= 0 && floorId < 6) {
                            this.roomList[floorId].disabled = false;
                            let _children = {};
                            _children.label = room.name;
                            _children.id = room.roomId;
                            _children.value = this.roomList[floorId].children.length;
                            this.roomList[floorId].children.push(_children);
                        }
                    }
                    //设置默认选择的阅览室
                    this.chooseRoom.floor = d.data[0].floor;
                    this.chooseRoom.floorId = floorList.indexOf(d.data[0].floor);
                    this.chooseRoom.name = d.data[0].name;
                    this.chooseRoom.roomId = d.data[0].roomId;
                    return this.renderDesk(this.chooseRoom.roomId);
                }
            })
    }

    picker() {
        var { $window } = this.services;
        var that = this;
        $window.weui.picker(that.roomList, {
            defaultValue: [that.chooseRoom.floorId, that.chooseRoom.roomId],
            onConfirm: function(result) {
                if (that.roomList[result[0]].children[result[1]].id != that.chooseRoom.roomId) {
                    that.chooseRoom.floorId = result[0];
                    that.chooseRoom.floor = that.roomList[result[0]].label;
                    that.chooseRoom.roomId = that.roomList[result[0]].children[result[1]].id;
                    that.chooseRoom.name = that.roomList[result[0]].children[result[1]].label;
                    return that.renderDesk(that.chooseRoom.roomId);
                } else
                    console.log('same');
            }
        });
    }

    renderDesk(roomId) {
        var { roomService } = this.services;
        roomService.deskDetail(roomId)
            .success(d => {
                if (d.success) {
                    let max_width = 0;
                    let max_height = 0;
                    for (let desk of d.data) {
                        desk.y > max_width ? max_width = desk.y : null;
                        desk.x > max_height ? max_height = desk.x : null;
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
                    let _width = (max_width - 1) * 60 + 70;
                    let _height = (max_height - 1) * 50 + 65;
                    this.canvas = `width:${_width}px;height:${_height}px;`;
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
            this.chooseInfo = `您已选择了${this.desks[i].cells[j].id}号座位`;

        } else if (this.desks[i].cells[j].state == 4) {
            this.desks[i].cells[j].state = 0;
            this.chooseSeat = '';
            this.chooseInfo = '您暂未选择任何座位';
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