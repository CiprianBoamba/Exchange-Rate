import "./Header.css";

function Header(props) {
  const firstRate = props.currency[0].rate;
  const secondRate = props.currency[1].rate;
  // const result = firstRate * secondRate;
  const res = () => firstRate * secondRate;
  return (
    <div className="header">
      <h1>Currency convertor</h1>
      <div>
        <div>
          <h1>Convert</h1>
          <div>Amount: {props.currency[0].amount}</div>
          <div>
            From:{props.currency[0].name}- {props.currency[1].name}
          </div>
          <div>Results:{res()}</div>
          <div>Button</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
