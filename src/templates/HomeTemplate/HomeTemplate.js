import { Components } from "antd/lib/date-picker/generatePicker";
import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";



export const HomeTemplate = (props) => { //path, exact, Component

    useEffect(() => {
        window.scrollTo(0, 0);

    })

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

        return <Fragment>
            <Header {...propsRoute}/>

            <Component  {...propsRoute}/>

            
            <hr className="mt-5"/>
            <Footer />
           
        </Fragment>
    }} />

}