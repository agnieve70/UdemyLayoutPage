import React from "react";
import Image from "next/image";
import Button from "./button";

function Card(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 pb-10 lg:w-2/5 w-full m-2">
      <div className="relative z-10">
        <Image
          src={props.image}
          width={500}
          height={300}
          alt="sass"
          layout="responsive"
        />
        <div className="bg-yellow1/75 pl-8 pr-16 py-3 m-5 absolute bottom-0 z-20">
          <h4 className="italic text-darkblue1  text-lg font-bold">
            UP TO {props.off}% OFF
          </h4>
        </div>
      </div>
      <div className="px-5">
      <h1 className="mb-5  text-center text-lg text-darkblue1 font-bold">
        {props.title}
      </h1>
      <Button title={'GET OFFER'} />
      </div>
    </div>
  );
}

export default Card;
