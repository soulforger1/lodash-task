import picture from "../../assets/image/home1.png";


export const Home2 = () => {
  return (
    <div className="d-flex pe-10 gap-10">
        <img alt="home1" className="ps-3" src={picture} />
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
  );
};
