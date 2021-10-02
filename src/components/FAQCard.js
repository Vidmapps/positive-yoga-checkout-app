import { useState } from "react";
import ArrowUp from "../assets/ArrowUp.svg";
import ArrowDown from "../assets/ArrowDown.svg";

const FAQCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="faqCardStyle p-3">
      <div>
        <div
          className="pointer d-flex justify-content-between"
          onClick={(e) => setIsActive(!isActive)}
        >
          <strong className="pb-2">{props.question}</strong>
          {isActive ? (
            <img src={ArrowUp} alt="Show answer" onClick></img>
          ) : (
            <img src={ArrowDown} alt="Hide answer"></img>
          )}
        </div>
        {isActive && <div className="secondaryTextSize">{props.answer}</div>}
      </div>
    </li>
  );
};

export default FAQCard;
