import React from "react";
import "./Form.css";
// import Tick from "../../assets/tickIcon.svg";
import closeButton from "../../assets/closeIcon.svg";
import SearchIcon from "../../assets/searchIcon.svg";
// List Icons
import compassLogo from "../../assets/CompassLogo.svg";
import bitcoinLogo from "../../assets/bitcoinIcon.svg";
import MaticLogo from "../../assets/MaticIcon.svg";
import BinanceLogo from "../../assets/binanceIcon.svg";
import XRPLogo from "../../assets/xrpIcon.svg";
import SolanaLogo from "../../assets/solonaIcon.svg";
import ListMenu from "../InnerForm/Listmenu";

const Form = () => {
  const chains = [
    {
      id: 1,
      logo: compassLogo,
      company: "Ethereum",
    },
    {
      id: 2,
      logo: bitcoinLogo,
      company: "Bitcoin",
    },
    {
      id: 3,
      logo: MaticLogo,
      company: "Matic",
    },
    {
      id: 4,
      logo: BinanceLogo,
      company: "Binance",
    },
    {
      id: 5,
      logo: XRPLogo,
      company: "XRP",
    },
    {
      id: 6,
      logo: SolanaLogo,
      company: "Solana",
    },
  ];

  // function Popup() {
  //   const [isOpen, setIsOpen] = useState(true);

  //   const handleClosePopUp = () => {
  //     setIsOpen(false);
  //   };
  // }
  return (
    <>
      <div className="form-wrapper">
        <form action="" className="form">
          <div className="input-section">
            <label htmlFor="" className="">
              Current Value<span className="current-value">$24882</span>
            </label>
            <select name="" id="">
              <option value="">test 1</option>
              <option value="">test 2</option>
              <option value="">test 3</option>
            </select>
          </div>

          <div className="input-section">
            <label htmlFor="">Amount you want to invest</label>
            <input
              type="text"
              name="invest-amount"
              placeholder="0.00"
              className="inr"
            />
          </div>

          <div className="input-section">
            <label htmlFor="">Estimate Number of ETH You will Get</label>
            <input type="text" name="cur-value" placeholder="0.00" />
          </div>
          <button className="btn buy-btn">Buy</button>
        </form>

        {/* Modal Pop-up */}

        {/* isOpen && ( */}
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal__close">
              <img
                src={closeButton}
                alt="close-btn"
                style={{ width: 10, height: 10 }}
              />
            </div>
            <div className="modal__input-section">
              <div className="modal__search-wrapper">
                <div className="search-bar">
                  <input
                    type="search"
                    placeholder="Search chains"
                    className="modal__search--bar"
                  />
                  <img
                    src={SearchIcon}
                    alt="serachIcon"
                    style={{ width: 20 }}
                    className="modal__search--icon"
                  />
                </div>
              </div>
              <div className="modal__list-item">
                {/* List menu goes here */}

                {chains.map((val, ind) => {
                  return (
                    <ListMenu key={ind} logo={val.logo} company={val.company} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Form;
