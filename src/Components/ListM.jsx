import { useState } from "react";

function ListM(liste, placeholder) {
  const [items, setItems] = useState(liste || []);
  const [newItem, setNewItem] = useState("");
 const addItem = () =>
 {
setItems(...items, newItem) ; 
setNewItem('')

 }

 const remove = (i) =>
 {

 }
  
  return (
    <>
      <ul>
       { items.map((i,elt) => 
       <>
        <li key={i}> {elt}</li>
        <button onClick={()=>remove(i)}> supprimer </button>
        </>)
       
        }
      </ul>
      <input type="text" placeholder={placeholder}
      value={newItem}
      onChange={(e)=>setNewItem(e.target.value)}
      />
      <button onClick={addItem}> Ajouter </button>
    </>
  );
}

export default ListM;
