import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>Display</button>
      {isVisible && <p>Welcome. I'm Sabbir Hossain. I am a NodeJS developer. I want to be a good software engineer. Please pray for me</p>}
    </div>
  );
};

export default ToggleComponent;

