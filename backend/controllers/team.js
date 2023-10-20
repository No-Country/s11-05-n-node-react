import Team from "../db/teamModel.js";

const getTeam = async (req, res) => {
    const { id } = req.params;

    try {
        const teamFound = await Team.findById(id).populate('users').exec();
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
        const allTeams = await Team.find().populate('users').exec();
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
      }).populate('captain players').exec();
  
      res.status(200).json({ message: "Equipos del usuario encontrados", userTeams });
    } catch (error) {
      res.status(500).send({ message: "Error en Controlador de Equipos del Usuario", error: error.message });
    }
  };

export { getTeam, getTeams,getUserTeams };
