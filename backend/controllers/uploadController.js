import cloudinary from '../util/cloudinaryAvatar.js';
import User from "../db/userModel.js";

const postAvatar = async (req, res) => {
    console.log('Entrando en postAvatar');
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log('Archivo cargado con éxito:', result);

        const avatarUrl = result.secure_url;

            // Actualiza el campo 'avatar' del usuario
            const userId = req.params.id; 
            const user = await User.findByIdAndUpdate(
                userId,
                { avatar: avatarUrl },
                { new: true }
            );

        res.status(200).json({
            success: true,
            message: "Archivo subido correctamente",
            avatar : avatarUrl
      
        });
    } catch (err) {
        console.error('Error al cargar el archivo:', err);
        res.status(500).json({
            success: false,
            message: "Error al cargar el archivo",
        });
    }
};

export { postAvatar };