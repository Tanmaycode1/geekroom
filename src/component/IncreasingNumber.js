import React, { useState, useEffect } from 'react';
import './IncreasingNumber.css'; // Import CSS file for styling

const IncreasingNumber = ({ stoppingNumber,  speed }) => {
  const [number, setNumber] = useState(0);

  // Function to increment the number
  const incrementNumber = () => {
    setNumber(prevNumber => {
      if (prevNumber < stoppingNumber) {
        return prevNumber + 1;
      } else {
        return prevNumber;
      }
    });
  };

  // Use useEffect to start incrementing the number when the component mounts
  useEffect(() => {
    const interval = setInterval(incrementNumber, speed); // Increment at given speed
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [speed]);

  return (
    <div >
      {number}
    </div>
  );
};

export default IncreasingNumber;
