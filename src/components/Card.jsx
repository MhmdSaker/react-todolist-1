import React, { useState } from 'react';


const Card = ({ title, tasks, date, onDelete }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);

  const toggleCheck = (taskName) => {
    setCheckedTasks((prevCheckedTasks) =>
      prevCheckedTasks.includes(taskName)
        ? prevCheckedTasks.filter((name) => name !== taskName)
        : [...prevCheckedTasks, taskName]
    );
  };

  return (
    <div className="bg-bluish p-5 rounded-3xl bg-blue-500 text-white shadow-md w-64 m-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">🗑️</button>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            onClick={() => toggleCheck(task.name)}
            className={`flex items-center p-2 rounded-lg cursor-pointer ${checkedTasks.includes(task.name) ? 'bg-blue-600' : 'bg-blue-400'}`}
          >
            <div className={`w-5 h-5 flex justify-center items-center rounded-full border-2 mr-3 ${checkedTasks.includes(task.name) ? 'bg-white' : 'border-white'}`}>
              {checkedTasks.includes(task.name) && (<span className="text-bluish">✓</span>)}
            </div>
            <span className={`${checkedTasks.includes(task.name) ? 'line-through' : ''}`}>{task.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span>{date}</span>
        <span className="text-lg">📌</span>
      </div>
    </div>
  );
};

export default Card;
