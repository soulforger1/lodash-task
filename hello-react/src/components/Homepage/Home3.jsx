import picture from "../../assets/image/home2.png";


export const Home3 = () => {
  return (
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
        <img alt="home3" src={picture} />
      </div>
  );
};
