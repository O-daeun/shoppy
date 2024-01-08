import React from "react";

export default function User({user: {photoURL, displayName}}) {
  return (
    <div className='flex items-center shrink-0 gap-2'>
      <img src={photoURL} className='rounded-full w-10' />
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}
