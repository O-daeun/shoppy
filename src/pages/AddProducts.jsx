import React, { useState } from "react";

export default function AddProducts() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [detail, setDetail] = useState("");

  const [cloudName] = useState(process.env.REACT_APP_CLOUD_NAME);
  const [uploadPreset] = useState(process.env.REACT_APP_PRESET_NAME);
  const [apiKey] = useState(process.env.REACT_APP_API_KEY);
  const [url] = useState(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
  );

  // const json = {
  //   asset_id: "100d61f718a0e05a150f02c9ad6fd391",
  //   public_id: "cddc0ekaedum0mtwiuog",
  //   version: 1700062480,
  //   version_id: "e12fbf335eb4601c466ce2652713c8c1",
  //   signature: "60db4add950592d09fd6e8a2e04b92717a3686b2",
  //   width: 256,
  //   height: 256,
  //   format: "png",
  //   resource_type: "image",
  //   created_at: "2023-11-15T15:34:40Z",
  //   tags: [],
  //   bytes: 3136,
  //   type: "upload",
  //   etag: "ee4dd7fb01baf2914c6c628a090a85e0",
  //   placeholder: false,
  //   url: "http://res.cloudinary.com/dkixsqfoc/image/upload/v1700062480/cddc0ekaedum0mtwiuog.png",
  //   secure_url:
  //     "https://res.cloudinary.com/dkixsqfoc/image/upload/v1700062480/cddc0ekaedum0mtwiuog.png",
  //   folder: "",
  //   original_filename: "favicon",
  // };

  // cloudinary.v2.uploader
  //   .upload("boots.jpg", { context: "caption=New" })
  //   .then((result) => console.log(result));

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
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOptionChange = (e) => {
    setOption(e.target.value);
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
