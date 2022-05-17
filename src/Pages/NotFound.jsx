import image from "../Images/pageNotFound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="main-block error" id="ErrorPage">
        <div className="error-img">
          <img src={image} alt="Page not found" width="350px" height="350px" />
        </div>
        <p>Could not be found. Please enter a different location.</p>
      </div>
    </div>
  );
};

export default NotFound;
