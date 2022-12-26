import React from "react";
import "../style/contact.min.css";

import Tmain from "./tmain";

const Contact = () => {
  return (
    <>
      <Tmain main="Contact" />
      <main className={"Contact"}>
        <div className="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-contents">
                <h1>お問い合わせは、下記フォームよりお願いいたします。</h1>
                <form id="form" action="" method="post">
                  <div className="contact-block">
                    <label htmlFor="contact-name">お名前（必須）</label>
                    <input className="contact-name" type="text" />
                  </div>

                  <div className="contact-block">
                    <label htmlFor="contact-mall">メールアドレス（必須）</label>
                    <input className="contact-mall" type="text" />
                  </div>

                  <div className="contact-block">
                    <label htmlFor="contact-message">お問い合わせ内容</label>
                    <input className="contact-message" type="text" />
                  </div>
                  <p className="coment">※現在、こちらの機能は開放しておりません。</p>

                  <input className="form-btn" type="submit" value="送信する" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
