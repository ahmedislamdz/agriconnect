import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <i>
            <img src="image/logo-food.png" width="108px" alt="منتج" />
          </i>
          <p>
          لدينا أفضل منتجات! تسوق الآن واستمتع بجودة لا تضاهى 
         </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>معلومات الاتصال</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +213676785238
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +21327897894
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            name@email.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            الجزائر , الجلفة
          </a>
        </div>
        <div className="box">
          <h3>معلومات سريعة</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            الصفحة الرئيسية
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            المميزات
          </a>
          <a href="#blogs" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
            المدونة
          </a>
        </div>
        <div className="box">
          <h3>النشرة الإخبارية</h3>
          <p>اشترك للحصول على آخر التحديثات</p>
          <input type="text" placeholder="بريدك الإلكتروني" />
          <button type="button" className="btn">
            اشتراك
          </button>
          <img src="image/payment.png" alt="" />
        </div>
      </div>
      <div className="credits">
        <p>
          تم إنشاء الموقع بواسطة
          {' '}
          <span>السيد بن ملوكة إسلام</span>
          {' '}
          | جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
