import React from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function MyCart() {
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col gap-10 justify-center items-center py-20'>
      <h2 className='text-3xl font-bold'>준비중입니다...</h2>
      <Button text='홈으로 돌아가기' onClick={() => navigate("/")} />
    </div>
  );
}
