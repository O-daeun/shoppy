import React from 'react';
import { FiLoader } from "react-icons/fi";

export default function Loading() {
  return (
    <div className='flex justify-center items-center gap-2 text-2xl font-semibold text-brand py-20'>
      <FiLoader />
      <p>Loading</p>
    </div>
  );
}

