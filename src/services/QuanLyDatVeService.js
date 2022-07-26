import { baseService } from "./baseSerrvice";
import { GROUPID } from '../util/settings/config'
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
// import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";

export class QuanLyDatVeService extends baseService {

    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url 
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

    /* thongTinDatVe = https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/DatVe 
        {
            "maLichChieu": 0,
            "danhSachVe": [
        {
            "maGhe": 0,
            "giaVe": 0
            }]}
    */
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { 

        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);

    }

}



export const quanLyDatVeService = new QuanLyDatVeService();
