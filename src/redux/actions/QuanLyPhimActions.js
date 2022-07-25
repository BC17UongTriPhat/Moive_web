import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";



export const layDanhSachPhimAction = () =>{

    return async (dispatch) => {
         try {
             // sử dụng thamSo để gắn lên mấy cái api
             
             const result = await quanLyPhimService.layDanhSachPhim();
 
            
            // sau khi lay du lieu tu api ve se dua len reducer
             dispatch({
                 type: SET_DANH_SACH_PHIM,
                 arrFilm: result.data.content
             })
         } catch (errors) {
             console.log('errors', errors)
         }
     };
 }
 
 export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);


            
        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}

 export const layThongTinPhimAction =  (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);

   

            dispatch({
                type:SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })
            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}