import "./Addict_C_Product.css";
import { useState, useEffect } from "react";


export function AddictProduct({ productData, hoverEffect = true }) { // hoverEffect를 기본값 true로 설정
  
  const [currentUrl, setCurrentUrl] = useState(productData.url);

  useEffect(() => {
    setCurrentUrl(productData.url);
  }, [productData]);

  return (
    <div id="AddictProduct">
      <img
        src={currentUrl}
        alt={productData.name}
        onMouseEnter={() => hoverEffect && setCurrentUrl(productData.hoverUrl)} // hoverEffect가 true일 때만 이미지 변경
        onMouseLeave={() => hoverEffect && setCurrentUrl(productData.url)} // hoverEffect가 true일 때만 이미지 변경
      />
      <div>
        <p>
          <span>{productData.name}</span>
          {productData.price}
        </p>
        <p>{productData.note}</p>
      </div>
    </div>
  );
}