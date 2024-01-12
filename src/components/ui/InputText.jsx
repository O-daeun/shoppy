import React from "react";

export default function InputText({ placeholder, name, value, onChange }) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value ?? ''}
      required
      className='block w-full p-2 my-5 box-border border-solid border-2 rounded-sm border-brand outline-none focus:bg-brand focus:bg-opacity-10'
    />
  );
}
