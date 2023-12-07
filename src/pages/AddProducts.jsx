import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddProducts() {
  const { products, handleAdd } = useOutletContext();

  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [option, setOption] = useState("");
  const [detail, setDetail] = useState("");

  const [cloudName] = useState(process.env.REACT_APP_CLOUD_NAME);
  const [uploadPreset] = useState(process.env.REACT_APP_PRESET_NAME);
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);
  const [url] = useState(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("api_key", apiKey);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("data").innerHTML += data;
      });

    handleAdd({
      name,
      id: uuidv4(),
      price,
      gender,
      option,
      detail,
      image: "d",
    });
  };

  // const object = {
  //   asset_id: "74b7619e1dd2d90cb88cbedaeab6a869",
  //   public_id: "kfun51qnqcodrai9q5t5",
  //   version: 1701263841,
  //   version_id: "52dd82834e402508835d969e86438f94",
  //   signature: "7bb50d37da257cc3a9602cdb6dc6b285541d1070",
  //   width: 256,
  //   height: 256,
  //   format: "png",
  //   resource_type: "image",
  //   created_at: "2023-11-29T13:17:21Z",
  //   tags: [],
  //   bytes: 3136,
  //   type: "upload",
  //   etag: "ee4dd7fb01baf2914c6c628a090a85e0",
  //   placeholder: false,
  //   url: "http://res.cloudinary.com/dkixsqfoc/image/upload/v1701263841/kfun51qnqcodrai9q5t5.png",
  //   secure_url:
  //     "https://res.cloudinary.com/dkixsqfoc/image/upload/v1701263841/kfun51qnqcodrai9q5t5.png",
  //   folder: "",
  //   original_filename: "favicon",
  // };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleOptionChange = (e) => {
    let option = e.target.value.split(', ');
    setOption(option);
  };
  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  return (
    <div>
      <p>Add Products</p>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="제품명"
        />
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="가격"
        />
        <input
          type="text"
          value={gender}
          onChange={handleGenderChange}
          placeholder="성별 (남/여)"
        />
        <input
          type="text"
          value={option}
          onChange={handleOptionChange}
          placeholder="옵션"
        />
        <textarea
          value={detail}
          onChange={handleDetailChange}
          placeholder="제품설명"
        />
        <button>Upload</button>
      </form>
      <p id="data"></p>
    </div>
  );
}
