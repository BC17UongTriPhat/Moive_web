import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
//  muốn import thư viện vào toàn file thì import vào index
//  muốn import vào 1 file thì import vào chính file đó 

import axios from 'axios'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import './HomeCarousel.css';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();
    // console.log('arrImg', arrImg);
    // check xem no co hien mang khong

    // sẽ tự kích hoạt khi component load ra 
    useEffect(() => {
        // const action = getCarouselAction;
        // dispatch(action);
        // const action = getCarouselAction;

        // 1 action = (type:'',data)
        // 2 ( phải cài middleware ) loại này sẽ cho chúng ta dispath 1 cái function chưa được gọi ( callBackfunction)
        // và bên trong redux thunk sẽ gọi lại cái function này và function(dispath) này có 1 tham số đầu vào là 
        // dispatch(getCarouselAction);

        // or là 
        // const action = getCarouselAction(1);
        dispatch(getCarouselAction());
    }, [])

    // const contentStyle = {
    //     height: '400px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    // };

    // const renderImg = () => {
    //     return arrImg.map((item, index) => {
    //         return <div key={index}>
    //             <div style={{...contentStyle,height:600}}>
    //                 <img src={item.hinhAnh} className='w-full ' alt="1282" />
    //             </div>
    //         </div>
    //     })
    // }    
    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className='w-full  opacity-0' alt="1282" />
                </div>
            </div>
        })
    }
    return (

        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}}>

            {renderImg()}
            {/* <div>
                <div style={contentStyle}>
                    <img src="https://cdn.galaxycine.vn/media/2022/5/26/1_1653532273080.jpg" className='w-full' alt="galaxy daosi" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://cdn.galaxycine.vn/media/2022/5/17/111_1652764974128.jpg" className='w-full' alt="galaxy phimNobita" />
                </div>
            </div>
            <div>
                <div style={contentStyle}>
                    <img src="https://cdn.galaxycine.vn/media/2022/5/27/promotion-u22excellent-digital-2048x682_1653626533968.jpg" className='w-full' alt="galaxy uu dai" />
                </div>
            </div> */}
        </Carousel>

    )
}
