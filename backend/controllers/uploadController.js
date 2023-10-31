import cloudinary from "../util/cloudinaryAvatar.js";
import User from "../db/userModel.js";
import fs from "fs/promises";

const postAvatar = async (req, res) => {
  const deleteLocalAvatar = fs.unlink;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const avatarUrl = result.secure_url;

    const userId = req.params.id;
    const user = await User.findByIdAndUpdate(
      userId,
      { avatar: avatarUrl },
      { new: true }
    );

    await deleteLocalAvatar(req.file.path);

    res.status(200).json({
      success: true,
      message: "Archivo subido correctamente",
      avatar: avatarUrl,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error al cargar el archivo",
    });
  }
};

export { postAvatar };
