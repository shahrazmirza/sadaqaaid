import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-10 shadow-md flex flex-col items-center">
            <p className="text-base/relaxed font-medium drop-shadow-sm mb-6">
                Thank You! Your donation has been successfully processed.
            </p>
            <Link href="/">
                <Button className="px-6 text-sm font-medium leading-none border-gray-800 border-solid border rounded text-white hover:text-gray-800 h-10 hover:bg-white bg-gray-800">
                    Continue
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default SuccessPage