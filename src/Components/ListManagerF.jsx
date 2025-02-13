import React, { useState } from 'react';

function ListManager({ initialItems, placeholder }) {
  const [items, setItems] = useState(initialItems || []);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
   
      setItems([...items, newItem]);
      setNewItem('');
  };

  const removeItem = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
   <>
      <h1>Liste :</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={()=>removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Ajouter un nouveau élément"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Ajouter</button>
    </>
  );
}

export default ListManager;
