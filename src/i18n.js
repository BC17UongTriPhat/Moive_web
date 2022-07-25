import i18next from 'i18next';
import { initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true ,
    fallbackLng:'vi',
    resources:{
        vi:{
            translation:{
                singin:'Đăng Nhập',
                register :'Đăng Ký'
            }
        },  
        en:{
            translation:{
                singin:'singin',
                register :'register'
            }
        },
            
        chi:{
            translation:{
                singin:'登录',
                register :'登记'
            }
        }
    }

})

//https://www.youtube.com/watch?v=SA_9i4TtxLQ&t=705s xem demo tại đây kết hợp với select andt lại làm được kq như trung tâm