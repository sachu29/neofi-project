import React from "react";
// import compassLogo from "../../assets/CompassLogo.svg";
import Tick from "../../assets/tickIcon.svg";


const Listmenu = (props) => {
  return (
    <div>
      <div className="modal__list-menu">
        <div className="modal__list-menu--logo">
          <img src={ props.logo } alt="Logo" style={{ width: 24 }} />
        </div>
              <div className="modal__list-menu--company-name">{ props.company }</div>
        <div className="modal__list-menu--active">
          <img src={Tick} alt="tick" style={{ width: 17, height: 12 }} />
        </div>
      </div>
    </div>
  );
};

export default Listmenu;
