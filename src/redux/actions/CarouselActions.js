

import axios from 'axios';
import { DOMAIN } from '../../util/settings/config';
import { SET_CAROUSEL } from './types/CarouselType';
import { quanLyPhimService } from '../../services/QuanLyPhimService'; 

// export const getCarouselAction = () =>{
    
    
//     return  (dispatch) => {
        
//     }
// } 

// export const getCarouselAction = async (dispatch) => {
//     try {
//         const result = await axios({
//             url: 'https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
//             method: 'GET'

//         });
//         dispatch({
//             type: 'SET_CAROUSEL',
//             arrImg: result.data.content
//         })
//     } catch (errors) {
//         console.log('errors', errors)
//     }
// };

export const getCarouselAction = () =>{
   return async (dispatch) => {
        try {
            // sử dụng thamSo để gắn lên mấy cái api
            
            const result = await quanLyPhimService.layDanhSachBanner();



            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}
