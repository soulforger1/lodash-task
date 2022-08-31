import picture from "../../assets/icon/meetings.svg";


export const Home1 = () => {
  return (
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
      <img alt="alt" src={picture} />
    </div>
  );
};
