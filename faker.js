const { faker } = require('@faker-js/faker');

// const randonTest = faker.company.name();

const randomName = faker.lorem.paragraphs(10, '<br/>\n');; // Rowan Nikolaus
console.log(randomName);