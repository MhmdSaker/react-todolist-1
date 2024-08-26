import React, { useState } from 'react';

const NewCardForm = ({ onAddCard }) => {
  
  const [title, setTitle] = useState('');
  const [task1, setTask1] = useState('');
  const [task2, setTask2] = useState('');
  const [task3, setTask3] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && task1 && task2 && task3 && date) {
      const newCard = {
        title,
        tasks: [
          { name: task1, label: task1 },
          { name: task2, label: task2 },
          { name: task3, label: task3 },
        ],
        date,
      };
      onAddCard(newCard);
      setTitle('');
      setTask1('');
      setTask2('');
      setTask3('');
      setDate('');
    }
  };

  
  return (
    
    <form onSubmit={handleSubmit} className=" bg-white rounded-lg shadow-lg mt-[40px]">
      <h2 className='text-3xl p-6 text-white font-bold mb-[20px] bg-bluish w-[100%]'>Add New Card</h2>
      <div className='grid grid-cols-2 w-[100%] pb-[20px]'>
        <div className='mr-8 ml-8'>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Card Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 mt-2 block w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Task 1:</label>
            <input
              type="text"
              value={task1}
              onChange={(e) => setTask1(e.target.value)}
              className="p-2 mt-2 block w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Task 2:</label>
            <input
              type="text"
              value={task2}
              onChange={(e) => setTask2(e.target.value)}
              className="p-2 mt-2 block w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Task 3:</label>
            <input
              type="text"
              value={task3}
              onChange={(e) => setTask3(e.target.value)}
              className="p-2 mt-2 block w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 mt-2 block w-full border rounded-md"
            />
          </div>


        </div>
        <div className='grid'>
        <button type="submit" className=" border-[1px] hover:font-bold rounded-sm hover:border-4 m-[20px] transition-all">Add Card</button>
        <button type="submit" className=" border-[1px] hover:font-bold rounded-sm hover:text-[#f12123] hover:border-[#f12323] hover:border-4 m-[20px] transition-all">Delete All Notes</button>
        </div>
        
      </div>
    </form>
  );
};

export default NewCardForm;
