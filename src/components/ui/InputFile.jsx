import React from "react";

export default function InputFile({ onChange }) {
  return (
    <input
      type='file'
      onChange={onChange}
      accept='image/*'
      name='file'
      required
      className='block w-full p-2 my-5 box-border border-solid border-2 rounded-sm border-brand outline-none focus:bg-brand focus:bg-opacity-10'
    />
  );
}
