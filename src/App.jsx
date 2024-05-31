import { useState } from "react";
import "./Style.scss";
const App = () => {
  const [websiteHide, setWebsiteHide] = useState("hide");
  return (
    <main>
      <div className="container">
        <div className="top-border"></div>
        <div className="left-border"></div>
        <div className="right-border"></div>
        <div className="bottom-border"></div>
        <button className="theme">light</button>
        <div className="info-div">
          <div className="left">
            <h1>Jovan Stojković</h1>
            <p className="desc">Frontend Developer /javascript; react JS/ </p>
          </div>
          <div className="right">
            <a
              href="https://drive.google.com/file/d/1nelDd0igCuTE5NbJzIBaGnioYf4p1iDv/view"
              target="_blank"
              className="CV"
            >
              <p>Resume</p>
            </a>
            <a
              href="https://github.com/jovan-stojkovic"
              target="_blank"
              className="github"
            >
              <p>github</p>
            </a>
          </div>
        </div>

        <div className="website">
          <button
            className={websiteHide}
            onClick={() => {
              setWebsiteHide(websiteHide === "hide" ? "show" : "hide");
            }}
          >
            websites
            <img src="/icons/down.svg" alt="down" />
          </button>
          <div className={`websites ${websiteHide}`}>
            <article id="decorvision">
              <div className="card-data">
                <h2>Decor Vision</h2>
                <p className="desc">
                  My first paid project that I've made from start to finish. My
                  only live website for now!
                </p>
                <div className="article-links">
                  <a
                    target="_blank"
                    href="https://decorvision.rs/"
                    className="link article-website"
                  ></a>
                  <a
                    target="_blank"
                    href="https://github.com/jovan-stojkovic/decor-vision"
                    className="link article-github"
                  ></a>
                </div>
              </div>
            </article>
            <article id="game">
              <div className="card-data">
                <h2>Sheldon's Game</h2>
                <p className="desc">
                  My own project of making the game from popular TV show 'The
                  Big Bang Theory'
                </p>
                <div className="article-links">
                  <a
                    target="_blank"
                    href="https://sheldons-game-desktop.netlify.app/"
                    className="link article-website"
                  ></a>
                  <a
                    target="_blank"
                    href="https://github.com/jovan-stojkovic/The-Sheldon-Game"
                    className="link article-github"
                  ></a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="challenges">
          <h2>Challenges</h2>
          <div className="hidden-challenges">
            <div className="pricing"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
