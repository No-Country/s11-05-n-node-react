import { Types } from "mongoose";
import Team from "../db/teamModel.js"; 


const createTeam = async (req, res) => {
  console.log(req.userId)
  try {
    const {
      name,
      image,
      players
    } = req.body;

    // Crear el equipo con el capitán establecido como req.userId
    const newTeam = new Team({
      captain: req.userId,
      name,
      image,
      players, // deben pasarse del front los id de usuarios ya registrados 
     
    });

    await newTeam.save();

    res.status(201).json(newTeam);
  } catch (error) {
    console.log(error.message);
    res.status(409).send({ message: "Creación de equipo inválido" });
  }
};

export {createTeam };
