import "./styles.css"
type Props = {};

function Price(props: any) {
  const {
    wasPrice,
    price,
    priceText,
    priceCurrency,
    exVatPrice,
    exVatPriceText,
  } = props;
  return (
    <div className="price-container">
      <div className="was-price">
        <span>Was</span>
        {priceCurrency}
        {wasPrice}
        <span className="stroke">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="12"
            viewBox="0 0 43 12"
            fill="none"
          >
            <path d="M42.5 0.5L1 11.5" stroke="#F58585" />
          </svg>
        </span>
      </div>
      <div className="vat-price">
        {priceCurrency}
        {price}
        {priceText}
      </div>
      <div className="exvat-price">
        {priceCurrency}

        {exVatPrice}
        {exVatPriceText}
      </div>
    </div>
  );
}

export default Price;
