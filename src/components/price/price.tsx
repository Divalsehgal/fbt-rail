import "./styles.css";
import strike from "../../assets/strike.svg";


function Price(props: any) {
  const {
    wasPrice,
    price,
    priceText = "inc VAT",
    priceCurrency = "£",
    exVatPrice,
    exVatPriceText = "ex VAT",
    onClick
  } = props;
  return (
    <div className="price-container" onClick={onClick}>
      <div className="was-price">
        <span>Was</span>

        <span className="was-price-inner">
          <img src={strike} alt="strike" className="strike" />{" "}
          <span className="was-price">
            {" "}
            {priceCurrency}
            {wasPrice}
          </span>
        </span>
        <span className="stroke"></span>
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
