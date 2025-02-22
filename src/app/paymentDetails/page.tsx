'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function PaymentDetailsPage() {
  const [selectedPayment, setSelectedPayment] = useState('credit')

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-[#333]">Select a payment method</h2>
        <div className={`border rounded-lg p-6 ${selectedPayment === 'credit' ? 'border-orange-500' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <input
              type="radio"
              id="credit"
              name="payment"
              checked={selectedPayment === 'credit'}
              onChange={() => setSelectedPayment('credit')}
              className="w-4 h-4 text-orange-500"
            />
            <label htmlFor="credit" className="font-medium text-[#333]">Pay with Credit Card</label>
            <div className="flex gap-2 ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="10" viewBox="0 0 29 10" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.70049 9.82277H5.27727L3.46014 2.24042C3.37389 1.89163 3.19076 1.58329 2.92139 1.43796C2.24912 1.07274 1.50833 0.782085 0.700195 0.635493V0.343573H4.60382C5.14258 0.343573 5.54664 0.782085 5.61399 1.29137L6.55681 6.76076L8.97886 0.343573H11.3347L7.70049 9.82277ZM12.6821 9.82282H10.3936L12.278 0.343628H14.5666L12.6821 9.82282ZM17.5269 2.96964C17.5943 2.4591 17.9983 2.16718 18.4698 2.16718C19.2105 2.09388 20.0175 2.24047 20.6909 2.60443L21.095 0.563512C20.4216 0.271592 19.6808 0.125 19.0085 0.125C16.7873 0.125 15.1711 1.43801 15.1711 3.2603C15.1711 4.6466 16.3159 5.37451 17.124 5.81302C17.9983 6.25027 18.3351 6.54219 18.2677 6.97944C18.2677 7.63531 17.5943 7.92723 16.922 7.92723C16.1139 7.92723 15.3057 7.70861 14.5661 7.34339L14.1621 9.38557C14.9702 9.74952 15.8445 9.89611 16.6526 9.89611C19.1432 9.96814 20.6909 8.6564 20.6909 6.68752C20.6909 4.20809 17.5269 4.06276 17.5269 2.96964ZM28.6997 9.82282L26.8826 0.343628H24.9307C24.5267 0.343628 24.1226 0.635548 23.9879 1.0728L20.623 9.82282H22.9789L23.4492 8.43778H26.3438L26.6132 9.82282H28.6997ZM25.268 2.89625L25.9403 6.46879H24.0558L25.268 2.89625Z"
                  fill="#28356A"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                <path d="M15.8745 8.6322C15.8745 13.2616 12.383 17.0144 8.07594 17.0144C3.76889 17.0144 0.277344 13.2616 0.277344 8.6322C0.277344 4.00284 3.76889 0.25 8.07594 0.25C12.383 0.25 15.8745 4.00284 15.8745 8.6322Z" fill="#ED0006" />
                <path d="M25.9917 8.6322C25.9917 13.2616 22.5002 17.0144 18.1931 17.0144C13.8861 17.0144 10.3945 13.2616 10.3945 8.6322C10.3945 4.00284 13.8861 0.25 18.1931 0.25C22.5002 0.25 25.9917 4.00284 25.9917 8.6322Z" fill="#2F80ED" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1345 2.25195C14.8113 3.7894 15.8745 6.0771 15.8745 8.63171C15.8745 11.1863 14.8113 13.474 13.1345 15.0115C11.4578 13.474 10.3945 11.1863 10.3945 8.63171C10.3945 6.0771 11.4578 3.7894 13.1345 2.25195Z" fill="#6C6BBD" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                <path d="M15.8745 8.6322C15.8745 13.2616 12.383 17.0144 8.07594 17.0144C3.76889 17.0144 0.277344 13.2616 0.277344 8.6322C0.277344 4.00284 3.76889 0.25 8.07594 0.25C12.383 0.25 15.8745 4.00284 15.8745 8.6322Z" fill="#ED0006" />
                <path d="M25.9917 8.6322C25.9917 13.2616 22.5002 17.0144 18.1931 17.0144C13.8861 17.0144 10.3945 13.2616 10.3945 8.6322C10.3945 4.00284 13.8861 0.25 18.1931 0.25C22.5002 0.25 25.9917 4.00284 25.9917 8.6322Z" fill="#2F80ED" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1345 2.25195C14.8113 3.7894 15.8745 6.0771 15.8745 8.63171C15.8745 11.1863 14.8113 13.474 13.1345 15.0115C11.4578 13.474 10.3945 11.1863 10.3945 8.63171C10.3945 6.0771 11.4578 3.7894 13.1345 2.25195Z" fill="#6C6BBD" />
              </svg>


              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                <path d="M15.8745 8.6322C15.8745 13.2616 12.383 17.0144 8.07594 17.0144C3.76889 17.0144 0.277344 13.2616 0.277344 8.6322C0.277344 4.00284 3.76889 0.25 8.07594 0.25C12.383 0.25 15.8745 4.00284 15.8745 8.6322Z" fill="#ED0006" />
                <path d="M25.9917 8.6322C25.9917 13.2616 22.5002 17.0144 18.1931 17.0144C13.8861 17.0144 10.3945 13.2616 10.3945 8.6322C10.3945 4.00284 13.8861 0.25 18.1931 0.25C22.5002 0.25 25.9917 4.00284 25.9917 8.6322Z" fill="#2F80ED" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1345 2.25195C14.8113 3.7894 15.8745 6.0771 15.8745 8.63171C15.8745 11.1863 14.8113 13.474 13.1345 15.0115C11.4578 13.474 10.3945 11.1863 10.3945 8.63171C10.3945 6.0771 11.4578 3.7894 13.1345 2.25195Z" fill="#6C6BBD" />
              </svg>
            </div>
          </div>

          {selectedPayment === 'credit' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Card number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9101 1456"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Card Security Code
                    <span className="text-orange-500 ml-2 cursor-pointer">What is this?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="***"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`border rounded-lg p-6 ${selectedPayment === 'paypal' ? 'border-orange-500' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="paypal"
              name="payment"
              checked={selectedPayment === 'paypal'}
              onChange={() => setSelectedPayment('paypal')}
              className="w-4 h-4 text-orange-500"
            />
            <label htmlFor="paypal" className="font-medium text-[#333]">PayPal</label>
            <img src="/paypal.png" alt="PayPal" className="h-6 ml-auto" />
          </div>
          <p className="text-sm text-gray-600 mt-2 ml-7">
            You will be redirected to the PayPal website after submitting your order
          </p>
        </div>
        <div className={`border rounded-lg p-6 ${selectedPayment === 'upi' ? 'border-orange-500' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="upi"
              name="payment"
              checked={selectedPayment === 'upi'}
              onChange={() => setSelectedPayment('upi')}
              className="w-4 h-4 text-orange-500"
            />
            <label htmlFor="upi" className="font-medium text-[#333]">UPI</label>
            <img src="/upi.png" alt="UPI" className="h-6 ml-auto" />
          </div>
          <p className="text-sm text-gray-600 mt-2 ml-7">
            You will be redirected to the website after submitting your order
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
          <h2 className="text-xl font-semibold mb-4 text-[#333]">Chardham Yatra package</h2>

          <div className="flex items-start gap-4 mb-6">
            <img src="/icons/KEDARNATH.png" alt="Tour" className="w-24 h-24 rounded-lg object-cover" />
            <div>
              <h3 className="font-medium text-[#333]">Wine tasting In Tuscany</h3>
              <div className="flex flex-col space-y-2 text-[#333] mt-4">
                <div className="flex items-center space-x-2 text-gray-500 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M2.61914 7.65727H19.381M4.71438 3.4668H17.2858C17.8415 3.4668 18.3744 3.68754 18.7674 4.08048C19.1603 4.47341 19.381 5.00634 19.381 5.56204V18.1335C19.381 18.6892 19.1603 19.2221 18.7674 19.615C18.3744 20.008 17.8415 20.2287 17.2858 20.2287H4.71438C4.15869 20.2287 3.62575 20.008 3.23282 19.615C2.83989 19.2221 2.61914 18.6892 2.61914 18.1335V5.56204C2.61914 5.00634 2.83989 4.47341 3.23282 4.08048C3.62575 3.68754 4.15869 3.4668 4.71438 3.4668V3.4668Z" stroke="#FA8B02" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.9998 12.895C11.5784 12.895 12.0474 12.426 12.0474 11.8474C12.0474 11.2688 11.5784 10.7998 10.9998 10.7998C10.4212 10.7998 9.95215 11.2688 9.95215 11.8474C9.95215 12.426 10.4212 12.895 10.9998 12.895Z" fill="#FA8B02" />
                  </svg>
                  <span>Fri, 23 DEC 2022</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                    <path d="M10.9999 20.2287C6.37123 20.2287 2.61895 16.4764 2.61895 11.8477C2.61895 7.21908 6.37123 3.4668 10.9999 3.4668C15.6286 3.4668 19.3809 7.21908 19.3809 11.8477C19.3809 16.4764 15.6286 20.2287 10.9999 20.2287Z" stroke="#FA8B02" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.0003 8.70508V12.8956H14.667" stroke="#FA8B02" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <span>15:00</span>

                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-[#333]">2 Adult (18+)</span>
              <span className='text-[#333]'>₹18000</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-[#333]">1 Child (6-17)</span>
              <span className='text-[#333]'>₹2000</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className='text-[#333]'>Total Price</span>
              <span className="text-orange-500">₹20000</span>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}