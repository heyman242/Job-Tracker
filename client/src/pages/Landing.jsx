import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            
           
            <h7>
              - Browse job categories.
            </h7>
            <br />
            <h7>- Track application status.</h7>
            <br />
            <h7>- View all applied jobs in one place.</h7>
            <br />
            <h7>- Get valuable stats on your applications.</h7>
            <br />
            <h7>- Update profile & upload profile photo.</h7>
            <br />
            <h7>- Dark mode for comfortable browsing.</h7>
            <br />
            
          </p>
          <Link to="/register" className="btn register-link">
            register
          </Link>
          <Link to="/login" className="btn ">
            login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
