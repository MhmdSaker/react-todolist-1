import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Card from './components/Card';
import NewCardForm from './components/NewCardForm';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([
    {
      title: 'Today Work',
      tasks: [
        { name: 'research', label: 'Research' },
        { name: 'moodboard', label: 'Moodboard' },
        { name: 'lofi', label: 'Lofi Design' },
      ],
      date: 'Sat, 25 Mar 23',
    },
    {
      title: 'Tomorrow Work',
      tasks: [
        { name: 'planning', label: 'Project Planning' },
        { name: 'design', label: 'UI Design' },
        { name: 'coding', label: 'Coding' },
      ],
      date: 'Sun, 26 Mar 23',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
    setShowForm(false); // Will trigger the exit animation
  };

  const deleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (formRef.current) {
      if (showForm) {
        // Entrance animation when form is shown
        gsap.to(formRef.current, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        // Exit animation when form is hidden
        gsap.to(formRef.current, {
          autoAlpha: 0,
          y: -30,
          scale: 0.95,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            // Component is now fully invisible
            // ShowForm is already false here, so we don't need to set it again
          }
        });
      }
    }
  }, [showForm]);

  const toggleForm = () => {
    if (showForm) {
      // Start exit animation, actual hiding happens in onComplete
      gsap.to(formRef.current, {
        autoAlpha: 0,
        y: -30,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowForm(false)
      });
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="m-20 w-[880px] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-6xl font-bold text-bluish">My Notes</h1>
        <button onClick={toggleForm} className="btn-primary">
          {showForm ? "Close Form" : "Add New Card"}
        </button>
      </div>
      <hr />
      {showForm && (
        <div ref={formRef} style={{ opacity: 0 }}>
          <NewCardForm onAddCard={addCard} />
        </div>
      )}
      <div className="flex flex-wrap gap-4 mt-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            tasks={card.tasks}
            date={card.date}
            onDelete={() => deleteCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
