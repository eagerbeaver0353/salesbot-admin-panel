import Image from "../content/image/Image";

const MyNavbar = () => {
  return (
    <>
      <div className="container-fluid bg-dark border-bottom">
        <nav className="navbar navbar-dark bg-dark justify-content-between container ">
          <a className="navbar-brand">Chat Bot</a>

          <Image
            className={"rounded-circle"}
            src="https://preview.keenthemes.com/metronic8/demo34/assets/media/avatars/300-13.jpg"
            alt="profile"
            style={{ width: "40px", height: "40px" }}
          />
        </nav>
      </div>
    </>
  );
};
export default MyNavbar;
