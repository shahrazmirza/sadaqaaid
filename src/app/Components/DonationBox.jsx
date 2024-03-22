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
      const formattedDonationType = donationType === 'sadaqa' ? 'Sadaqa' : donationType === 'zakat' ? 'Zakat' : 'Zakat-al-Fitr';

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
      <div className="md:flex justify-center items-center flex-col h-screen">
        <div className='md:flex items-center md:gap-20 md:p-10'>
          <h1 className='font-heading1 text-2xl py-10 md:text-5xl text-white text-center md:text-start drop-shadow-2xl p-5 md:p-0 animate__animated animate__fadeIn animate__delay-1s'>Join our movement with Sadaqa Aid to end poverty and transform lives globally</h1>
          <div className="flex flex-col w-screen md:w-fit gap-5 text-black bg-white rounded-lg p-4 md:p-5 z-20 animate__animated animate__fadeIn animate__delay-2s">
            <h1 className="flex justify-center text-3xl">Donate Now</h1>
            
            <RadioGroup
              label="Select Donation Type"
              orientation="horizontal"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
            >
              <Radio value="sadaqa" size="lg">Sadaqa</Radio>
              <Radio value="zakat" size="lg">Zakat</Radio>
              <Radio value="zakatAlFitr" size="lg">Zakat-al-Fitr</Radio>
            </RadioGroup>

            {(donationType === "sadaqa" || donationType === "zakat" || donationType === "zakatAlFitr") && (
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
        </div>
        <div className="flex justify-center items-end h-screen pb-20">
          <div className="flex space-x-2"> 
            <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white hover:bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
