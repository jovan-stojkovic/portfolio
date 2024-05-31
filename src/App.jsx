import "./Style.scss";
const App = () => {
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
          <button>websites</button>
          <div className="websites hide">
            <article id="decorvision"></article>
          </div>
          <div className="hidden-websites">
            <div className="decorvision"></div>
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
