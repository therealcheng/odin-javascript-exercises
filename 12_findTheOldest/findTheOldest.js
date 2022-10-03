const findTheOldest = function (people) {
  let yearsLived = 0,
    oldestNumber = 0,
    oldestName = '',
    arrayN = -1;

  // return name that is older
  people.forEach((person) => {
    yearsLived = person.yearOfDeath - person.yearOfBirth;
    person.yearsLived = yearsLived;
    if (person.hasOwnProperty('yearOfDeath')) arrayN++;
    else if (yearsLived > oldestNumber) {
      oldestNumber = yearsLived;
      oldestName = person.name;
      arrayN++;
    }
  });
  //   console.log(oldestNumber);
  //   console.log(oldestName);
  return people[arrayN];
};

// Do not edit below this line
module.exports = findTheOldest;
