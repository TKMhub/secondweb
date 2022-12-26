import React from "react";
import "../style/skills.min.css";
import IMGREACT from "../images/React.png";
import IMGNEXT from "../images/Nextjs.png";
import IMGVUE from "../images/Vuejs.png";
import IMGQL from "../images/GraphQL.png";
import IMGSASS from "../images/SASS.png";
import IMGTS from "../images/TS.png";
import IMGPY from "../images/python.png";
import IMGWORD from "../images/wordpress.png";
import IMGSVG from "../images/TKMsvg.svg";
import Tmain from "./tmain";

const Skills = () => {
  return (
    <>
      <Tmain main="Skills"/>
      <main className={"Skills"}>
        <div className="cont">
          <h2>Frontend</h2>
          <article>
            <p>React</p>
            <p>NextJs</p>
            <p>VueJs</p>
          </article>
          <div className="SKILL_image">
            <img
              src={IMGREACT}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILLTKM"}
            />
            <img
              src={IMGNEXT}
              alt="TKMLOGO"
              width={"280px"}
              height={"auto"}
              className={"SKILLTKM"}
            />
            <img
              src={IMGVUE}
              alt="TKMLOGO"
              width={"180px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
          </div>
          <article className="moji">
            <p>
              ReactベースのNextJsの導入をすることで、より速く、より簡単にWeb画面を構築します。
              <br />
              また従来のWebサイトと比較すると、ページ遷移にロードが不要となる、SPA（シングルページアプリケーション）
              を実現し、ハイレベルなユーザー体験をご提供します。
            </p>
          </article>
        </div>

        <div className="cont">
          <h2>Backend</h2>
          <article>
            <p>GraphQL</p>
          </article>
          <div className="SKILL_image">
            <img
              src={IMGQL}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
            <img
              src={IMGWORD}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
          </div>
          <article className="moji">
            <p>
              GraphQLやワードプレスを用いて簡単に管理画面から操作可能なバックエンド環境を構築します。<br />
              例えば、ブログを上記のWebアプリケーションを通して投稿や編集ができる機能を実装します。
            </p>
          </article>
        </div>

        <div className="cont">
          <h2>Web</h2>
          <article>
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
          </article>
          <div className="SKILL_image">
            <img
              src={IMGSASS}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
            <img
              src={IMGTS}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
          </div>
          <article className="moji">
            <p>
              CSSからSASS。JavaScriptからTypeScriptへ。<br />
              最新の技術を取り入れ、より保守性・堅牢性の高いWeb画面の構築を実現します。
            </p>
          </article>
        </div>
        <div className="cont">
          <h2>design</h2>
          <article>
            <p>Illustrator</p>
            <p>Photoshop</p>
          </article>
          <div className="SKILL_image">
          <img
              src={IMGSVG}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
            {/* <img
              src={IMGTS}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            /> */}
          </div>
          <article className="moji">
            <p>
              ロゴやバナー制作を通して、事業や活動のブランディングイメージ向上を実現します。<br />
              また、SVGデータを用いたっ画質劣化のないWeb画面を実現します。<br />
              Premiere Proを用いた動画編集では、様々なエフェクトを用いた、オリジナルムービーの制作も可能です。
              <br />
              <br /> 
              過去の制作実績に関しては以下のInstagramリンクよりご覧ください。
            </p>
            <div className="AO"><a href="https://www.instagram.com/tkm201010/?hl=ja" target="_blank" rel="noopener noreferrer">Instagram</a></div>
          </article>
        </div>

        <div className="cont">
          <h2>Others</h2>
          <article>
            <p>Python</p>
          </article>
          <div className="SKILL_image">
            <img
              src={IMGPY}
              alt="TKMLOGO"
              width={"200px"}
              height={"auto"}
              className={"SKILL-TKM"}
            />
          </div>
          <article className="moji">
            <p>
              最後に将来的な展望をご紹介します。<br />
              今後、フロントエンド技術の向上に加え、バックエンドのAPI設計まで習得し、独自サービスを展開することが目標です。
              具体的にはPythonを用いた自動化ツールを開発し、社会の生産性を大幅に向上させることを目指します。
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default Skills;
