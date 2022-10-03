const findTheOldest = function (people) {
  let yearsLived = 0,
    oldestNumber = 0,
    oldestName = '',
    arrayN = -1;

  // return name that is older
  people.forEach((person) => {
    // finding age
    if (person.hasOwnProperty('yearOfDeath')) {
      yearsLived = person.yearOfDeath - person.yearOfBirth;
      person.yearsLived = yearsLived;
    } else {
      yearsLived = 2022 - person.yearOfBirth;
      person.yearsLived = yearsLived;
    }
    // checking for greater age
    if (yearsLived > oldestNumber) {
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
