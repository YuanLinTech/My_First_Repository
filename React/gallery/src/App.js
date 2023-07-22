import { useState } from 'react';
import { sculptureList } from './data.js';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

/* If the current image is the last image (index === sculptureList.length - 1), go to the first image (whose index == 0) */
  function handleNextClick() {
    setIndex((index < sculptureList.length - 1) ? (index + 1) : 0)
  }

/* If the current image is the first image (index === 0), go to the last image (whose index == sculptureList.length - 1) */
  function handlePreviousClick() {
    setIndex((index > 0) ? (index - 1) : (sculptureList.length - 1))
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick} className="previous">
        Previous
      </button>
      <button onClick={handleNextClick} className="next">
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick} className="detail">
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}