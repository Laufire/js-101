/* An example for branchless Classification */
const { findKey } = require('@laufire/utils/collection');

const data = [
  {
    name: 'Ram',
    age: 20,
  },
  {
    name: 'Sam',
    age: 18,
  },
  {
    name: 'Pam',
    age: 12,
  },
  {
    name: 'Ham',
  }
];

// NOTE: The order of declaration matters.
const ageGroupClassifiers = {
  adult: (person) => person.age > 19,
  teen: (person) => person.age > 12,
  child: (person) => person.age > 0,
  unknown: () => true,
};

const classifyAgeGroup = (person) => ({
  ...person,
  ageGroup: findKey(ageGroupClassifiers,
    (classify) => classify(person)),
});

const main = (people) =>
  console.log(people.map(classifyAgeGroup));

main(data);
