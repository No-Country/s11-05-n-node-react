import Team from "../db/teamModel.js";

const getTeam = async (req, res) => {
  const { id } = req.params;
  try {
    const teamFound = await Team.findById(id)
    .populate({
      path: "captain players",
      select: "firstName lastName nickName email",
    })
      .exec();
    if (!teamFound) {
      throw new Error("Team no encontrado");
    }
    res.status(200).json({ message: "Equipo encontrado", team: { teamFound } });
  } catch (error) {
    res.status(500).send({ message: "Error en Controlador de Equipo" });
  }
};

const getTeams = async (req, res) => {
  try {
    const allTeams = await Team.find()
    .populate({
      path: "captain players",
      select: "firstName lastName nickName email",
    })
      .exec();
    res.status(200).json({ message: "Equipos encontrados", allTeams });
  } catch (error) {
    res.status(500).send({
      message: "Error en Controlador de Equipos",
      error: error.message,
    });
  }
};

const getUserTeams = async (req, res) => {
  try {
    const userTeams = await Team.find({
      $or: [{ captain: req.userId }, { players: req.userId }],
    })
    .populate({
      path: "captain players",
      select: "firstName lastName nickName email",
    })
    .exec();
    res
      .status(200)
      .json({ message: "Equipos del usuario encontrados", userTeams });
  } catch (error) {
    res.status(500).send({
      message: "Error en Controlador de Equipos del Usuario",
      error: error.message,
    });
  }
};

const createTeam = async (req, res) => {
  try {
    const { name, image, players } = req.body;

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
      res.status(500).send({ message: "Error en Controlador de Equipo actualizando" });
      //res.status(409).send({ message: "Creación de equipo inválido" });
  }
};

const changeTeam = async (req, res) => {
  const { id } = req.params;
  const {
    captainId,
    name,
    image,
    players
  } = req.body;
try {
      const teamFound = await Team.findById(id).populate({ path: 'captain players', select: '-passwordhash' }).exec();
      if (!teamFound) {
          throw new Error('Team no encontrado');
      }
      const changedTeam = Team.findByIdAndUpdate(id, { captainId, name, image, players }, {new: true}).exec();
      res.status(201).json({ message: "Equipo modificado", team:{changedTeam} });

  } catch (error) {
      res.status(500).send({ message: "Error en Controlador de Equipo actualizando" });
  }
};
  
const deleteTeam = async (req, res) => {
  const { userId } = req;
  const { id } = req.params;
  try {
    const team = await Team.findOne({ _id: id, captain: userId });

    if (team) {
      const deleteTeam = await team.deleteOne();
      return res.status(200).send({ message: "Team deleted", deleteTeam });
    }

    return res
      .status(500)
      .send({ message: "Only the owner of the team can delete it." });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "The operation could not be performed." });
  }
};

export { changeTeam, createTeam, getTeam, getTeams, getUserTeams, deleteTeam };
