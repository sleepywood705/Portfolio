import "./Addict_P_All.css";
import {
  AddictAllProduct,
  AddictBestProduct,
  AddictLiquidProduct,
  AddictSolidProduct,
  AddictGiftProduct,
} from "../Component/Addict_C_AllProduct";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


export function AddictAllPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");

  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    // URL 파라미터에 따라 activeButton을 설정
    switch (tab) {
      case "solid":
        setActiveButton(3);
        break;
      case "liquid":
        setActiveButton(2);
        break;
      case "best":
        setActiveButton(1);
        break;
      case "all":
      default:
        setActiveButton(0);
        break;
    }
  }, [tab]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const buttons = [
    "전체 상품",
    "베스트셀러",
    "오 드 퍼퓸",
    "솔리드 퍼퓸",
    "기프트",
  ];

  return (
    <div id="AddictAllPage">
      <div id="Depth">
        {buttons.map((label, index) => (
          <button
            key={index}
            className={activeButton === index ? "active" : ""}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
      {activeButton === 0 && <AddictAllProduct/>}
      {activeButton === 1 && <AddictBestProduct/>}
      {activeButton === 2 && <AddictLiquidProduct/>}
      {activeButton === 3 && <AddictSolidProduct/>}
      {activeButton === 4 && <AddictGiftProduct/>}
    </div>
  );
}
