import swal from 'sweetalert';

class Util {
    static handleUnknowError() {
        swal({
            type: 'error',
            title: '出错啦！',
            text: '请联系管理员！',
        })
    }
    static handleCommonError(txt) {
        swal({
            type: 'error',
            title: 'Error!',
            text: txt
        })
    }
    static handleCommonConfirm(txt, reload) {
        swal({
            type: 'success',
            title: 'Success!',
            text: txt,
        }, () => {
            if (reload)
                location.reload();
            else {
                window.location = '/#/';
            }

        })
    }
}

export default Util;