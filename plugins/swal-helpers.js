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

    const confirm = (first_name, last_name) => Swal.fire({
        title: `Are you sure to unfriend ${first_name} ${last_name}?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, unfriend now!'
    })
    inject('error', error)
    inject('success', success)
    inject('confirm', confirm)

}