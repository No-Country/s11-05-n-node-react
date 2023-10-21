import Team from "../db/teamModel.js";

const getTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const teamFound = await Team.findById(id).populate({ path: 'captain players', select: '-passwordhash' }).exec();
        if (!teamFound) {
            throw new Error('Team no encontrado');
        }
        res.status(200).json({ message: "Equipo encontrado", team:{teamFound} });
    } catch (error) {
        res.status(500).send({ message: "Error en Controlador de Equipo" });
    }
};


const getTeams = async (req, res) => {
    try {
        const allTeams = await Team.find().populate({ path: 'captain players', select: '-passwordhash' }).exec();
        res.status(200).json({ message: "Equipos encontrados", allTeams });
    } catch (error) {
        res.status(500).send({ message: "Error en Controlador de Equipos", error: error.message });
    }
};


const getUserTeams = async (req, res) => { 
    try {   
      const userTeams = await Team.find({
        $or: [
          { captain: req.userId }, 
          { players: req.userId }   
        ]
      }).populate({ path: 'captain players', select: '-passwordhash' }).exec();
      res.status(200).json({ message: "Equipos del usuario encontrados", userTeams });
    } catch (error) {
      res.status(500).send({ message: "Error en Controlador de Equipos del Usuario", error: error.message });
    }
  };


const createTeam = async (req, res) => {
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
    res.status(409).send({ message: "Creación de equipo inválido" });
  }
};

export {createTeam, getTeam, getTeams,getUserTeams };
