import React, { useState } from "react";
import InputText from "../components/ui/InputText";
import Button from "../components/ui/Button";
import InputFile from "../components/ui/InputFile";
import { uploadImage } from '../api/uploader';

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
    .then(url => {
      console.log(url);
      // Firebase에 새로운 제품을 추가함
    })
    // 제품의 사진을 Cloudinary에 업로드하고 URL을 획득
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <section className='p-5'>
      <h2 className='text-xl font-bold'>Add Products</h2>
      {file && <img src={URL.createObjectURL(file)} alt='local file' />}
      <form onSubmit={handleSubmit}>
        <InputFile onChange={handleChange} />
        <InputText
          placeholder='제품명'
          name='title'
          value={product.title}
          onChange={handleChange}
        />
        <InputText
          placeholder='가격'
          name='price'
          value={product.price}
          onChange={handleChange}
        />
        <InputText
          placeholder='카테고리'
          name='category'
          value={product.category}
          onChange={handleChange}
        />
        <InputText
          placeholder='옵션들(콤마(,)로 구분)'
          name='option'
          value={product.option}
          onChange={handleChange}
        />
        <InputText
          placeholder='제품 설명'
          name='description'
          value={product.description}
          onChange={handleChange}
        />
        <Button text='제품 등록하기' />
      </form>
      <p id='data'></p>
    </section>
  );
}
