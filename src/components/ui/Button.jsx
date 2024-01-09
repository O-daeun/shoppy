import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className='bg-brand py-2 px-4 rounded-sm text-white hover:brightness-110'>
      {text}
    </button>
  );
}
