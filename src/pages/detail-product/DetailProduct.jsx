import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import stars from "./Group 88.svg"

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
    <div className="container">
      <div className="flex gap-20">
        <div className="flex gap-10  items-start">
          <div className="flex flex-col gap-8">
            {
              data?.images?.map((item, inx) => (
                <img className="bg-[#F9F1E7] rounded-lg" width={80} src={item} key={inx} alt="" />
              ))
            }
          </div>
          <img className="bg-[#F9F1E7] rounded-lg p-8" src={data?.images[0]} width={500} alt="" />
        </div>
        <div className="w-sm">
          <h2 className="text-4xl">{data?.title}</h2>
          <br />
          <b className="text-gray-400" >{data?.discountPercentage}</b>
          <br />
          <br />
          <img src={stars} alt="" />
          <br />
          <p>{data?.description}</p>
          <br />
          <p className="text-gray-400">size</p>
          <div className="flex gap-4">
            <div className="bg-[#B88E2F] text-xs text-white rounded-lg p-3">L</div>
            <div className="bg-[#F9F1E7] text-xs rounded-lg p-3">XL</div>
            <div className="bg-[#F9F1E7] text-xs rounded-lg p-3">XS</div>
          </div>
          <br />
          <p className="text-gray-400">color</p>
          <div className="flex gap-4">
            <div className="bg-[#816DFA] rounded-2xl p-4"></div>
            <div className="bg-[#000000] rounded-2xl p-4"></div>
            <div className="bg-[#B88E2F] rounded-2xl p-4"></div>
          </div>
          <br />
          <br />
          <div className="flex gap-4">
            <button className="border text-nowrap py-3 rounded-md border-gray-500 px-8">-  1  +</button>
            <button className="border text-nowrap py-3 rounded-md border-gray-500 px-8">Add to card</button>
            <button className="border text-nowrap py-3 rounded-md border-gray-500 px-8">+ Compare</button>
          </div>
          <br />
          <br />        
          <hr className="bg-gray-500 text-gray-500"/>
          <br />
          <div>
            <p>SKU : {data?.sku}</p>
            <p>Category : {data?.category}</p>
            <p>Tags : {data?.tags}</p>
            <p>Share : </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DetailProduct;
