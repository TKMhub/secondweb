import React from "react";
import "../style/about.min.css";
// import IMGWORD from "../images/wordpress.png";
import Tmain from "./tmain";

const Skills = () => {
  return (
    <>
      <Tmain main="About"/>
      <main className={"About"}>
        <div className="cont">
          <h2>Career</h2>
          <article>
            <p className="aboutp">2017.4.1</p>
          </article>
          <article className="moji">
            <p className="aboutp">
            大学入学。大学時代は生命科学部に所属。<br/>
            研究成果を論文にまとめる作業で、Pythonによるデータ分析をした事がきっかけで、IT技術を独学で学び始める。
            </p>
          </article>
          <article>
            <p className="aboutp">2020.10.10</p>
          </article>
          <article className="moji">
            <p className="aboutp">
            Adobe社が提供するIllustratorやPhotoshop、PremierePro学ぶ。
            企業や団体ロゴ制作の仕事をする。<br/>
            また、動画編集を趣味としてコロナ禍を過ごしておりました。
            </p>
          </article>
          <article>
            <p className="aboutp">2021.4.1</p>
          </article>
          <article className="moji">
            <p className="aboutp">
            IT企業に就職。<br/>
            並行してWeb技術の学習を継続中。現在に至る。 
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default Skills;
