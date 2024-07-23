import React from "react";
import { Link } from "react-router-dom";
import "./HomeBlogItem.scss";
function HomeBlogItem(props) {
  console.log("props", props);
  return (
    <div className="">
      <Link className="d-block" to={`/blog-detail/${props.data.id}`}>
        <div className="box-blog">
          <div className="box-blog-image">
            <img src="https://www.carmudi.vn/_next/image/?url=https://static.carmudi.vn/wp-content/uploads/2024-07/g3VANSktV9.jpg&w=1200&q=75" />
          </div>
          <div className="box-blog-content">
            <h3 className="title-blog">
              Khám Phá 6 Mẫu Ô Tô Lý Tưởng Cho Chuyến Du Lịch Đường Dài
            </h3>
            <span className="user-blog">admin</span>
            <div>
              <p className="desc-blog">short desc</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomeBlogItem;
