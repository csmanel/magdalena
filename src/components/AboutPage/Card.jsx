import React from 'react';
import { membersInfo } from './Members';

export default function Card({ step }) {
  //index into object, grab one info
  const { name, graphic, instrument, bio } = membersInfo[step];

  return (
    <div className="flex items-center  gap-2 max-h-[600px] max-w-[1000px] overflow-hidden">
      <div className="flex items-center justify-center h-[500px] w-[500px]">
        <img
          src={graphic}
          className="rounded-lg max-h-[95%] max-w-full"
          alt={`${name}-about_page`}
        />
      </div>
      <div className=" text-lg font-medium gap-2 mt-4 max-h-[600px] max-w-[400px] overflow-y-scroll">
        <h1 className="font-poppins text-4xl mb-0">{name}</h1>
        {instrument && (
          <h4 className="font-poppins text-lg italic font-light mb-20 mt-0">
            {instrument}
          </h4>
        )}
        {bio}
      </div>
    </div>
  );
}
