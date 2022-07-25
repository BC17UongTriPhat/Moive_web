// import { Fragment } from "react";
// import { Route , Redirect } from "react-router";
// import { USER_LOGIN } from "../../util/settings/config";



// export const CheckoutTemplate = (props) => { //path, exact, Component

//     const { Component, ...restProps } = props;

//     // có thể kiểm tra người dùng nếu không đăng nhập không cho đặt vé = 2 trang checkout or checkouttamplate
//     // và chuyển người dùng về trang login
//     // lazy loading react là khi mạng chậm nó sẽ hiện ra logo để tăng trải nghiệm người dùng
//     if(!localStorage.getItem(USER_LOGIN)){
//         return <Redirect to='/login'/>
//     }
  
//     return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

//         return <Fragment>
//          <Component {...propsRoute}/>
           
//         </Fragment>
//     }} />

// }

import { Fragment, useEffect } from "react";
import { Route , Redirect } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";



 const CheckoutTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;

    
    useEffect(() => {
        window.scrollTo(0, 0);

    })

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login'/>
    }
  
    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

        return <Fragment>
         <Component {...propsRoute}/>
           
        </Fragment>
    }} />

}

export default CheckoutTemplate;