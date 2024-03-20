'use client'
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { Button, RadioGroup, Radio, Input } from "@nextui-org/react";

export default function DonationBox() {
  
  const [amount, setAmount] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmount(formattedValue);
  };

  const sizes = ["sm", "md", "lg"];
    
  return (
    <Container>
      <div className="flex flex-col w-screen md:w-fit gap-5 text-black bg-white rounded-lg p-5 z-20">
        <h1 className="flex justify-center text-3xl">Donate Now</h1>
        
        <RadioGroup
          label="Select Donation Type"
          orientation="horizontal"
        >
          <Radio value="sadaqa" size="lg">SADAQA</Radio>
          <Radio value="zakat" size="lg">ZAKAT</Radio>
        </RadioGroup>
        
        {/* <div className="grid grid-cols-2 m-2 gap-5">
          <Button className='text-lg font-bold p-2' type="radio">SADAQA</Button>
          <Button className='text-lg font-bold p-2' type="radio">ZAKAT</Button>
        </div> */}

        <RadioGroup
          label="Select Amount"
          orientation="horizontal"
        >
          <Radio value="50" >$50</Radio>
          <Radio value="100">$100</Radio>
          <Radio value="250">$250</Radio>
          <Radio value="500">$500</Radio>
          <Radio value="1000">$1,000</Radio>
          <div className="w-32">
          <Input type="text" label="Custom Amount" placeholder="$"value={amount} onChange={handleInputChange}/>
        </div>
        </RadioGroup>

        {/* <p className="text-xl px-2">Select Amount</p>
        <div className="flex flex-col md:flex-row m-2 ">
          <div className="grid grid-cols-5 gap-2">
            <Button className='flex justify-center text-lg font-bold py-2' color="warning" type="radio">$50</Button>
            <Button className='flex justify-center text-lg font-bold py-2' color="warning" type="radio">$100</Button>
            <Button className='flex justify-center text-lg font-bold py-2' color="warning" type="radio">$250</Button>
            <Button className='flex justify-center text-lg font-bold py-2' color="warning" type="radio">$500</Button>
            <Button className='flex justify-center text-lg font-bold py-2' color="warning" type="radio">$1000</Button>
          </div>
          <div className="flex justify-center items-center">
            <p className="px-2">$</p>
            <input
              className='text-md font-bold py-2 pl-2 w-36'
              type="text"
              value={amount}
              onChange={handleInputChange}
              placeholder="Custom Amount"
            />
          </div>
        </div > */}
        <Button className="my-2 rounded-lg  bg-green-700 text-white py-2 text-xl">Donate</Button>
      </div>
    </Container>
  );
}
