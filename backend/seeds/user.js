import User from "../db/userModel.js";
import { faker } from '@faker-js/faker';
import becrypt from "bcrypt";


const generateFakeUser = () => {
  return {
    avatar: faker.internet.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    nickName: faker.internet.userName(),
    email: faker.internet.email(),
    passwordhash: faker.string.alphanumeric(8),
    cellNumber: faker.phone.number('#########'),
    dateOfBirth: faker.date.past(),
    verificationCode: faker.string.alphanumeric(5),
    status: true,
    age: faker.string.numeric({ length: { min: 18, max: 90 } }),
    ubication: {
      country: faker.location.country(),
      city: faker.location.city(),
    },
  };
};



export const seedUser = async () => {
  const fakeUsers = Array.from({ length: 20 }, generateFakeUser);
  let passwordhash = becrypt.hashSync('123456789', 10);
  fakeUsers.push({
    avatar: faker.internet.avatar(),
    firstName: 'testNombre',
    lastName: 'testApellido',
    nickName: 'test',
    email: 'test@test.com',
    passwordhash: passwordhash,
    cellNumber: faker.phone.number('#########'),
    dateOfBirth: faker.date.past(),
    verificationCode: faker.string.alphanumeric(5),
    status: true,
    age: faker.string.numeric({ length: { min: 18, max: 90 } }),
    ubication: {
      country: faker.location.country(),
      city: faker.location.city(),
    },
  })
  try {
    await User.insertMany(fakeUsers);
    console.log('Inserto con exito semilla usuario.');
  } catch (error) {
    console.error('Error semilla usuario:', error);
  }
};


