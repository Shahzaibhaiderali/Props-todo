import React, { useRef, useState } from 'react';
  const Card = ({ title, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editedValue = useRef();

  const saveEditTodo = () => {
    editTodo(editedValue.current.value);
    setIsEditing(false); // Change from true to false
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" placeholder='Edit Todo' ref={editedValue} />
          <button onClick={saveEditTodo}>Save</button>
        </div>
      ) : (
        <div>
          <div>
            <h4>{title}</h4>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
