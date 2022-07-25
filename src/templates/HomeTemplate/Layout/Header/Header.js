import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { useSSR, useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';

const { Option } = Select;





export default function Header(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);


    const { t, i18n } = useTranslation()

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        i18n.changeLanguage(value);
    };

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>

                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-8 py-3 rounded">{t('singin')}</button>
                <button onClick={() => {
                    history.push('/register')
                }} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">{t('register')}</button>


            </Fragment>
        }

        return <Fragment>
            <button onClick={() => {
                history.push('/profile')
            }} className="self-center ml-5 px-8 py-3 rounded">Hello !{userLogin.taiKhoan}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 mr-5">Đăng xuất</button>
        </Fragment>
    }
    return (

        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <div>
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="cyberlearn.vn" />
                    </div>

                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  text-white " activeClassName='border-b-2 border-white'>Home</NavLink >
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white" activeClassName='border-b-2 border-white'>Contact</NavLink >
                    </li>
                    <li className="flex">
                        <NavLink to="/news" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white" activeClassName='border-b-2 border-white'>News</NavLink >
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">

                    {renderLogin()}


                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <Select defaultValue="vi" style={{ width: 80, paddingTop: 20 }} onChange={handleChange}>
                    <Option value="en">Eng</Option>
                    <Option value="vi">Vi</Option>
                    <Option value="chi">chi</Option>
                </Select>
            </div>
        </header>

    )
}
