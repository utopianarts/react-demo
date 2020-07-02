import React from 'react'


const App3 = ({placeholder, onSearchChange}) => (
   <div>
    <input 
        className = 'search'
        type = 'search' 
        placeholder = { placeholder } 
        onChange={onSearchChange}
    />
  </div>
    
);

export default App3;