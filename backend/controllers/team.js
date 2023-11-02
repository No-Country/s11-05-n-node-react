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
      }).populate({
        path: "category",
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
    const { name, image, players, category } = req.body;

    // Crear el equipo con el capitán establecido como req.userId
    const newTeam = new Team({
      captain: req.userId,
      name,
      image,
      players, // deben pasarse del front los id de usuarios ya registrados
      category,
    })
    const team = await newTeam.save()
 
    const teamFound = await Team.findById(team._id)
    .populate({ path: "category"})
    .exec();
    

    res.status(201).json(teamFound);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error en Controlador de Equipo actualizando" });
    //res.status(409).send({ message: "Creación de equipo inválido" });
  }
};

const changeTeam = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const { name, image, players, category } = req.body;

  try {
    const teamFound = await Team.findById(id)
      .populate({ path: "captain players", select: "-passwordhash" })
      .exec();
    if (!teamFound) {
      throw new Error("Team no encontrado");
    }
    if (userId != teamFound.captain) {
      res.status(401).send({ message: "Usuario no autorizado" });
    }
    const changedTeam = Team.findByIdAndUpdate(
      id,
      { name, image, players, category },
      { new: true }
    ).exec();
    res
      .status(201)
      .json({ message: "Equipo modificado", team: { changedTeam } });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error en Controlador de Equipo actualizando" });
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

const getMyteams = async (req, res) => {
  // obtener los teams en los cuales soy capitan y player
  const userId = req.userId;
  console.log(userId);
  try {
    const teams = await Team.find({
      $or: [{ captain: userId }, { players: userId }],
    }).populate("players category");

    res.status(201).json({ message: "Equipos encontrados", team: { teams } });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "The operation could not be performed." });
  }
};

const addPlayer = async (req, res) => {
  const teamId = req.params.id;
  const userId = req.userId;
  const { player } = req.body; // Recibimos un solo jugador a agregar
  try {
    const teamFound = await Team.findById(teamId);
    if (!teamFound) {
      throw new Error("Equipo no encontrado");
    }

    if (userId != teamFound.captain) {
      res.status(401).send({ message: "Usuario no autorizado" });
      return;
    }

    if (!player) {
      res
        .status(400)
        .send({ message: "La solicitud debe incluir un jugador para agregar" });
      return;
    }

    teamFound.players.push(player);

    const changedTeam = await teamFound.save();

    res.status(201).json({ message: "Equipo modificado", team: changedTeam });
  } catch (error) {
    res.status(500).send({
      message: "Error en el controlador de agregar jugadores a mi equipo",
    });
  }
};

export {
  changeTeam,
  createTeam,
  getTeam,
  getTeams,
  getUserTeams,
  deleteTeam,
  getMyteams,
  addPlayer,
};
