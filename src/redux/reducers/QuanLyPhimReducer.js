import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../actions/types/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";



const stateDefault = {
    arrFilm :[
        {
            "maPhim": 10535,
            "tenPhim": "NGHỀ SIÊU DỄ",
            "biDanh": "nghe-sieu-de",
            "trailer": "https://www.youtube.com/watch?v=IOwvN-aoBpM",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/nghe-sieu-de_gp01.jpg",
            "moTa": "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \"phá án\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \"chuyên án đặc biệt\" của ông đứng trước nguy cơ đổ bể.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-04-29T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "maPhim": 10535,
            "tenPhim": "NGHỀ SIÊU DỄ",
            "biDanh": "nghe-sieu-de",
            "trailer": "https://www.youtube.com/watch?v=IOwvN-aoBpM",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/nghe-sieu-de_gp01.jpg",
            "moTa": "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \"phá án\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \"chuyên án đặc biệt\" của ông đứng trước nguy cơ đổ bể.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-04-29T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
    ],
    dangChieu: true,
    sapChieu:true,
    arrFilmDefault: [],
    filmDetail:{}
}

export const QuanLyPhimReducer = (state=stateDefault,action)=>{
    switch (action.type) {
        
        case SET_DANH_SACH_PHIM :{
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return {...state}
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu );
            return {...state}
        }
        case SET_FILM_SAP_CHIEU : {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu );
            return {...state}
        }
        case SET_CHI_TIET_PHIM :{
            state.filmDetail = action.filmDetail;
            return {...state};

        }


        default: return { ...state }
    }
}