import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const Alert = (icon, content, confirmButtonColor) => {
  MySwal.fire({
    icon,
    // title: 'Oops...',
    html: content,
    padding: '10px',
    width: 300,
    confirmButtonColor,
    confirmButtonText: '확인',
  });
};

export const Alert2 = (icon, content) => {
  MySwal.fire({
    position: 'top-end',
    icon,
    title: content,
    showConfirmButton: false,
    timer: 1500,
  });
};