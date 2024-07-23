import "./HomeBanner.scss";
import { Link } from "react-router-dom";
function HomeBanner(props) {
  return (
    <section className="home_banner_area mb-40">
      {/* class home_banner_area trong file style.css chứa background banner  */}
      <div
        className="box-banner"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="banner_inner d-flex align-items-center absoluteBanner">
          <div className="container H_100vh">
            <div className="banner_content">
              <div className="col-lg-12">
                <p className="sub text-uppercase">{props.name}</p>
                <h3>
                  <span>{props.description}</span>
                </h3>
                <Link className="main_btn mt-40" to={"/shop"}>
                  Xem cửa hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
