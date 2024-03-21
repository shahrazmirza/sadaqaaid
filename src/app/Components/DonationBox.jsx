'use client'
import { Container } from "@radix-ui/themes";
import React, { useState, useEffect } from "react";
import { Button, RadioGroup, Radio, Input } from "@nextui-org/react";
import { toast } from 'react-toastify';
import axios from "axios";
import data from '../Data/Products.json';

export default function DonationBox() {
  const [donationType, setDonationType] = useState("sadaqa");
  const [items, setItems] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmountInputValue, setCustomAmountInputValue] = useState("");

  useEffect(() => {
    // Fetch or set the items data
    setItems(data);
  }, []);

  useEffect(() => {
    console.log("Donation Type:", donationType);
  }, [donationType]);

  const handleCheckout = async () => {
    try {
      let amount = selectedAmount;

      if (amount === 0 && customAmountInputValue.trim() !== "") {
        amount = parseFloat(customAmountInputValue.trim());
      }

      if (amount === 0) {
        return toast.error("Please select or enter a donation amount");
      }
      
      // Convert to appropriate format
      const formattedDonationType = donationType === 'sadaqa' ? 'Sadaqa' : 'Zakat';

      const response = await axios.post('/api/checkout_sessions', {
        amount: amount,
        donationType: formattedDonationType,
      });
      console.log(response);
      window.location = response.data.sessionURL;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <div className="flex flex-col w-screen md:w-fit gap-5 text-black bg-white rounded-lg p-5 z-20">
        <h1 className="flex justify-center text-3xl">Donate Now</h1>
        
        <RadioGroup
          label="Select Donation Type"
          orientation="horizontal"
          value={donationType}
          onChange={(e) => setDonationType(e.target.value)}
        >
          <Radio value="sadaqa" size="lg">Sadaqa</Radio>
          <Radio value="zakat" size="lg">Zakat</Radio>
        </RadioGroup>

        {(donationType === "sadaqa" || donationType === "zakat") && (
          <RadioGroup
            label="Select Amount"
            orientation="horizontal"
            defaultValue="custom"
          >
            <ul className='flex gap-2 pt-5'>
              {items.filter(item => item.type === donationType).map((item, index) => (
                <li key={index}>
                  <Radio 
                    className="pr-1 md:pr-2"
                    value={item.value}
                    onChange={() => setSelectedAmount(parseFloat(item.value))}
                  >
                    ${item.value}
                  </Radio>
                </li>
              ))}
            </ul>
            
            <p className="pt-5 px-3">OR</p>

            <div className="w-36">
              <Input
                isClearable
                type="text"
                label="$ Custom Amount"
                variant="bordered"
                placeholder=""
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                onChange={(e) => setCustomAmountInputValue(e.target.value)}
              />
            </div>
          </RadioGroup>
        )}
        
        <Button 
          className="my-2 rounded-lg bg-green-700 text-white py-8 text-xl"
          onClick={handleCheckout}
        >
          Donate
        </Button>
      </div>
    </Container>
  );
}