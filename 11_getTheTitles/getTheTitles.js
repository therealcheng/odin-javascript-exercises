const getTheTitles = function (books) {
  let bookArray = [],
    current;
  for (let i = 0; i < books.length; i++) {
    current = books[i].title;

    bookArray.push(current);
  }
  console.log(current);
  console.log(bookArray);
  return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
