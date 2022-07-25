import { baseService } from "./baseSerrvice";
import {  GROUPID} from "../util/settings/config";

export class QuanLyPhimService extends baseService{
    constructor(){
        super();
        // kế thừa phải ghi super
    }
    layDanhSachBanner = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
        // khi sử dụng này nó trả về 1 cái promise 
    }
    layDanhSachPhim = () =>{
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
        // khi sử dụng này nó trả về 1 cái promise 
    }
    
    layThongTinPhim = (maPhim) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }

    themPhimUploadHinh = (formdata) => {
        return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`,formdata)
    }
}

export const quanLyPhimService = new QuanLyPhimService();