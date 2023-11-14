import React from "react";

export default function AddProducts() {
  const handleSumbit = (e) => {
    e.preventDefault();

    const files = document.querySelector("[type=file]").files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", process.env.REACT_APP_PRESET_NAME);

      fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.getElementById("data").innerHTML += data;
        });
    }
  };
  return (
    <div>
      <form method="post" encType="multipart/form-data" onSubmit={handleSumbit}>
        <input type="file" name="files[]" multiple />
        <input type="submit" value="Upload Files" name="submit" />
      </form>

      <p id="data"></p>
    </div>
  );
}
