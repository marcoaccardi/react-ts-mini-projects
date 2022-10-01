import React, { useState } from "react";
import reviews from "../assets/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const Review: React.FC = ({}) => {
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (currIndex: number) => {
    if (currIndex > reviews.length - 1) {
      return 0;
    }
    if (currIndex < 0) {
      return reviews.length - 1;
    }
    return currIndex;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>surprise me</button>
    </article>
  );
};
