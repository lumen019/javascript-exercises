// const books = [
//       { title: 'Book', author: 'Name'},
//       { title: 'Book2', author: 'Name2'}
//     ]

// const getTheTitles = function(books) {
//   let arr = [];
//   for (let i=0; i<books.length; i++) {
//     arr.push(books[i].title);
//   }
//   return arr;
// };

const getTheTitles = function(books) {
   return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
