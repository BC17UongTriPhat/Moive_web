import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
const { TabPane } = Tabs;





export default class Demo extends React.PureComponent {

  state = {
    tabPosition: 'left',
  };


  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };
  componentDidMount() {

  }

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return <TabPane tab={<img src={heThongRap.logo} className='rounded-full' width="50" alt="galaxylogo" />} key={index}>
        <Tabs tabPosition={tabPosition}>

          {heThongRap.lstCumRap?.slice(0, 4).map((cumRap, index) => {
            return <TabPane tab={
              <div style={{ width: '300px', display: 'flex' }} >
                <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" alt="galaxylogo" />
                <div className="text-left ml-2">
                  {cumRap.tenCumRap}
                  <p className="text-red-200">Chi tiết</p>
                </div>
              </div>
            }
              key={index}>
              {/* load phim tuong ung cum rap */}
              {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                return <Fragment key={index}>

                  <div className="my-2" >
                    <div style={{ display: 'flex' }}>
                      <img style={{ height: 80, width: 80 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                      <div className='ml-2'>
                        <h1 className="text-2xl text-green-700" >{phim.tenPhim}</h1>
                        <p>{cumRap.diaChi}</p>
                        <div className="grid grid-cols-6 gap-6">
                          {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <NavLink className="text-2xl text-green-400" to={`/checkout/${lichChieu.maLichchieu}`} key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>
                          })}
                        </div>

                      </div>

                    </div>

                  </div>
                  <hr />

                </Fragment>
              })}

            </TabPane>

          })}
        </Tabs>
      </TabPane>
    })
  }


  render() {
    // console.log(this.props, 'props123');
    const { tabPosition } = this.state;
    return (
      <>

        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}


        </Tabs>
      </>
    )
  }


}


// style={{width:'150px',height:"100px"}}