import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  if (error) {
    return <p>somthing went wrong</p>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>
        <img src={data?.images[0]} width={500} alt="" />
        <div>
          {
            data?.images?.map((item, inx) => (
              <img  width={80} src={item} key={inx} alt="" />
            ))
          }
        </div>
      </div>
      <h2>{data?.title}</h2>
    </div>
  );
};

export default DetailProduct;
