import background from "../../assets/image/HomePageBG.png";
// import { HeaderHome } from "../../components";

export const HomebgHeader = () => {
  return (
    <div
      style={{
        height: "80vh",
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
      }}
    >
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
  );
};
