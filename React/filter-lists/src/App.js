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

  const list = chemistsOnly? chemists: people;

  const listItems = list.map(person =>
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
      <ul>{listItems}</ul>
      <button onclick={selectChemists}>{chemistsOnly? "Show all": "Show chemists only"}</button>
    </>
  );
}