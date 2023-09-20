import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        #
        {' '}
        <span>المقالات</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                بواسطة المستخدم
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1 مايو 2021
              </a>
            </div>
            <h3>الخضروات والفواكه الطازجة والعضوية</h3>
            <p>
            تعرّف على المزيد حول هذا المنتج واستفد من معلومات شاملة 
            </p>
            <a href="/" className="btn">
              اقرأ المزيد
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                 بواسطة المستخدم
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1 مايو 2021
              </a>
            </div>
            <h3>الخضروات والفواكه الطازجة والعضوية</h3>
            <p>
            تعرّف على المزيد حول هذا المنتج واستفد من معلومات شاملة 
            </p>
            <a href="/" className="btn">
              اقرأ المزيد
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                بواسطة المستخدم
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1 مايو 2021
              </a>
            </div>
            <h3>الخضروات والفواكه الطازجة والعضوية</h3>
            <p>
            تعرّف على المزيد حول هذا المنتج واستفد من معلومات شاملة 
            </p>
            <a href="/" className="btn">
              اقرأ المزيد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
