// ImageModule.js
import React from 'react';

const ImageModule = ({ module }) => {
  const { imageUrl, themeColor } = module;

  return (
    <div className="module-image" style={{ backgroundColor: themeColor, padding: '10px', marginBottom: '10px' }}>
      <img src={imageUrl} alt="Module" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default ImageModule;
