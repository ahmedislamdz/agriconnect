// Banner
import React from 'react';
import './Banner.css';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/1.png") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          منتجات
          {' '}
          <span>طازجة وعضوية</span>
        </h3>
        <p>
        لدينا أفضل منتجات! تسوق الآن واستمتع بجودة لا تضاهى
        </p>
        <Link to={"/Products"} >
          <button type="button" className="btn">
            تسوق الآن
          </button>
        </Link>
      </div>
    </section>
  );
}
