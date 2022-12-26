import React from "react";
import "../style/home.min.css";
import IMG_MAIN from "../images/TKM.png";
import IMG_WATER from "../images/water.png";
import IMG_PS from "../images/Ps.png";
import IMG_AI from "../images/Ai.png";
import IMG_HTMLCSSJS from "../images/HTMLCSSJS.png";
import IMG_PY from "../images/python.png";
import IMG_PROFILE from "../images/kingyo.jpeg";
import { Button } from "./Entrycomponents";

const Home = () => {
  return (
    <>
      <main className={"Home"}>
        <section className={"Init"}>
          <img
            src={IMG_MAIN}
            alt="TKMLOGO"
            width={"500px"}
            height={"auto"}
            className={"Main-TKM"}
          />
          <div className="philo">
            <h1>design & engineering</h1>
            <p className="homep">
              シンプルで操作しやすいデザインに特化したプロダクトを制作します。{" "}
            </p>
          </div>
          <Button />
          <div className="contact"></div>
        </section>
        <section className={"Vision"}>
          <h1>vision</h1>
          <h2>自由に作る。 </h2>
          <p>
            <br />
            個人でも、システムやWebサイトを使って遊べる時代。
            <br />
            <br />
            ITの技術革新が目まぐるしく、ありがたいことに便利なツールが次々を登場しています。<br />
            システム開発やWebサイト制作の学習コストがどんどん下がってきています。
            <br />
            <br />
            誰でも簡単にプログラム書いて、自己実現ができるように。<br />まずは自分から歩みを進めます。
            <br />
          </p>
          <img
            src={IMG_WATER}
            alt="TKMLOGO"
            width={"350px"}
            height={"auto"}
            className={"WATER-img"}
          />
        </section>
        <section className={"PROFILE"}>
          <h1>profile</h1>
          <h2>デザイナー</h2>
          <div className="flex">
            <img
              src={IMG_PROFILE}
              alt="PROFILE"
              width={"330px"}
              height={"auto"}
              className={"PROFILE-TKM"}
            />
            <p className="bun">
              全くのIT未経験ということで、分からないことだらけで頭を抱える日々。
              <br />
              <br />
              細かい作業とエラーが大嫌い。
              <br />
              それでも、毎日楽しんで、なんとか頑張っています。
              <br />
              <br />
              よろしくお願いします。 <br />
              <br />
            </p>
          </div>
          <p className="namae">Takumi</p>
        </section>
        <section className={"WORKS"}>
          <h1>Works</h1>
          <h2>私が提供できるスキルは以下の通りです。</h2>
          <div className="article_all">
            <article className="article_element">
              <h3>WEBデザイン</h3>
              <small className="article_small">Website Production</small>
              <div className="center-img">
                <img
                  src={IMG_HTMLCSSJS}
                  alt="PROFILE"
                  width={"350px"}
                  height={"auto"}
                  className={"HTMLCSSJS"}
                />
              </div>
              <p>
                <br/>
                デザイン性に特化したコーポレートサイトや個人ブログなどのWebサイトを制作します。
                <br />
                SEO対策も重視し、ご要望次第では新しいユーザー体験を実現するSPA（シングルページアプリケーション）
                の技術を用いたWebサイトを構築します。
              </p>
            </article>
            <article className="article_element">
              <h3>LOGOデザイン</h3>
              <small className="article_small">Icon Production</small>
              <div className="center-img">
                <div className="AiPsWr">
                  <img
                    src={IMG_AI}
                    alt="TKMLOGO"
                    width={"170px"}
                    height={"auto"}
                    className={"AiPs"}
                  />
                  <img
                    src={IMG_PS}
                    alt="TKMLOGO"
                    width={"170px"}
                    height={"auto"}
                    className={"AiPs"}
                  />
                </div>
              </div>
              <p>
                コーポレートロゴやその他デザイン全般を制作します。
                形式(PNG/JPEG/SVG)からサイズまで要望に合わせてのご提供を心がけます。
                <br />
                以下、作品例をインスタグラムよりご確認ください。
                <br />
                <br />
              </p>
              <div className="AO">
                <a
                  href="https://www.instagram.com/tkm201010/?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </article>
            <article className="article_element">
              <h3>自動化ツール</h3>
              <small className="article_small">Automation Tools</small>
              <div className="center-img">
                <img
                  src={IMG_PY}
                  alt="PROFILE"
                  width={"220px"}
                  height={"auto"}
                  className={"PY"}
                />
              </div>
              <p className="comingsoon">coming soon...</p>
              <p className="AO">
                現在、WEBスクレイピング技術や、PC自動操作技術について研究。
                <br />
              </p>
              <p className="cn">２０２３</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
