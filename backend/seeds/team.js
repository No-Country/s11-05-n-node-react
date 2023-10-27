import User from "../db/userModel.js";
import Category from "../db/categoryModel.js";
import Team from '../db/teamModel.js';
import { faker } from '@faker-js/faker';


export const seedTeam = async () => {
  try {
    const usersData = await User.find()
    const categoryData = await Category.find()
    const teamsData = []
    usersData.forEach(user => {

        const teamPlayers = []
        //define aleatoriamente si tiene de 0-5 jugadores en el team
        for (let i = 0; i < Math.floor(Math.random() * 6); i++) {
            const randomUser = usersData[Math.floor(Math.random() * usersData.length)];
            if (!teamPlayers.includes(randomUser._id) && user._id !== randomUser._id) {
              teamPlayers.push(randomUser._id);
            }
        }

        teamsData.push({
            captain: user._id,
            image:faker.image.url(),
            name:faker.company.name(),
            players: teamPlayers,
            category: categoryData[Math.floor(Math.random() * categoryData.length)]._id
        })
    })
    await Team.insertMany(teamsData);
    console.log('Inserto con exito semilla team.');
  } catch (error) {
    console.error('Error al insertar datos de semilla:', error);
  } finally {
  }
};