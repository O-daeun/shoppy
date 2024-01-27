import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetails() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    // 장바구니 추가
  };
  return (
    <section className='flex flex-col md:flex-row gap-4 p-4'>
      <img className='w-full basis-7/12' src={image} alt={title} />
      <div className='w-full basis-5/12 flex flex-col py-4'>
        {/* <p className='text-gray-700'>&gt;{category}</p> */}
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='my-4 text-2xl font-semibold'>￦{price}</p>
        <hr />
        <p className='my-4'>{description}</p>
        <div className='flex items-center gap-2 mt-12 mb-4'>
          <label
            htmlFor='select'
            className='w-20 text-lg font-semibold text-brand'
          >
            옵션:
          </label>
          <select
            className='w-full border border-2 border-dashed border-brand p-2 outline-none rounded-md'
            id='select'
            value={selected}
            onChange={handleSelect}
          >
            {options &&
              options.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
        <Button text='장바구니에 추가' width='full' onClick={handleClick} />
      </div>
    </section>
  );
}
