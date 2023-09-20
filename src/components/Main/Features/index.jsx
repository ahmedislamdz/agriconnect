import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          #
          {' '}
          <span>المميزات</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1.png" alt="" />
            <h3>طازج وعضوي</h3>
            <p> لدينا أفضل منتجات! تسوق الآن واستمتع بجودة لا تضاهى</p>
            <a href="/" className="btn">اقرأ المزيد</a>
          </div>
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>توصيل مجاني</h3>
            <p>نحن نقدم خدمة التوصيل المجاني لضمان راحتك وتوفير وقتك</p>
            <a href="/" className="btn">اقرأ المزيد</a>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>الدفع السهل</h3>
            <p>عملية الدفع لدينا سهلة وميسرة لتجربة تسوق ممتعة وسلسة</p>
            <a href="/" className="btn">اقرأ المزيد</a>
          </div>
        </div>
      </div>
    </section>
  );
}
