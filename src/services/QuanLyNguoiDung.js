import { baseService } from "./baseSerrvice";
import {  GROUPID} from "../util/settings/config";

export class QuanLyNguoiDungService extends baseService{
    constructor(){
        super();
        // kế thừa phải ghi super
    }
    dangNhap = (thongTinDangNhap) =>{// {taiKhoan:"",matKhau:""}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
       
    }
 

    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();