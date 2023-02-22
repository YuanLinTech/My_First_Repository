import { useState } from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const [chemistsOnly, setChemistsOnly] = useState(false);

  function selectChemists(){
      setChemistsOnly(!chemistsOnly);
  }

  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const peopleItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );

  const chemistsItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  
  return (
    <>
      <ul>{chemistsOnly? chemistsItems: peopleItems}</ul>
      <button onClick={selectChemists} style={{marginLeft: 15}}>{chemistsOnly? "Show all": "Show chemists only"}</button>
    </>
  );
}