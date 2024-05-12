import React, { useState, useEffect } from 'react';

function BGSphere({ width, height, x, y, color }) {
   const [sphereWidth, setSphereWidth] = useState(width);
   

   useEffect(() => {
      const handleResize = () => {
         // Update the width of the sphere based on the viewport width
         if (window.innerWidth <= 700) {
            setSphereWidth('150px');
         } else {
            setSphereWidth(width);
         }
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Initial call to set width
      handleResize();

      // Clean up the event listener
      return () => window.removeEventListener('resize', handleResize);
   }, [width]);

   return (
      <div className="bgsphere" style={{
         width: sphereWidth,
         height: height,
         position: 'absolute',
         left: x,
         top: y,
         borderRadius: '50%',
         background: color,
         filter: 'blur(110px)',
         overflow: 'hidden',
         zIndex: -1,
         transform: 'translate(-50%, -50%)',
      }}></div>
   )
}

export default BGSphere;
