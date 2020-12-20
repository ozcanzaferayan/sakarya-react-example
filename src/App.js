import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import MyInput from './components/MyInput';
import PersonList from './components/PersonList';

export const NameContext = React.createContext();

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  return (
    <NameContext.Provider value={{ name, setName }}>
      <PersonList setNames={setNames} names={names} />
      <MyInput ref={inputRef} setName={setName} />
      <AddButton inputRef={inputRef} name={name} setNames={setNames} setName={setName} />
    </NameContext.Provider>
  );
}

export default App;
