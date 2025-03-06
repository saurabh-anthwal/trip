import React, { useState } from 'react';

interface ContactInfo {
  firstName: string;
  email: string;
  mobile: string;
  destination: string;
  comment: string;
}

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ContactInfo) => void;
  title: string,
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit, title }) => {
  const [formData, setFormData] = useState<ContactInfo>({
    firstName: '',
    email: '',
    mobile: '',
    destination: title,
    comment: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, email, mobile, comment } = formData;
    return firstName !== '' && email !== '' && mobile !== '' && comment !== '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!validateForm()) {
      setMessage('Please fill all the fields.');
      setMessageType('error');
      return;
    }
  
    setIsSubmitting(true);
    setMessage(''); // Clear previous message
  
    const payload = new URLSearchParams({
      Name: formData.firstName,
      Email: formData.email,
      Mobile: formData.mobile,
      Location: formData.destination,
      Comment: formData.comment,
    }).toString();
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyWHapF7XaAPhvcjNMNvsSaPocMtva24Z63PV3hsH4pYRK0JX9iZjj8qtiidlEgjZCz/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Correct Content-Type for form data
        },
        body: payload, // Send data as URL-encoded
      });
  
      if (response.ok) {
        setMessage('Your form has been successfully submitted!');
        setMessageType('success');
        onSubmit(formData); // Optionally pass data back to parent
        setFormData({
          firstName: '',
          email: '',
          mobile: '',
          destination: title,
          comment: '',
        });
        onClose(); // Close the popup after submission
      } else {
        setMessage('Something went wrong, please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.warn(error)
      setMessage('There was an error with the submission. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 px-4">
  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-2xl relative overflow-y-auto">
    {/* Close Button */}
    <button 
      onClick={onClose} 
      className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
    >
      &times;
    </button>

    <h2 className="text-lg md:text-xl font-semibold mb-6 text-center">
      Your next adventure is only a phone call away!
    </h2>
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Destination (Disabled) */}
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Where do you want to go?</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            disabled
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>

      {/* Comment Section */}
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
          // rows="4"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {/* Message Display */}
      {message && (
        <div 
          className={`p-3 rounded-md text-center ${
            messageType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {message}
        </div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col md:flex-row justify-end gap-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:bg-gray-400 transition-all"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Popup;