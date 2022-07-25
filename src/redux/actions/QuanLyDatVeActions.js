import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";



export const layChiTietPhongVeAction = (maLichChieu) => {


    return async dispatch => {


        try {

            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            // console.log('result',result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }


        } catch (error) {

            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {


    return async dispatch => {
        try {

            dispatch(displayLoadingAction)


            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log(result.data.content);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({ type: DAT_VE_HOAN_TAT })
            await dispatch(hideLoadingAction);
            dispatch({ type: CHUYEN_TAB });
            // let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
            //  connection.invoke('datGheThanhCong',userLogin.taiKhoan,thongTinDatVe.maLichChieu);




        } catch (error) {
            dispatch(hideLoadingAction)
            console.log(error.response.data);
        }
    }

}