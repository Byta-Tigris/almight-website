import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="almight__blog section__padding" id="blog">
    <div className="almight__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are rolling out these services soon.</h1>
    </div>
    <div className="almight__blog-container">
      <div className="almight__blog-container_groupA">
        <Article imgUrl={blog01} text="USER INTERACTIVE WORKSPACE" />
      </div>
      <div className="almight__blog-container_groupB">
        <Article imgUrl={blog02}  text="AUTHENTICATION SYSTEM AND PROVIDER" />
        <Article imgUrl={blog03}  text="DATABASE AND STORAGE" />
        <Article imgUrl={blog04}  text="NODES AND GRAPH EXPLORER" />
        <Article imgUrl={blog05}  text="Dapp HOSTING" />
      </div>
    </div>
  </div>
);

export default Blog;