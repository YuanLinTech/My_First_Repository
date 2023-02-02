const fs = require('fs') // Store the imported file system in a simple constant.
fs.writeFileSync('Hello.txt', 'Hello from Node.js'); // The writeFileSync() method will write the file to our hard drive.
/* And the argument it wants is the path to the file, including the file name.
And here we could name this hello.txt.
And then the second argument is the content of that file.
And here we could store "Hello from node.js again.*/

// App.js
import { getImageUrl } from './utils.js';

function Avatar({ profile, width = '1260', height = '750' }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(profile, width, height)}
      alt={profile.name}
      width={width}
      height={height}
    />
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

// utils.js
export function getImageUrl(photo, width = '1000', height = '700') {
    return (
        'https://images.pexels.com/photos/' +
        photo.imageId + '/pexels-photo-' + 
        photo.imageId + '.jpeg' + '?w=' + width + '?h=' + height
    );
}