import Swal from "sweetalert2";

export default (context, inject) => {
    const error = (msg) => Swal.fire({
        title: msg,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: "error",
        toast: true,
    });
    const success = (msg) => Swal.fire({
        title: msg,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: "success",
        toast: true,
    });
    inject('error', error)
    inject('success', success)

}