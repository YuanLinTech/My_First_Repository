import { writeFileSync } from 'fs'; // Store the imported file system in a simple constant.
writeFileSync('Hello.txt','Hello from Node.js'); // The writeFileSync() method will write the file to our hard drive.
/* And the argument it wants is the path to the file, including the file name.

And here we could name this hello.txt.

And then the second argument is the content of that file.

And here we could store "Hello from node.js again.*/