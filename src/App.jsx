import { useState, useEffect } from 'react';
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main.jsx";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [beerArray, setBeerArray] = useState([]);
  const [newURL, setNewURL] = useState("");


  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers?${newURL}`;
    fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(beerObject => {
      setBeerArray(beerObject);
      console.log(beerObject)
    })
  }, [newURL])
  
  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    setSearchTerm(searchInput);
  }
  
  const filteredBeers = beerArray.filter(beer => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  })
  return (
    <div className="App">
      <Nav searchTerm={searchTerm} handleInput={handleInput} />
      <Main beerArr={filteredBeers} />
    </div>
  );
}

export default App;
