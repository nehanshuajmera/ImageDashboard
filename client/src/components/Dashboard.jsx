import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Module from './Module';
import ModuleAdder from './ModuleAdder';

const Dashboard = () => {
  const [modules, setModules] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedModules = Array.from(modules);
    const [reorderedItem] = reorderedModules.splice(result.source.index, 1);
    reorderedModules.splice(result.destination.index, 0, reorderedItem);
    setModules(reorderedModules);
  };

  const addModule = (module) => {
    setModules([...modules, module]);
  };

  const removeModule = (index) => {
    const updatedModules = [...modules];
    updatedModules.splice(index, 1);
    setModules(updatedModules);
  };

  useEffect(() => {
    localStorage.setItem('dashboardModules', JSON.stringify(modules));
  }, [modules]);

  useEffect(() => {
    const storedModules = JSON.parse(localStorage.getItem('dashboardModules'));
    if (storedModules) {
      setModules(storedModules);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="dashboard">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {modules.map((module, index) => (
                <Module
                  key={module.id}
                  module={module}
                  index={index}
                  removeModule={removeModule}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ModuleAdder addModule={addModule} />
    </div>
  );
};

export default Dashboard;
