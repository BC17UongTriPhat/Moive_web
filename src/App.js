import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate'
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
// import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/Showtime/ShowTime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';



// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate')); // qa trang checkoutempla sửa lại


export const history = createBrowserHistory();

function App() {


  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
        {/* <Suspense fallback={<h1>Loading</h1>}>
          <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout} />
        </Suspense> */}

        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/register" exact Component={Register} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/users" exact Component={Dashboard} />
        <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} />

        <HomeTemplate path="/" exact Component={Home} />

      </Switch>
    </Router>
  );
}

export default App;


    // lazy loading react là khi mạng chậm nó sẽ hiện ra logo để tăng trải nghiệm người dùng chỉ phần html không bao gồm dữ liệu api

