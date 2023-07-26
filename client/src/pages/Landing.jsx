import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            similique ipsum amet maxime porro, molestias velit numquam voluptas
            quo? Fugit consequatur error aspernatur adipisci quidem dicta,
            tenetur quasi accusamus architecto.
          </p>
          <Link to="/register" className="btn register-link">register</Link>
          <Link to="/login" className="btn ">login / Demo User</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
