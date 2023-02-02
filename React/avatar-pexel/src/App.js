import getImageUrl from './utils.js';

function Avatar({ profile, width = '1260', height = '750' }) {
  return (
    <div style={{margin: 10}}>
      <img
        className="avatar"
        src={getImageUrl(profile, width, height)}
        alt={profile.name}
        width={width}
        height={height}
      />
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        width={750}
        height={1000}
        profile={{ 
          name: 'Man in Black Jacket', 
          imageId: '771742'
        }}
      />
      <Avatar
        width={1000}
        height={800}
        profile={{
          name: 'Smiling Woman in White Bikini Top', 
          imageId: '3811176'
        }}
      />
      <Avatar
        profile={{ 
          name: 'Photo Of Woman In Yellow Shirt',
          imageId: '3760917'
        }}
      />
    </div>
  );
}