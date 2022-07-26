import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeActions';
import style from './Checkout.module.css';
import { CloseOutlined, UserOutlined, CheckOutlined, SmileOutlined, HomeOutlined } from '@ant-design/icons'
import './Checkout.css'
import { DAT_VE } from '../../redux/actions/types/QuanLyDatVeType';
import _ from 'lodash';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import moment from 'moment';
import { history } from '../../App';
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { NavLink } from 'react-router-dom';



function Checkout(props) {


    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const { chiTietPhongVe, danhSachGheDangDat,danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer);



    const dispatch = useDispatch();
    console.log('danhSachGheDangDat', danhSachGheDangDat);
    useEffect(() => {
        // gọi hàm tạo ra 1 async function
        const action = layChiTietPhongVeAction(props.match.params.id);
        //    sau đó dispatch function này đi
        dispatch(action)
    }, [])

    console.log({ chiTietPhongVe });
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            //      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            //Kiểm tra từng render xem có phải ghế khách đặt hay không
            let classGheKhachDat = '';
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
            if (indexGheKD !== -1) {
                classGheKhachDat = 'gheKhachDat';
            }
            let classGheDaDuocDat = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';
            }



            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat';
            }




            // cach 2 import truc tiep css no sẽ ăn toàn hệ thống

            return <Fragment key={index}>

                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat  || classGheKhachDat !==""} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`}
                    key={index}>
                    {/* cách 1 */}
                    {/* {ghe.daDat ? <CloseOutlined style={{ marginBottom: 7 }} /> : ghe.stt} */}
                    {/* cách 2 */}
                    {ghe.daDat ? classGheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 8 }} /> : <CloseOutlined style={{ marginBottom: 8 }} /> : classGheKhachDat !== '' ? <SmileOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }}/>: ghe.stt}

                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
            // cách 1 load ghế 
            //     return <Fragment key={index}>

            //    {ghe.loaiGhe === 'Vip'? <button className={`${style['ghe']} ${style['gheVip']}`} key={index}>{ghe.stt}</button>:
            //     <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button>}
            //    { (index+1)%16 === 0 ?<br/>:''}
            //     </Fragment>


        })
    }

    return (
        <div className=' min-h-screen mt-5 ' >
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <div className="flex flex-col items-center mt-5">
                        <div className={`${style['line']}`}>

                        </div>
                        <div className={`${style['trapezoid']} text-center `}>
                            <h3 className='mt-3 text-black'>Màn hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>

                    </div>
                    <div className="mt-5 flex justify-center">
                        <table className=" divide-y divide-gray-200 w-2/3">
                            <thead className="bg-gray-50 p-5">
                                <tr >
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế mình đặt</th>
                                    <th>Ghế khách đang đặt</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheDaDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheKhachDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col-span-3 '>

                    <h3 className="text-green-400 text-center text-4xl"> {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()} đ</h3>
                    <hr />
                    <h3 className='text-xl mt-2'>{thongTinPhim.tenPhim}</h3>
                    <p>Địa điểm : {thongTinPhim.tenCumRap}   <br /> {thongTinPhim.diaChi}</p>
                    <p> Ngày Chiếu : {thongTinPhim.ngayChieu}
                        - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    <hr />
                    <div className='flex flex-row my-5'>
                        <div className='w-4/5'>
                            <span className='text-red-400 text-lg'> Ghế  </span>
                            {/* cách ghé này sẽ render ra các thẻ span tương ứng */}

                            {/* {danhSachGheDangDat.map((gheDD,index)=>{
                                 return <span key={index} className="text-green-500 text-xl">  {gheDD.stt}  </span>
                            })} */}
                            {/* import lodash để short theo thứ tự */}
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl">  {gheDD.stt}  </span>
                            })}
                        </div>

                        <div className='text-right col-span-1'>
                            <span className='text-green-800 text-lg'>
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()}

                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i>Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr />
                    <div className='mb-0 h-full flex flex-col  items-center' style={{ marginBottom: 0 }} >
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;

                            console.log(thongTinDatVe);

                            dispatch(datVeAction(thongTinDatVe));
                        }} className='bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer'>
                            Đặt vé
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}


const { TabPane } = Tabs;

function callback(key) {

    
    // console.log(key);
}

export default function (props) {

    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();
    console.log('tabActive', tabActive);

    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer)
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment> <button onClick={()=>{
            history.push('/profile')
        }}> <div style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center'}} className="text-2xl  rounded-full bg-red-200">{userLogin.taiKhoan.substr(0,1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={()=>{
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/home');
            window.location.reload();
        }} className="text-blue-800">Đăng xuất</button> </Fragment>: ''} 


    </Fragment>

    return <div className="p-5">
        <Tabs  tabBarExtraContent={operations} defaultActiveKey="1" activeKey={tabActive} onChange={(key) => {
            // console.log('object',key)
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: key.toString()
            })

        }}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1" >
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2" >
                <KetQuaDatVe {...props} />
            </TabPane>
            <TabPane tab={<div className="text-center" style={{display:'flex', justifyContent:'center',alignItems:'center'}}><NavLink to="/"><HomeOutlined style={{marginLeft:10,fontSize:25}} /></NavLink></div>} key="3">
             
             </TabPane>
        </Tabs>

    </div>

}

function KetQuaDatVe(props) {
    const dispatch = useDispatch();

    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])


    console.log('thongTinNguoiDung', thongTinNguoiDung);

    const renderTicketItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);

            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>



                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">


                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" /> */}
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>

                        <p className="text-gray-500"><span className="font-bold">Giờ chiếu:</span> {moment(ticket.ngayDat).format('hh:mm A')} - <span className="font-bold">Ngày chiếu:</span>  {moment(ticket.ngayDat).format('DD-MM-YYYY')} .</p>

                        <p><span className="font-bold">Địa điểm:</span> {seats.tenHeThongRap}   </p>
                        <p>
                            <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
                        </p>
                    </div>
                </div>
            </div>

        })
    }

    return <div className='p-5'>
        <h3> Kết Quả Đặt Vé</h3>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-600 ">Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin địa và thời gian để xem phim vui vẻ bạn nhé !</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTicketItem()}


                </div>
            </div>
        </section>
    </div>

}