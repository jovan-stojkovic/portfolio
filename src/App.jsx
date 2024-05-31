import { useState } from "react";
import "./Style.scss";
const App = () => {
  const [websiteHide, setWebsiteHide] = useState("hide");
  const [challengeHide, setChallengeHide] = useState("hide");
  const [theme, setTheme] = useState("light");

  return (
    <main className={theme}>
      <div className="container">
        <div className="top-border"></div>
        <div className="left-border"></div>
        <div className="right-border"></div>
        <div className="bottom-border"></div>
        <button
          className="theme"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme}
        </button>
        <div className="contact">
          <p>Belgrade, Serbia</p>
          <p>1.6.1990.</p>
          <p>joca4980@gmail.com</p>
          <p>+391 641559260</p>
        </div>
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
        <div className="dropdowns">
          <div className="website">
            <button
              className={websiteHide}
              onClick={() => {
                setWebsiteHide(websiteHide === "hide" ? "show" : "hide");
                setChallengeHide("hide");
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
                    My first paid project that I've made from start to finish.
                    My only live website for now!
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

          <div className="challenge">
            <button
              className={challengeHide}
              onClick={() => {
                setChallengeHide(challengeHide === "hide" ? "show" : "hide");
                setWebsiteHide("hide");
              }}
            >
              <img src="/icons/down.svg" alt="down" />
              challenges
            </button>
            <div className={`challenges ${challengeHide}`}>
              <article id="multiform">
                <div className="card-data">
                  <h2>Multipage Form</h2>
                  <p className="desc">
                    By far the hardest challenge I've done. Multipage form with
                    validation and price calculations based on monthly or yearly
                    prices.
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://multiform-challenge3.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/multi-step-form-main"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="countries">
                <div className="card-data">
                  <h2>Countries</h2>
                  <p className="desc">
                    The hardest challenge I've done. Fetch data from an API,
                    themes, filtes and much more...
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://countries-react-challenge003.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/Countries-with-React--Alone"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="ecomerce">
                <div className="card-data">
                  <h2>E-Commerce</h2>
                  <p className="desc">
                    E-Commerce challenge with navbar, thumbnails, increasing
                    cart items and price calculations.
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://ecommerce-challenge-3.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/Ecommerce-with-React"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="spending">
                <div className="card-data">
                  <h2>Spending bar chart</h2>
                  <p className="desc">
                    Spending challenge that visualy represents expenses by day.
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://expences-challenge3.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/expenses-chart-challenge"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="pricing">
                <div className="card-data">
                  <h2>Pricing selector</h2>
                  <p className="desc">
                    Simple challenge to change pricing based on the checkbox
                    (annualy or monthly)
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://pricing-component-challenge3.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/pricing-component-challenge"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>
              <article id="tip">
                <div className="card-data">
                  <h2>Tip calculator</h2>
                  <p className="desc">
                    Tip calculator that gives you options to enter bill value,
                    select tip%, number of people and then calculates price and
                    the tip total, and per person
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://tip-calculator-challenge3.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/tip-calculator-app-main"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="snap">
                <div className="card-data">
                  <h2>Snap</h2>
                  <p className="desc">
                    Regular website, where the challenge was dropdown menus in
                    navbar.
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://intro-sectioin-with-dropdown-ch.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/intro-section-with-dropdown-navigation-main"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="advice">
                <div className="card-data">
                  <h2>Advice Generator</h2>
                  <p className="desc">
                    Challenge that fetches advices from an external API on
                    button press and renders it
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://advice-generator-4980.netlify.app/"
                      className="link article-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://advice-generator-4980.netlify.app/"
                      className="link article-github"
                    ></a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
