import { useImmer } from 'use-immer';
import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <div>
        <label>
          Name:&nbsp;
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Title:&nbsp;
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
      </div>
      <div>
        <label>
          City:&nbsp;
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
      </div>
      <div>
        <label>
          Image:&nbsp;
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

function ImmerForm() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <div>
        <label>
          Name:&nbsp;
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Title:&nbsp;
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
      </div>
      <div>
        <label>
          City:&nbsp;
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
      </div>
      <div>
        <label>
          Image:&nbsp;
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <Form/>
      <ImmerForm/>
    </>
  );
}