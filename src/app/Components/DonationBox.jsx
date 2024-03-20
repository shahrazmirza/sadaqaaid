'use client'
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { Button} from "@nextui-org/react";

export default function DonationBox() {
  
  const [amount, setAmount] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmount(formattedValue);
  };
    
  return (
    <Container>
      <div className="flex flex-col w-screen md:w-fit gap-5 text-white bg-black rounded-lg p-5 z-20">
        <h1 className="flex justify-center text-3xl">Donate Now</h1>
        <div className="grid grid-cols-2 m-2 rounded-lg bg-yellow-300 text-gray-800">
          <Button className='text-lg font-bold p-2 border-r border-gray-400' type="radio">SADAQA</Button>
          <Button className='text-lg font-bold p-2 border-gray-400' type="radio">ZAKAT</Button>
        </div>
        <p className="text-xl px-2">Select Amount</p>
        <div className="flex flex-col md:flex-row rounded-lg border bg-yellow-300 m-2 ">
          <div className="grid grid-cols-5 border-b border-gray-400 md:border-b-0">
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 text-gray-800 px-4' type="radio">$50</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 text-gray-800' type="radio">$100</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 text-gray-800' type="radio">$250</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r border-gray-400 text-gray-800' type="radio">$500</Button>
            <Button className='flex justify-center text-lg font-bold py-2 border-r-0 md:border-r border-gray-400 text-gray-800' type="radio">$1000</Button>
          </div>
          <div className="flex justify-center items-center border-b rounded md:border-b-0 bg-white text-gray-800">
            <p className="px-2">$</p>
            <input
              className='text-md font-bold border-none focus:outline-none py-2 pl-2'
              type="text"
              value={amount}
              onChange={handleInputChange}
              placeholder="Custom Amount"
            />
          </div>
        </div >
        <Button className="m-2 rounded-lg  bg-green-700 text-white py-2 text-xl">Donate</Button>
      </div>
    </Container>
  );
}