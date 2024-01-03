import Product, { Rating } from "../product/products";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import blacksvg from "../../assets/black.svg";


import product11 from "../../assets/product11.png";
import product12 from "../../assets/product12.png";
import product13 from "../../assets/product13.png";
import product21 from "../../assets/product21.png";
import product22 from "../../assets/product22.png";
import product23 from "../../assets/product23.png";



import greensvg from "../../assets/green.svg";

import "./style.css";
import Price from "../price/price";
import Button from "../button/button";
import { useEffect, useState } from "react";
import SideModal from "../sidemodal/sidemodal";
import ProductModal from "../productmodal/productmodal";
import ImageSlider from "../imageSlider/imageSlider";
type Props = {};

function Rail({}: Props) {
  const [productData, setProductData] = useState([
    {
      src: product1,
      description:
        "This Item: Dobbs Corner Gaming Desk with Adjustable Monitor...",
      price: 91.99,
      wasPrice: 97.99,
      priceText: "inc VAT",
      priceCurrency: "£",
      exVatPrice: 76.99,
      exVatPriceText: "ex VAT",
      alt: "This Item: Dobbs Corner",
      variantSelector: null,
      variants: [],
      id: 1,
      isChecked: true,
      currentVariant: { color: "Black", colorCode: blacksvg },
      images: [product11, product12, product13],
    },
    {
      src: product2,
      description: "X Rocker Saturn Mid-Back Gaming Chair",
      price: 84.99,
      id: 2,
      wasPrice: 97.99,
      priceText: "inc VAT",
      priceCurrency: "£",
      exVatPrice: 70.82,
      exVatPriceText: "ex VAT",
      alt: "X Rocker Saturn Mid-Back",
      variantSelector: "Green",
      variants: [
        { color: "Green", colorCode: "#108510" },
        { color: "Red", colorCode: "#D80A00" },
      ],
      isChecked: false,
      currentVariant: { color: "Green", colorCode: greensvg },
      images: [product21, product22, product23],
    },
    {
      src: product3,
      description: "Mesh Tek Single Cube Bedside Table",
      price: 74.99,
      wasPrice: 74.99,
      priceText: "inc VAT",
      id: 3,
      priceCurrency: "£",
      exVatPrice: 74.99,
      exVatPriceText: "ex VAT",
      alt: "This Item: Dobbs Corner",
      variantSelector: null,
      isChecked: false,
      variants: [],
      currentVariant: "",
      images: [product21, product22, product23],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const [selectedProduct,setSelectedProduct] = useState([]);

  const openModal = (id:any) => ()=>{
    setIsProductModalOpen(true);
    setSelectedProduct(productData.filter((product) => product.id === id));
  };


  const closeModal = () => {
    setIsProductModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [totalPrice, setTotalPrice] = useState({
    wasPrice: 0,
    actualPrice: 0,
    exVatPrice: 0,
    priceDifference: 0,
  });
  const titlelength = productData.filter(
    (product) => product.isChecked === true
  )?.length;

  const titleCases: any = {
    1: "Add to Basket",
    2: "Add both to basket",
    3: "Add three to basket",
  };

  const selectedTitle = titleCases[titlelength];

  const checkboxHandler = (id: any) => () => {
    setProductData((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, isChecked: !product.isChecked };
        }
        return product;
      });
    });
  };

  useEffect(() => {
    const calculateTotal = () => {
      return productData.reduce(
        (total, product) => {
          if (product.isChecked) {
            total.actualPrice += product.price;
            if (product.wasPrice !== null) {
              total.wasPrice += product.wasPrice;
            }
            if (product.exVatPrice !== null) {
              total.exVatPrice += product.exVatPrice;
            }
          }
          return total;
        },
        { wasPrice: 0, actualPrice: 0, exVatPrice: 0 }
      );
    };

    const { wasPrice, actualPrice, exVatPrice } = calculateTotal();
    const priceDifference = wasPrice - actualPrice;
    setTotalPrice({ wasPrice, actualPrice, priceDifference, exVatPrice });
  }, [productData]);

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
          <Product
            {...productData[0]}
            checkboxHandler={checkboxHandler}
            openModal={openModal}
          />

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
          <Product
            {...productData[1]}
            checkboxHandler={checkboxHandler}
            openModal={openModal}
          />

          {/* Product 3*/}
          <Product
            {...productData[2]}
            checkboxHandler={checkboxHandler}
            openModal={openModal}
          />
        </div>

        {/* calculation box */}

        <div className="calculation">
          <div>
            {titlelength}&nbsp;
            {titlelength < 2 ? "item" : "items"} added
          </div>
          <div>Total Bundle Price</div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "flex-end",
            }}
          >
            <Price
              wasPrice={totalPrice.wasPrice.toFixed(2)}
              price={totalPrice.actualPrice.toFixed(2)}
              exVatPrice={totalPrice.exVatPrice.toFixed(2)}
            />
            <div className="price-saved">
              Save £{totalPrice.priceDifference.toFixed(2)}
            </div>
          </div>

          <Button title={selectedTitle} toggleModal={toggleModal} />
          <SideModal isOpen={isModalOpen} onClose={toggleModal}>
            <div className="top">
              <div>Just added to your Basket</div>

              {/* thumbnail */}
              <div>thumbnail</div>
              <div>
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-end",
                  }}
                >
                  <Price
                    wasPrice={totalPrice.wasPrice.toFixed(2)}
                    price={totalPrice.actualPrice.toFixed(2)}
                    exVatPrice={totalPrice.exVatPrice.toFixed(2)}
                  />
                  <div className="price-saved">
                    Save £{totalPrice.priceDifference.toFixed(2)}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                {" "}
                <Button title="Continue shopping" />
                <Button title="View  Basket" />
              </div>
            </div>

            <div className="bottom">Dummy Content</div>
          </SideModal>
          <ProductModal isOpen={isProductModalOpen} onClose={closeModal}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{selectedProduct[0]?.description}</div>
            </div>

            <div>
              <Rating />
            </div>

            <div>navigation tag</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                {" "}
                <ImageSlider images={selectedProduct[0]?.images} />
              </div>
              <div>description</div>
            </div>
          </ProductModal>
        </div>
      </div>
    </div>
  );
}

export default Rail;
