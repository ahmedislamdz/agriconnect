import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Blogs from './Blogs';
import './Main.css';

export default function Main() {
  
  return (
    <div className="main">
      <Banner />
      <Features />
      <Blogs />
    </div>
  );
}
