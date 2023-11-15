import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "../context/CloudinaryUploadWidget";

export default function AddProducts() {
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState(process.env.REACT_APP_CLOUD_NAME);
  const [uploadPreset] = useState(process.env.REACT_APP_PRESET_NAME);

  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);

  return (
    <div>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
      <AdvancedImage
        style={{ maxWidth: "100%" }}
        cldImg={myImage}
        plugins={[responsive(), placeholder()]}
      />
    </div>
  );
}
