import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function ProductDetails() {
  const { itemId } = useParams();
  const [isLoading, error, products] = useOutletContext();
  const thisProduct =
    products && products.filter((product) => product.id === itemId)[0];
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러!</p>}
      {products && (
        <section>
          <p>&gt;{thisProduct.gender}성</p>
          <article>
            <img src={thisProduct.image} alt="" />
            <div>
              {thisProduct.name}
              {thisProduct.price}
              {thisProduct.detail}
              <select name="" id="">
                {thisProduct.option.split(",").map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <button>장바구니 담기</button>
            </div>
          </article>
        </section>
      )}
    </>
  );
}
