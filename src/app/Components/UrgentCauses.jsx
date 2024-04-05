'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Chip } from '@nextui-org/react';
import { Container } from '@radix-ui/themes';
import { RadioGroup, Radio, Input } from '@nextui-org/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import data from '../Data/UrgentCauses.json';

const UrgentCauses = () => {
  const [items, setItems] = useState([]);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmountInputValue, setCustomAmountInputValue] = useState('');

  useEffect(() => {
    setItems(data);
  }, []);

  const handleCheckout = async (donationType) => {
    try {
      let amount = selectedAmount;

      if (amount === 0 && customAmountInputValue.trim() !== '') {
        amount = parseFloat(customAmountInputValue.trim());
      }

      if (amount === 0) {
        return toast.error('Please select or enter a donation amount');
      }

      const response = await axios.post('/api/checkout_sessions', {
        amount: amount,
        donationType: donationType,
      });
      console.log(response);
      window.location = response.data.sessionURL;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error(error.message);
    }
  };

  const uniqueDonationTypes = [...new Set(items.map(item => item.type))];

  return (
    <Container>
      <h1 className="font-heading1 md:text-5xl text-3xl text-center leading-loose pt-10 md:pt-20 md:pb-10">Urgent Causes</h1>
      <ul className="md:grid md:grid-cols-3 md:gap-10 md:py-10 grid gap-y-6 p-7">
        {uniqueDonationTypes.map((donationType, index) => {
          const currentItem = items.find(item => item.type === donationType);
          if (!currentItem) return null;
          return (
            <li key={index}>
              <div>
                <Image 
                  src={currentItem.image} 
                  alt={donationType} 
                  width={700} 
                  height={700} 
                />
                <div className="flex flex-col border-solid border rounded-b-lg shadow-md">
                  <div className="flex flex-col justify-start px-4 pt-4">
                    <Chip radius="sm" color={currentItem.color}>
                      {currentItem.category}
                    </Chip>
                    <h className="md:text-xl font-medium text-lg pt-4">{donationType}</h>
                  </div>
                  <RadioGroup label="Select Amount" orientation="horizontal" defaultValue="custom" className="p-4">
                    <div className="flex flex-col justify-center items-center">
                      <ul className="flex gap-2">
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
                      <p className="p-2">OR</p>
                      <div className="w-36">
                        <Input
                          isClearable
                          type="text"
                          label="$ Custom Amount"
                          variant="bordered"
                          placeholder=""
                          defaultValue=""
                          onClear={() => console.log('input cleared')}
                          className="max-w-xs"
                          size="sm"
                          onChange={(e) => setCustomAmountInputValue(e.target.value)}
                        />
                      </div>
                    </div>
                  </RadioGroup>
                  <button
                    onClick={() => handleCheckout(donationType)}
                    className="px-5 py-5 text-lg font-medium leading-none border-green-700 border-solid border rounded-b text-white hover:text-green-700 h-10 hover:bg-white bg-green-700 flex items-center justify-center w-full"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default UrgentCauses;