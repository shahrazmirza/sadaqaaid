'use client'
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { Button, RadioGroup, Radio, Input } from "@nextui-org/react";
import { checkout } from '../../pages/api/checkout_sessions'

export default function DonationBox() {
  
  const sizes = ["sm", "md", "lg"];

  const handleCheckout = async () => {
    await checkout({
      lineItems: [
        {
          price: "50",
          quantity: 1
        }
      ]
    });
  };

  return (
    <Container>
      <div className="flex flex-col w-screen md:w-fit gap-5 text-black bg-white rounded-lg p-5 z-20">
        <h1 className="flex justify-center text-3xl">Donate Now</h1>
        
        <RadioGroup
          label="Select Donation Type"
          orientation="horizontal"
          defaultValue="sadaqa"
          isInvalid={""}
          errorMessage={"" ? "Please select a donation type" : ""}
        >
          <Radio value="sadaqa" size="lg">Sadaqa</Radio>
          <Radio value="zakat" size="lg">Zakat</Radio>
        </RadioGroup>
        
        <RadioGroup
          label="Select Amount"
          orientation="horizontal"
          defaultValue="custom"
          isInvalid={""}
          errorMessage={"" ? "PPlease select or enter a custom amount" : ""}
        >
          <Radio value="50" >$50</Radio>
          <Radio value="100">$100</Radio>
          <Radio value="250">$250</Radio>
          <Radio value="500">$500</Radio>
          <Radio value="1000">$1,000</Radio>
          <Radio value="custom"></Radio>
            <div className="w-32">
              <Input
                isClearable
                type="text"
                label="Custom Amount"
                variant=""
                placeholder="$"
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
              />
            </div>
        </RadioGroup>

        <Button 
          className="my-2 rounded-lg  bg-green-700 text-white py-2 text-xl"
          onClick={handleCheckout}>Donate</Button>
      </div>
    </Container>
  );
}
