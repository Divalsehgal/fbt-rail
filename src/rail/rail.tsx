import Product from "../components/product/products";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";

import "./style.css";
type Props = {};

const ProductOneProps = {
  src: product1,
  description: "This Item: Dobbs Corner Gaming Desk with Adjustable Monitor...",
  price: 91.99,
  wasPrice: 97.99,
  priceText: "inc VAT",
  priceCurrency: "£",
  exVatPrice: 76.99,
  exVatPriceText: "ex VAT",
  alt: "This Item: Dobbs Corner",
};

const ProductTwoProps = {
  src: product2,
  description: "X Rocker Saturn Mid-Back Gaming Chair",
  price: 84.99,
  wasPrice: 97.99,
  priceText: "inc VAT",
  priceCurrency: "£",
  exVatPrice: 70.82,
  exVatPriceText: "ex VAT",
  alt: "X Rocker Saturn Mid-Back",
};

const ProductThreeProps = {
  src: product3,
  description: "Mesh Tek Single Cube Bedside Table",
  price: 74.99,
  wasPrice: null,
  priceText: "inc VAT",
  priceCurrency: "£",
  exVatPrice: 74.99,
  exVatPriceText: "ex VAT",
  alt: "This Item: Dobbs Corner",
};

function Rail({}: Props) {
  return (
    <div className="rail-container">
      <span>
        {" "}
        <h4
          style={{
            marginBottom: "32px",
          }}
        >
          Frequently Bought together
        </h4>
      </span>


      <div className="products">
        {/* Product 1*/}
        <div className="main-product">
          <Product {...ProductOneProps} />

          <div className="plus">
            <svg
              className="vector"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 17H17V23C17 23.2652 16.8946 23.5196 16.7071 23.7071C16.5195 23.8946 16.2652 24 16 24C15.7348 24 15.4804 23.8946 15.2929 23.7071C15.1053 23.5196 15 23.2652 15 23V17H8.99997C8.74249 16.9885 8.49937 16.8781 8.32124 16.6918C8.14312 16.5055 8.0437 16.2577 8.0437 16C8.0437 15.7423 8.14312 15.4945 8.32124 15.3082C8.49937 15.1219 8.74249 15.0115 8.99997 15H15V9C15 8.73478 15.1053 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5195 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5195 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5195 16.8946 23.2652 17 23 17Z"
                fill="#1D2024"
              />
            </svg>{" "}
          </div>
        </div>
        <div className="bundle">
          {/* Product 2*/}
          <Product {...ProductTwoProps} />

          {/* Product 3*/}
          <Product {...ProductThreeProps} />
        </div>
      </div>


    </div>
  );
}

export default Rail;
