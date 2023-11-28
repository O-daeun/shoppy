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
