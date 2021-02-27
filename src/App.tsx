import React from 'react';
import data from "./data.json"



//Show & Tell mapping and object => arrays
//I want to see just the values (of key:value pair) of Object "bigthing" 
//using map 




// const objectbigthing = data.bigthing
const objectbigthing = Object.values(data.bigthing)
// const objectbigthing = Object.keys(data.bigthing)
// const objectbigthing = Object.entries(data.bigthing)
const displayedValues = objectbigthing.map((x) => {
  return <p>{x}</p>
})

function App() {
  return (
    <div>{displayedValues}</div>
    // <div>{data.bigthing.smallthing1}</div>
  );
}

export default App;




//Key takeaways:
// only arrays have a map method- get object into sensible array form
// different ways of turning an object into an array