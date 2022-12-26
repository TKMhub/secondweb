import React from "react";
import "../style/blog.min.css";
import Tmain from "./tmain";
import IMGBT from "../images/IMG_1520.PNG"

const Blog = () => {
  return (
    <>
      <Tmain main="Blog" />
      <h1 className="setumei">
        GraphQLを用いてバックエンド（データベース）連携をしたブログサンプルをご紹介します。
      </h1>
      <p className="blogp">以下のイメージをクリックしてください。</p>
      <div className="centersnow">
        <a href="https://nextjs-md-blog-five.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={IMGBT} alt="imag" width={"400px"} height={"auto"} className="SNOWTH"/>
      </a>
      </div>
    </>
  );
};

export default Blog;
