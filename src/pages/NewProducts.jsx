import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then((url) => {
        console.log(url);
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("성공적으로 제품이 추가되었습니다.");
            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
      })
      .finally(() => setIsUploading(false));
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
    <section className='w-full text-center py-10'>
      <h2 className='text-2xl font-bold mb-8'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='제품명'
          name='title'
          value={product.title ?? ""}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='가격'
          name='price'
          value={product.price ?? ""}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='카테고리'
          name='category'
          value={product.category ?? ""}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='옵션들(콤마(,)로 구분)'
          name='options'
          value={product.options ?? ""}
          onChange={handleChange}
        />
        <input
          className='mb-4'
          type='text'
          placeholder='제품 설명'
          name='description'
          value={product.description ?? ""}
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드중..." : "제품 등록하기"}
          disabled={isUploading}
        />
      </form>
      <p id='data'></p>
    </section>
  );
}
