'use client'
import { Container } from "@radix-ui/themes";
import React, { useState } from "react";
import { Button, RadioGroup, Radio, Input } from "@nextui-org/react";
import { checkout } from '../../pages/api/checkout_sessions'

export default function DonationBox() {
  
  const sizes = ["sm", "md", "lg"];

  const [selectedAmount, setSelectedAmount] = useState("custom");
  const [customAmount, setCustomAmount] = useState("");

  const handleCheckout = async () => {
    let price = selectedAmount === "custom" ? customAmount : selectedAmount;

    await checkout({
      lineItems: [
        {
          price: price,
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
          errorMessage={selectedAmount === "custom" && !customAmount ? "Please enter a custom amount or select from the options" : ""}
        >
          <Radio name="amount" value="50" checked={selectedAmount === "price_1OwH9LHPIvs440h63Rs6yYoc"} onChange={() => setSelectedAmount("price_1OwH9LHPIvs440h63Rs6yYoc")}>$50</Radio>
          <Radio name="amount" value="100" checked={selectedAmount === "100"} onChange={() => setSelectedAmount("100")}>$100</Radio>
          <Radio name="amount" value="250" checked={selectedAmount === "250"} onChange={() => setSelectedAmount("250")}>$250</Radio>
          <Radio name="amount" value="500" checked={selectedAmount === "500"} onChange={() => setSelectedAmount("500")}>$500</Radio>
          <Radio name="amount" value="1000" checked={selectedAmount === "1000"} onChange={() => setSelectedAmount("1000")}>$1,000</Radio>
          <Radio name="amount" value="custom" checked={selectedAmount === "custom"} onChange={() => setSelectedAmount("custom")}></Radio>
          <div className="w-32">
            <Input
              name="customAmount"
              isClearable
              type="text"
              label="Custom Amount"
              variant=""
              placeholder="$"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              onClear={() => setCustomAmount("")}
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
