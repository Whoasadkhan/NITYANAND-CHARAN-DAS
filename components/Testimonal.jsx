"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
      reviewer: "John Doe"
    },
    {
      text: "Another compelling review text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      reviewer: "Jane Smith"
    },
    // Add more reviews as needed
  ]);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    // After 3 seconds, update the review
    const timer = setTimeout(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentReviewIndex, reviews]);

  const handleLeftButtonClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleRightButtonClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="flex  md:flex-row items-center justify-center h-[35vh] my-10 bg-gray-200 relative">
  <button className="px-4 py-2 " onClick={handleLeftButtonClick}>
    <FaArrowLeft />
  </button>

  <div className="md:text-xl text-2xl text-center mx-8 max-w-screen-md">
    "{reviews[currentReviewIndex].text}"
  </div>

  <button className="px-4 py-2 " onClick={handleRightButtonClick}>
    <FaArrowRight />
  </button>

  <div className="absolute bottom-1 font-bold uppercase">
    <p className="text-lg">{reviews[currentReviewIndex].reviewer}</p>
  </div>
</div>

  );
};

export default TestimonialSection;
