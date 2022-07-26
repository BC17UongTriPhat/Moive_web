import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// kết nối  redux 
import { useSelector, useDispatch } from 'react-redux'
import Film from '../../components/Film/Film';
import MultipleRows from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';


export default function Home(props) {


    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm)
    // props.match.params

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index}/>
    //     })
    // }

    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action) // dispatch function tu redux thunk
        // dispatch duoc 2 cai data va function

        dispatch(layDanhSachHeThongRapAction());
    },[])
    return (
        
        <div>
            <HomeCarousel  />
    
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                <MultipleRows  arrFilm={ arrFilm}/>
                    {/* <div className="flex flex-wrap -m-4 " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className='mx-44'>
                <HomeMenu heThongRapChieu={heThongRapChieu} />

            </div>
        </div>
    )
}
