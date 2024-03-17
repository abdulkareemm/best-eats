import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFood] = useState(data);

  //filter type
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter price
  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* ======== filter row ======== */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* ======== filter type ======== */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFood(data)}
              className=" m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className=" m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className=" m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className=" m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              Chicken
            </button>
          </div>
        </div>

        <div className="font-bold text-gray-700">
          {/* ======== filter price ======== */}
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full ">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:text-slate-400"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* ======== display food ======== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
