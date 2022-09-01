import React from "react";
import background from "../assets/image/HomePageBG.png";
import meetings from "../assets/icon/meetings.svg";
import home1 from "../assets/image/home1.png";
import home2 from "../assets/image/home2.png";
import stars from "../assets/image/stars.png";
import pro1 from "../assets/image/pro1.png";
import { Footer, HeaderHome } from "../components";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

export const Home = () => {
  return (
    <div className="d-flex flex-column gap-5">
      <div
        style={{
          height: "80vh",
          backgroundSize: "cover",
          backgroundImage: `url(${background})`,
        }}
      >
        <HeaderHome />
        <div
          className="d-flex flex-column justify-content-center ps-10"
          style={{ width: "40%", height: "100%" }}
        >
          <h1 className="text-white fw-bold mb-4" style={{ width: "100%" }}>
            Instant collaborations for remote teams
          </h1>
          <div className="mb-5" style={{ width: "70%" }}>
            <p className="text-white">
              All in one for your remote team chats, collaboration and track
              projects
            </p>
          </div>
          <div
            className="d-flex m-0 p-0 gap-3"
            style={{ width: "500px", height: "50px" }}
          >
            <input
              placeholder="Email"
              className="border border-dark ps-3"
              style={{ width: "280px", height: "100%", outline: "none" }}
            />
            <button
              className="btn btn-info text-white"
              style={{ width: "160px", height: "100%" }}
            >
              Get early access
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "50%" }}
        >
          <div className="d-flex flex-column gap-3">
            <h1 className="fw-bold" style={{ width: "20vw" }}>
              Your Hub for teamwork
            </h1>
            <p style={{ width: "28vw" }}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <a href="/" className="">
              Learn more
            </a>
          </div>
        </div>
        <img alt="meetings" src={meetings} />
      </div>
      <div className="d-flex pe-10 gap-10">
        <img alt="home1 pic" className="ps-3" src={home1} />
        <div className="d-flex flex-column justify-content-center">
          <h1 className="fw-bold" style={{ width: "15vw" }}>
            Simple task management
          </h1>
          <p style={{ width: "28vw" }}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a href="/" className="">
            Learn more
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-10">
        <div className="d-flex flex-column  justify-content-center">
          <h1 className="fw-bold" style={{ width: "25vw" }}>
            Scheduling that actually works
          </h1>
          <p style={{ width: "28vw" }}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a href="/" className="">
            Learn more
          </a>
        </div>
        <img alt="home2 pic" src={home2} />
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="fw-bold">What people say about us</h1>
      </div>
      {/* <div className="container-fluid py-2">
        <div className="d-flex row flex-nowrap" style={{whiteSpace: 'nowrap'}}>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
          <div className="card card-body" style={{width: '500px'}}>Card</div>
        </div>
      </div> */}
      <ScrollMenu className="d-flex gap-5" style={{overflow: 'hidden'}}>
        <div className="ms-10" />
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
        <div className="card ms-4 p-4 d-flex flex-column gap-3" style={{ width: "366px" }}>
          <img src={stars} style={{ width: "120px" }} />
          <p className="card-body p-0">
            Give everyone you work with—inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <div className="d-flex flex-row align-items-center gap-3">
            <img src={pro1} style={{ width: "56px" }} />
            <p>Andy</p>
          </div>
        </div>
      </ScrollMenu>
      <Footer />
    </div>
  );
};
