import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getDetailProductByIdService,
  getProductRecommendService,
} from "../../services/userService";
import ImgDetailProduct from "../../component/Product/ImgDetailProduct";
import InfoDetailProduct from "../../component/Product/InfoDetailProduct";
import CommentProduct from "../../component/Product/CommentProduct";
import ProfileProduct from "../../component/Product/ProfileProduct";
import ReviewProduct from "../../component/Product/ReviewProduct";
import DescriptionProduct from "../../component/Product/DescriptionProduct";
import NewProductFeature from "../../component/HomeFeature/NewProductFeature";
import ProductFeature from "../../component/HomeFeature/ProductFeature";
function DetailProductPage(props) {
  const [dataProduct, setDataProduct] = useState({});
  const [dataDetailSize, setdataDetailSize] = useState({});
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [dataProductRecommend, setdataProductRecommend] = useState([]);
  useEffect(async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      fetchProductFeature(userData.id);
      setUser(userData);
    }

    window.scrollTo(0, 0);

    fetchDetailProduct();
  }, []);
  let sendDataFromInforDetail = (data) => {
    setdataDetailSize(data);
  };
  let fetchDetailProduct = async () => {
    let res = await getDetailProductByIdService(id);
    if (res && res.errCode === 0) {
      setDataProduct(res.data);
    }
  };
  let fetchProductFeature = async (userId) => {
    let res = await getProductRecommendService({
      limit: 20,
      userId: userId,
    });
    if (res && res.errCode === 0) {
      setdataProductRecommend(res.data);
    }
  };
  return (
    <div>
      <section className="mt-3 mb-5">
        <hr />
      </section>
      <div className="">
        <div className="container">
          <InfoDetailProduct
            userId={user && user.id ? user.id : ""}
            dataProduct={dataProduct}
            sendDataFromInforDetail={sendDataFromInforDetail}
          >
            {" "}
          </InfoDetailProduct>
        </div>
      </div>
      <section
        className="product_description_area"
        style={{ marginTop: "70px" }}
      >
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Thông số chi tiết
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Mô tả chi tiết
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                Đánh giá
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <ProfileProduct data={dataDetailSize} />
            </div>
            <div
              className="tab-pane fade "
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <DescriptionProduct data={dataProduct.contentHTML} />
            </div>

            <div
              className="tab-pane fade"
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <ReviewProduct />
            </div>
          </div>
        </div>
        {user && dataProductRecommend && dataProductRecommend.length > 0 && (
          <ProductFeature
            title={"Sản phẩm bạn quan tâm"}
            data={dataProductRecommend}
          ></ProductFeature>
        )}
      </section>
    </div>
  );
}

export default DetailProductPage;
