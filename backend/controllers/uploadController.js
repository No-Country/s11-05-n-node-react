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



/* const postAvatar = async (req, res) => {
  const files = ['png', 'jpeg', 'jpg'];
  try {
    // Obtain image
    const dataAvatar = req.file; // Image

    if (!dataAvatar) {
      return res.status(400).json({
        message: 'The image is required',
      });
    }

    const extension = dataAvatar.originalname.slice(
      ((dataAvatar.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );

    // Validate extension
    if (!files.includes(extension)) {
      return res.status(400).json({
        message: 'The file is not allowed',
      });
    }

    // Upload image to Cloudinary (You need to define 'cloudinaryUpload' function)
    const avatarUrl = await cloudinaryUpload(dataAvatar.path, 1000);

    if (!avatarUrl) {
      return res.status(400).json({
        message: 'Error in upload image',
      });
    }

    // Include avatar URL in data
    const data = { avatar: avatarUrl };

    // Delete local image (You need to define 'deleteLocalAvatar' function)
    await deleteLocalAvatar(dataAvatar.path);

    return res.status(200).json({
      success: true,
      message: 'Uploaded!',
      data: data,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

export default { postAvatar}
 */



/* const createAvatar = async (req, res) => {
    cloudinary.uploader.upload(req.file.path, function (err, result){
        if(err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error"
        })
    }
    res.status(200).json({
        success: true,
        message:"Uploaded!",
        data: result
    })
})
      }
  
      export  {createAvatar} */