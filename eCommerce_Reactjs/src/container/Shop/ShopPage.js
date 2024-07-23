import React, { useState, useRef, useEffect } from "react";
import MainShop from "../../component/Shop/MainShop";
import Category from "../../component/Shop/Category";
import Brand from "../../component/Shop/Brand";
import Pagination from "../../component/Shop/Pagination";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function ShopPage(props) {
  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);

  const [categoryId, setcategoryId] = useState("");
  const [brandId, setbrandId] = useState("");
  const myRef = useRef(null);
  let handleRecevieDataCategory = (code) => {
    setcategoryId(code);
  };
  let handleRecevieDataBrand = (code) => {
    setbrandId(code);
  };
  return (
    <div>
      <section className="mt-3 mb-5">
        <hr />
      </section>
      <section className="cat_product_area">
        <div className="container">
          <div className="row flex-row-reverse">
            <MainShop categoryId={categoryId} brandId={brandId} myRef={myRef} />
            <div className="col-lg-3">
              <div className="left_sidebar_area">
                <Category
                  handleRecevieDataCategory={handleRecevieDataCategory}
                />
                <Brand handleRecevieDataBrand={handleRecevieDataBrand} />
              </div>
            </div>
          </div>
          {/* <Pagination amountPage={3}
                        myFunction={{ changePage: handleChangePage, changePerPage: handleChangePage }}></Pagination> */}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default ShopPage;
