import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/QuanLyPhimType";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from './MultipleRowSlick.module.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-next']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
    </div>
  );
}



const MultipleRowSlick = (props) => {

  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)


  // hiển thị mảng phim tại chổ này
  const renderFilms = () => {




    return props.arrFilm.slice(0, 16).map((item, index) => {
      // return <div key={index} className={`${styleSlick['width-item']}`}>
      //   <Film_Flip/>
      // </div>
      return <div className="mt-2" key={index} >
        <Film_Flip item={item} />
      </div>
    })
  }
  let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';

  let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';

  const settings = {
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true
  };
  return (
    <div>
      <button className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded text-white bg-gray-800 mr-2`} onClick={() => {
        const action = { type: SET_FILM_DANG_CHIEU }
        dispatch(action);
      }}>Phim Đang Chiếu</button>
      <button className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded text-gray-800 bg-white border-gray-800`}onClick={() => {
        const action = { type: SET_FILM_SAP_CHIEU }
        dispatch(action);}} >Phim Sắp Chiếu</button>
      <Slider {...settings}>
        {renderFilms()}


      </Slider>
    </div>
  );
}



export default MultipleRowSlick;