'use client'
import { Container } from "@radix-ui/themes";
import React from "react";
import {Input, Button} from "@nextui-org/react";

export default function DonationBox() {
  return (
    <Container>
      <div className="flex flex-col w-fit gap-5 text-white bg-gray-800 rounded-lg p-5 z-20">
        <h1 className="flex justify-center text-3xl">Donate Now</h1>
        <div className="grid grid-cols-2 m-2 rounded-lg bg-yellow-300 text-gray-800">
          <Button className='text-lg font-bold p-2 border-r border-gray-400' type="radio">SADAQA</Button>
          <Button className='text-lg font-bold p-2 border-gray-400' type="radio">ZAKAT</Button>
        </div>
        <p className="text-xl px-2">Select Amount</p>
        <div className="flex rounded-lg m-2 ">
          <div className="grid grid-cols-5">
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 bg-yellow-300 text-gray-800 px-4' type="radio">$50</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 bg-yellow-300 text-gray-800' type="radio">$100</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 bg-yellow-300 text-gray-800' type="radio">$250</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 bg-yellow-300 text-gray-800' type="radio">$500</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 bg-yellow-300 text-gray-800' type="radio">$1000</Button>
          </div>
          <div className="flex justify-center items-center bg-white text-gray-800">
            <p className="pl-2">$</p>
            <Input className='text-md font-bold' type="custom" label="" placeholder="Custom Amount" />
          </div>
        </div >
        <Button className="m-2 rounded-lg  bg-green-700 text-white py-2 text-xl">Donate</Button>
      </div>
    </Container>
  );
}