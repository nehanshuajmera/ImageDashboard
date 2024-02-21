import React from 'react';

const ModuleAdder = ({ addModule }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addModule({ id: `module-${Date.now()}`, type: 'image', imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="module-adder-container">
      <button className="custom-file-upload" onClick={handleButtonClick}>
        Choose Image
      </button>
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default ModuleAdder;
