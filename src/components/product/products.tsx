import Price from "../price/price";
import "./styles.css";
import checkbox from "../../assets/checkbox.svg";
type ProductProps = {
  src: string;
  alt: string;
  description: string;
};

function Product(props: ProductProps) {
  const {
    src,
    alt,
    description,
    isChecked,
    currentVariant,
    variants,
    id,
    checkboxHandler,
  } = props;
  const showVariantColor = currentVariant?.color;
  const selectedColor = currentVariant?.colorCode;

  return (
    <div className="product-container">
      {/* image */}
      <img src={src} alt={alt} />
      {/* checkbox */}

      {isChecked ? (
        <img
          className="checkbox"
          src={checkbox}
          alt="checkbox"
          onClick={checkboxHandler(id)}
        />
      ) : (
        <span className="checkbox-empty" onClick={checkboxHandler(id)}></span>
      )}

      {/* rating */}
      <Rating />
      {/* Description */}
      <div className="description">{description}</div>
      {/* Price */}
      <Price {...props} />

      {/* Variant selector */}

      <div className="variant-selector">
        {isChecked ? (
          selectedColor ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "8px",
                }}
              >
                {" "}
                <img src={selectedColor} alt="color-variant" />
                <p
                  style={{
                    alignSelf: "center",
                  }}
                >
                  {showVariantColor}
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1D2024"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </>
          ) : (
            <div
              style={{
                display: "contents",
              }}
            >
              <span>+</span> <span>1</span>
              <span>-</span>
            </div>
          )
        ) : variants ? (
          <>
            <div>Select Option</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#1D2024"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </>
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p>Add to Bundle</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;

function Rating() {
  function RatingIcon() {
    return (
      <>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0001 1.66666L12.5751 6.88333L18.3334 7.725L14.1667 11.7833L15.1501 17.5167L10.0001 14.8083L4.85008 17.5167L5.83341 11.7833L1.66675 7.725L7.42508 6.88333L10.0001 1.66666Z"
              fill="#FFB100"
            />
          </svg>
        </div>
      </>
    );
  }
  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((m, i) => {
        return (
          <>
            <RatingIcon />
          </>
        );
      })}
      &nbsp;<span>1</span>
    </div>
  );
}
