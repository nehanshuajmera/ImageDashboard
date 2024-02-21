// Module.js
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ImageModule from './ImageModule';

const Module = ({ module, index, removeModule }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleImageClick = () => {
    setShowConfirmation(true);
  };

  const handleRemoveConfirm = () => {
    setShowConfirmation(false);
    removeModule(index);
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
  };

  return (
    <Draggable key={module.id} draggableId={module.id} index={index}>
      {(provided) => (
        <div
          className="module-container"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div onClick={handleImageClick}>
            {module.type === 'image' && <ImageModule module={module} />}
            {module.type === 'text' && <TextModule module={module} />}
          </div>
          {showConfirmation && (
            <div className="remove-confirmation">
              <p>Are you sure you want to remove this module?</p>
              <button onClick={handleRemoveConfirm}>Remove</button>
              <button onClick={handleCancelRemove}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Module;
