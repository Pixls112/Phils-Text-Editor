import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  // This creates a connection to the database
	const jateDb = await openDB("jate", 1);
  // This creates a new transaction and allows the data to be saved and added to database
	const tx = jateDb.transaction("jate", "readwrite");
  // This opens up the object store for jate
	const store = tx.objectStore("jate");
  // This uses the put method to add in content
	const request = store.put({ id: 1, value: content });
  // This is used to confirm wether data has been saved to database
	const result = await request;
	console.log("Data was saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the jateDB');
    // This creates a connection to the database
  const jateDb = await openDB('jate', 1);
    // This creates a new transaction but sets the data privelage to readonly
  const tx = jateDb.transaction('jate', 'readonly');
    // This opens up the object store for jate
  const store = tx.objectStore('jate');
    // This uses the get method to grab data from data base
  const request = store.get(1);
    // This is used to confirm wether data has been successfully pulled
  const result = await request;
  console.log('Data was pulled from jateDB', result);
  return result?.value;
};

initdb();
