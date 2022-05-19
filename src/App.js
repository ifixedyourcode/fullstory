import Banner from './images/Bulb.png'
import HeroFiller from './images/HeroFiller.png'
import Book from './images/Book.png'
import Why from './images/Why.gif'
import Phone from './images/Phone.gif'
import Revune from './images/Revune.png'
import Improve from './images/Improve.png'
import Growth from './images/Growth.png'
import './App.scss'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-muted navbar-dark py-3 fixed-top  ">
        <div className="container">
          <a href="#" className=" text-dark Main-font logo-font ">
            fullstory
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#learn" className="nav-link text-dark">
                  Login
                </a>
              </li>
              <li className="nav-item ">
                <a
                  href="#questions"
                  className="nav-link btn btn-success text-white px-4 "
                >
                  Sign-up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-primary Sec-pad-2 ">
        <div className="container text-white">
          <div className=" d-flex justify-content-center align-items-center  ">
            <div>
              <h1 className="text-center mb-4 display1 w-sm-50 Main-font pt-5 pt-sm-1 display-2">
                Digital Experience Intelligence
              </h1>
              <p className=" text-center  lead w-sm-50 ">
                Combine quantitative and qualitative data for comprehensive
                understanding to perfect your digital experience.
              </p>

              <div className="d-flex align-center justify-content-center align-sm-start">
                <button className="btn btn-lg bg-success text-white mt-2 py-2 px-5 ">
                  Get a Demo
                </button>
              </div>
            </div>
            <div>
              <img
                src={Phone}
                alt=""
                className="img-fluid mx-3 d-sm-block d-none"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-muted">
        <div className="container">
          <h2 className="p-2 text-primary text-center">
            Powerful results for your business
          </h2>
        </div>
      </div>

      <section className="bg-white ">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div>
              <img src={Why} alt="" className="img-fluid " />
            </div>
            <div className="text-dark px-2  ">
              <h3 className="text-left text-start py-1 px-3 pt-xl-5 mt-xl-4  Main-font">
                Complete digital data, instrumentation-free
              </h3>
              <p className="lead  px-1 pb-1 px-3">
                A DXI platform combines rich analytics, robust session detail,
                and collaboration tools to help you answer questions, understand
                issues, and uncover opportunities—and then put that knowledge to
                work.
              </p>

              <h3 className="text-left text-start py-2 px-3 pt-xl-5 mt-xl-4  Main-font">
                Fast implementation meets easy to use
              </h3>
              <p className="lead  px-1 pb-1 px-3">
                Technical and non-technical teams alike can rely on FullStory
                for necessary information, reducing costly back-and-forth and
                increasing throughput.
              </p>

              <h3 className="text-left text-start py-2 px-3 pt-xl-5 mt-xl-4  Main-font">
                Privacy controls that protect your customers and you
              </h3>
              <p className="lead  px-1 pb-1 px-3 pb-md-5">
                Every FullStory account is equipped with a robust suite of tools
                to manage privacy, consent, and selective exclusion of on-screen
                text. You can see the shape of your customer's experience
                without capturing data you don't need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted ">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between ">
            <div className="text-dark px-2  ">
              <h1 className="text-left text-start py-4 px-3 display-2 pt-xl-5 mt-xl-4  Main-font">
                Digital intelligence means
                <span className="text-primary "> competitive</span> advantage
              </h1>
              <p className="lead  p-1 pb-3 px-3">
                Creating amazing digital experiences is the next crucial path in
                competing for customer delight—and, ultimately, sales. Every
                user has a story, and old, tag-based analytics tools only give
                you a tiny slice of that story. As memory and compute costs go
                down, brands should demand more insights and perfect recall of
                the critical moments in every user's story—eliminating guesswork
                so you know exactly how to deliver the most perfect digital
                experience.
              </p>
            </div>
            <div>
              <img
                src={Banner}
                alt=""
                className="img-fluid d-none d-md-block "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="Sec-pad">
        <div className="container">
          <div className="d-sm-flex">
            <div>
              <div className="d-flex justify-content-center mb-3 ">
                <img src={Revune} alt="" />
              </div>
              <h2 className="px-4 text-center">
                Increase revenue through better conversion
              </h2>
              <p className="px-4 text-center">
                Identify revenue-impacting issues, understand how many customers
                are affected, and contextualize this data with real user
                sessions.
              </p>
            </div>

            <div>
              <div className="d-flex justify-content-center mb-3">
                <img src={Improve} alt="" />
              </div>
              <h2 className="px-4 text-center">
                Improve organizational efficiency
              </h2>
              <p className="px-4 text-center">
                Empower engineers with the data they need to identify,
                troubleshoot, and remediate bugs efficiently and effectively.
              </p>
            </div>

            <div>
              <div className="d-flex justify-content-center mb-3">
                <img src={Growth} alt="" />
              </div>
              <h2 className="px-4  text-center">
                Boost customer growth and retention
              </h2>
              <p className="px-4  text-center">
                Empower engineers with the data they need to identify,
                troubleshoot, and remediate bugs efficiently and effectively.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center ">
            <button className="btn btn-lg bg-success text-white  mt-4">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* <section className="bg-success Sec-pad-2">
        <div className="container">
          <h1>Trusted by thousands of digital product teams like yours</h1>
          <div className="d-sm-flex">

          </div>
        </div>
      </section> */}

      <footer className="bg-secondary ">
        <div className="container">
          <h5 className=" text-center p-2 text-white">
            © 2022 FullStory, Inc | Atlanta ◆ London ◆ Sydney
          </h5>
        </div>
      </footer>
    </div>
  )
}

export default App
