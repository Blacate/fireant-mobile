import './select.html';






/**
 * this.desks = [{
 *  position: "left:1px;top:1px;"
 *  
 * }]
 */
class selectCtrl {
    static get $inject() {
        return ['roomService', 'seatService']
    }
    constructor(roomService, seatService) {
        this.chooseSeat;
        this.services = { roomService, seatService };
        this.desks = [];
        this.renderDesk();
    }

    renderDesk() {
        var { roomService } = this.services;
        roomService.deskDetail(1000)
            .success(d => {
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
                        console.log('success')
                    else
                        console.log('failed')
                })
        }
    }
}

export default {
    templateUrl: '/app/select/select.html',
    controller: selectCtrl,
    controllerAs: 'vm'
}