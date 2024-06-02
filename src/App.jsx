import { useEffect, useRef, useState } from "react";
import "./Style.scss";
import VanillaTilt from "vanilla-tilt";

const App = () => {
  const [websiteHide, setWebsiteHide] = useState("hide");
  const [challengeHide, setChallengeHide] = useState("hide");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  VanillaTilt.init(document.querySelectorAll(".article-website"), {
    max: 3,
    speed: 200,
    scale: 1.1,
    glare: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  });

  VanillaTilt.init(document.querySelectorAll(".article-challenge"), {
    max: 5,
    speed: 800,
    scale: 1.3,
    glare: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  });

  return (
    <main className={theme}>
      <div className="container">
        <div className="top-border brdr"></div>
        <div className="left-border brdr"></div>
        <div className="right-border brdr"></div>
        <div className="bottom-border brdr"></div>
        <div className="absolute-buttons">
          <button
            onClick={() => {
              setLanguage(language === "english" ? "srpski" : "english");
            }}
          >
            {language}
          </button>
          <button
            className="theme"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme}
          </button>
        </div>

        <div className="contact">
          <p>{language === "english" ? "Belgrade, Serbia" : "Beograd"}</p>
          <p>{language === "english" ? "june 1st, 1990" : "1.6.1990."}</p>
          <p>joca4980@gmail.com</p>
          <p>+381 641559260</p>
        </div>
        <div className="info-div">
          <div className="left" data-tilt>
            <h1>
              {language === "english" ? "Jovan Stojkovic" : "Jovan Stojković"}
            </h1>
            <p>Frontend Developer /javascript - react JS/ </p>
          </div>
          <div className="right">
            <a
              href="https://www.linkedin.com/in/jovan-stojkovi%C4%87-0a28bb296/"
              target="_blank"
              className="linkedin"
            >
              <p>Linkedin</p>
            </a>
            <a
              href="https://drive.google.com/file/d/1nelDd0igCuTE5NbJzIBaGnioYf4p1iDv/view"
              target="_blank"
              className="CV"
            >
              <p>{language === "english" ? "resume" : "cv"}</p>
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
          <div className="website dropdown">
            <button
              className={websiteHide}
              onClick={() => {
                setWebsiteHide(websiteHide === "hide" ? "show" : "hide");
                setChallengeHide("hide");
              }}
            >
              {language === "english" ? "Websites" : "Sajtovi"}
              <img src="/icons/down.svg" alt="down" />
            </button>
            <div className={`websites article-cont ${websiteHide}`}>
              <article id="decorvision" className="article-website">
                <div className="card-data">
                  <h2>Decor Vision</h2>
                  <p className="desc">
                    {language === "english"
                      ? "My first paid project that I've made from start to finish. My only live website for now!"
                      : "Moj prvi honorarni projekat koji sam uradio od početka do kraja. Za sada jedini 'živi' sajt!"}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://decorvision.rs/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/decor-vision"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>
              <article id="game" className="article-website">
                <div className="card-data">
                  <h2>Rock, paper, scissors, lizard, Spock</h2>
                  <p className="desc">
                    {language === "english"
                      ? "My own project of making the game from popular TV show 'The Big Bang Theory'"
                      : "Lično moj projekat, gde sam napravio igru iz popularne TV serije 'Štreberi'"}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://sheldons-game-desktop.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/The-Sheldon-Game"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="challenge dropdown">
            <button
              className={challengeHide}
              onClick={() => {
                setChallengeHide(challengeHide === "hide" ? "show" : "hide");
                setWebsiteHide("hide");
              }}
            >
              <img src="/icons/down.svg" alt="down" />
              {language === "english" ? "Challenges" : "Izazovi"}
            </button>
            <div className={`challenges article-cont ${challengeHide}`}>
              <article id="multiform" className="article-challenge">
                <div className="card-data">
                  <h2>
                    {language === "english"
                      ? "Multipage Form"
                      : "Forma na više strana"}
                  </h2>
                  <p className="desc">
                    {language === "english"
                      ? "By far the hardest challenge I've done. Multipage form with validation and price calculations based on monthly or yearly prices."
                      : "Ubedljivo najteži izazov koji sam radio. Forma na nekoliko strana sa validacijom i računanjem cene na osnovu mesečne ili godišnje pretplate."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://multiform-challenge3.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/multi-step-form-main"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="countries" className="article-challenge">
                <div className="card-data">
                  <h2>{language === "english" ? "Countries" : "Države"}</h2>
                  <p className="desc">
                    {language === "english"
                      ? "Pretty hard challenge. Fetch data from an API, themes, filtes and much more..."
                      : "Prilično zahtevan izazov. Potrebno je dohvatiti podatke sa API-ja, postoje teme, filteri i još dosta toga..."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://countries-react-challenge003.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/Countries-with-React--Alone"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="ecomerce" className="article-challenge">
                <div className="card-data">
                  <h2>E-Commerce</h2>
                  <p className="desc">
                    {language === "english"
                      ? "E-Commerce challenge with navbar, thumbnails, increasing cart items and price calculations."
                      : "Izazov sa navbar-om, slikama i korpom sa više proizvoda."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://ecommerce-challenge-3.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/Ecommerce-with-React"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="spending" className="article-challenge">
                <div className="card-data">
                  <h2>
                    {language === "english"
                      ? "Spending bar chart"
                      : "Grafikon za potrošnju"}
                  </h2>
                  <p className="desc">
                    {language === "english"
                      ? "Spending challenge that visualy represents expenses by day."
                      : "Izazov koji prikazuje troškove po danima u vidu grafikona."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://expences-challenge3.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/expenses-chart-challenge"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="pricing" className="article-challenge">
                <div className="card-data">
                  <h2>
                    {language === "english"
                      ? "Pricing selector"
                      : "Selektor plaćanja"}
                  </h2>
                  <p className="desc">
                    {language === "english"
                      ? "Simple challenge to change pricing based on the checkbox (annualy or monthly)."
                      : "Jednostavan izazov za menjanje cene na osnovu štikliranja (mesečno ili godišnje)."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://pricing-component-challenge3.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/pricing-component-challenge"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="tip" className="article-challenge">
                <div className="card-data">
                  <h2>
                    {language === "english"
                      ? "Tip calculator"
                      : "Kalkulator za bakšiš"}
                  </h2>
                  <p className="desc">
                    {language === "english"
                      ? "Tip calculator that gives you options to enter bill value, select tip%, number of people and then calculates price and the tip total, and per person."
                      : "Kalkulator bakšiša koji nudi opcije za unošenje računa, procenta bakšiša, broja ljudi i onda izračuna ukupan račun, bakšiš i podeli po osobama."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://tip-calculator-challenge3.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/tip-calculator-app-main"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="snap" className="article-challenge">
                <div className="card-data">
                  <h2>Snap</h2>
                  <p className="desc">
                    {language === "english"
                      ? "Regular website, where the challenge was dropdown menus in navbar."
                      : "Običan vebsajt, izazov su padajući meniji u navbaru."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://intro-sectioin-with-dropdown-ch.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://github.com/jovan-stojkovic/intro-section-with-dropdown-navigation-main"
                      className="link link-github"
                    ></a>
                  </div>
                </div>
              </article>

              <article id="advice" className="article-challenge">
                <div className="card-data">
                  <h2>
                    {language === "english"
                      ? "Advice Generator"
                      : "Generator za savete"}
                  </h2>
                  <p className="desc">
                    {language === "english"
                      ? "Challenge that fetches advices from an external API on button press and renders it."
                      : "Izazov da se dohvate podaci sa API-ja na pritisak dugmeta i da se prikaže savet korisniku."}
                  </p>
                  <div className="article-links">
                    <a
                      target="_blank"
                      href="https://advice-generator-4980.netlify.app/"
                      className="link link-website"
                    ></a>
                    <a
                      target="_blank"
                      href="https://advice-generator-4980.netlify.app/"
                      className="link link-github"
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
