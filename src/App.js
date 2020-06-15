import React, { useState, useEffect } from 'react';
import CardList from './Components/CardList';
import './App.css';
import Axios from 'axios';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
      setMonsters(res.data);
    };
    getData();
  }, []);

  const filturedMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()),
  );
  console.log(filturedMonsters);

  return (
    <div className='App'>
      <h1> MONSTER ROLODEX </h1>
      <input
        className='search'
        type='text'
        placeholder='search monster'
        onChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filturedMonsters} />
    </div>
  );
}

export default App;
