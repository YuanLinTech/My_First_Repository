import getImageUrl from './utils.js';

function Avatar({ person, width = 120, height = 150}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={width}
      height={height}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        width={140}
        height={120}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        width={210}
        height={200}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}