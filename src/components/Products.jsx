import React from "react";
import { useQuery, useQueryClient } from "react-query";

export default function Products() {


  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(["products"], async () => {
    return fetch("https://api.cloudinary.com/v1_1/dkixsqfoc/image/upload").then(
      (res) => res.json()
    );
  });
  return <div>Products</div>;
}
