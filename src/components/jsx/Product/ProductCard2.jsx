import React from "react";
import "../../css/Product/ProductCard2Styles.css";
import { Link } from "react-router-dom";

const ProductCard1 = ({ products }) => {
  return (
    <div className="product_list_main_container_productcard2">
      <div className="product_list_container_productcard2">
        {products.map((product) => (
          <Link to={`/product/${product.docId}`} className="main_container_productcard2">
            <div className="top_section_productcard2">
              <img src={product.imgUrl[0]} alt="product" />
            </div>

            <div className="bottom_section_productcard2">
              <p>{product.name}</p>
              <div className="bottom_upper_section_productcard2">
                <h5>&#x20B9; {product.price}</h5>

                <div className="rating_box_productbanner1">
                  <h6>{product.rating}</h6>
                </div>
              </div>

              <div className="bottom_lower_section_productcard2">
                <h4>Earliest Delivery : 26 April</h4>
                <h3>{product.ordersRated} Reviews</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard1;
