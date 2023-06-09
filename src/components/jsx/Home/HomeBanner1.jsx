import React, { useEffect, useState } from "react";
import "../../css/Home/HomeBanner1Styles.css";
import Image1 from "../../../assets/products/home1.png";
import Image2 from "../../../assets/products/home2.png";
import Image3 from "../../../assets/products/home3.png";
import Image4 from "../../../assets/products/home4.png";
import Image5 from "../../../assets/products/home5.png";
import Image6 from "../../../assets/products/home6.png";
import Image7 from "../../../assets/products/home7.png";
import Image8 from "../../../assets/products/home8.png";
import { getProducts } from "../../../firebaseInstance";
import { Link } from "react-router-dom";

const HomeBanner1 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="main_container_homebanner1">
        <div className="top_section_homebanner1">
          <Link to="/products/cake" className="top_detail_box_homebanner1">
            <div className="top_detail_left_section_homebanner1">
              <h4>Delicious Cakes</h4>
              <p>Celebrate Sweet Moments</p>

              <button className="primary_btn_homebanner1">BUY NOW</button>
            </div>

            <div className="top_detail_right_section_homebanner1">
              <img src={Image1} alt="gift" />
            </div>
          </Link>

          <Link to="/products/flowers" className="top_detail_box_homebanner1">
            <div className="top_detail_left_section_homebanner1">
              <h4>Fruits & Flowers</h4>
              <p>Inspired by nature’s best</p>

              <button className="primary_btn_homebanner1">GIFT NOW</button>
            </div>

            <div className="top_detail_right_section_homebanner1">
              <img src={Image2} alt="gift" />
            </div>
          </Link>
        </div>

        <div className="middle1_section_homebanner1">
          <Link to="/products/gift" className="middle1_detail_box_homebanner1">
            <div className="middle1_detail_upper_section_homebanner1">
              <h4>Gift Items</h4>
              <p>Send this to someone you love</p>
            </div>

            <div className="middle1_detail_lower_section1_homebanner1">
              <img src={Image3} alt="product" />
            </div>
          </Link>

          <Link
            to="/products/birthday"
            className="middle1_detail_box_homebanner1"
          >
            <div className="middle1_detail_upper_section_homebanner1">
              <h4>Birthday Bash Gifts</h4>
              <p>Birthday Bash</p>
            </div>

            <div className="middle1_detail_lower_section2_homebanner1">
              <img src={Image4} alt="product" />
            </div>
          </Link>

          <Link
            to="/products/customise"
            className="middle1_detail_box_homebanner1"
          >
            <div className="middle1_detail_upper_section_homebanner1">
              <h4>Customised Goodies</h4>
              <p>Send this to someone you love</p>
            </div>

            <div className="middle1_detail_lower_section3_homebanner1">
              <img src={Image5} alt="product" />
            </div>
          </Link>

          <Link
            to="/products/aniversary"
            className="middle1_detail_box_homebanner1"
          >
            <div className="middle1_detail_upper_section_homebanner1">
              <h4>Aniversary</h4>
              <p>Celebrate Your Journey of Love</p>
            </div>

            <div className="middle1_detail_lower_section4_homebanner1">
              <img src={Image7} alt="product" />
            </div>
          </Link>
        </div>

        <div className="middle2_section_homebanner1">
          <h4>Celebrate Occasions with Scale : Your Genuine Place to Shop</h4>
          <p>
            Thoughtfully curated 139,821 Gift Ideas. Get 2-Hour Delivery & Free
            Shipping in India.
          </p>
        </div>

        <div className="bottom_section_homebanner1">
          <div className="bottom_first_section_homebanner1">
            <h4>Thoughtfully Curated Gifts</h4>
          </div>
          <div className="bottom_third_section_homebanner1">
            {products.map((product) => (
              <Link
                to={`/product/${product.docId}`}
                className="bottom_third_detail_box_homebanner1"
              >
                <div className="bottom_third_detail_image_box_homebanner1">
                  <img src={product.imgUrl[0]} alt="product" />
                </div>
                <p>{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner1;
