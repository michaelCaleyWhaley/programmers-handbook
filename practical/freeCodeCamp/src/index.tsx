// // online cloud reading application
// // similar to amazon kindle
// //
// import { Library } from './Class/Library';
// import { User } from './Class/User';

// // Create library of books
// const libraryInstance = new Library();
// libraryInstance.addBookToCatalogue({ title: 'Lord of the Flies' });

// // Create user and add book to user collection
// const newUser = new User({ username: 'Michael' });
// const bookId =
//   libraryInstance.bookCatalogue[Object.keys(libraryInstance.bookCatalogue)[0]]
//     .id;
// newUser.addBookToCollection({ bookId: bookId });

// // Get the title of the first book in users collection
// const firstBookInCollection = newUser.bookCollection[0];
// const bookTitle = newUser.getBookTitle({
//   library: libraryInstance,
//   bookId: firstBookInCollection.bookId,
// });
// console.log('bookTitle: ', bookTitle);

// // Get the active book
// const activeBook = newUser.getActiveBook({ library: libraryInstance });
// console.log('activeBook: ', activeBook);

////////////////////////////////////////
// ALGORITHM
////////////////////////////////////////

// detect two most likely books that might have plagiarism: longest shared section of text
// library of books pre-existing

const textArray = [
  'Lorem ipsum dolor.1',
  'Vestibulum ac elit.',
  'Pellentesque habitant.',
  'Quisque commodo, metus.',
  'Lorem ipsum dolor.123',
  'Fusce laoreet turpis.',
  'Lorem ipsum dolor.',
  'Vivamus ut mi eu.',
  'Praesent ultrices odio.',
  'Suspendisse potenti.',
  'Lorem ipsum dolor.1234',
  'Proin sit amet leo.',
];

const matchingMap: { [key: number]: number } = {};
const topMatch: { pos: number; score: number } = {
  pos: -1,
  score: 0,
};
const secondMatch: { pos: number; score: number } = {
  pos: -1,
  score: 0,
};

function findMatchingSubsets() {
  for (let i = 0; i < textArray.length; i++) {
    const sentence = textArray[i];

    for (let j = 0; j < sentence.length; j++) {
      for (let k = j + 1; k <= sentence.length; k++) {
        const subString = sentence.substring(j, k);

        for (let l = 0; l < textArray.length; l++) {
          const sentence2 = textArray[l];

          if (l != i && sentence2.indexOf(subString) !== -1) {
            matchingMap[i] ? (matchingMap[i] += 1) : (matchingMap[i] = 1);
          }
        }
      }
    }
  }

  Object.keys(matchingMap).forEach((key) => {
    const score = matchingMap[key as unknown as number];

    if (parseInt(key, 10) !== topMatch.pos && secondMatch.score < score) {
      secondMatch.score = score;
      secondMatch.pos = parseInt(key, 10);
    }

    if (parseInt(key, 10) !== secondMatch.pos && topMatch.score < score) {
      topMatch.score = score;
      topMatch.pos = parseInt(key, 10);
    }
  });
}

findMatchingSubsets();

console.log('topMatch: ', topMatch);
console.log('secondMatch: ', secondMatch);
