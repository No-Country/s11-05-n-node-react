import multer from 'multer'

const fileFilter = (req, file, cb) => {
    //Extensiones de archivos
    const allowedExtensions = ['png', 'jpeg', 'jpg'];
    const fileExtension = file.originalname.split('.').pop().toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      // Acepta el archivo si la extensión está en la lista permitida
      cb(null, true);
    } else {
      // Rechaza el archivo si la extensión no está en la lista permitida
      cb(new Error('Invalid file extension'), false);
    }
  };
  

const storage = multer.diskStorage({
    //Donde se almacenan los avatar
  destination: function (_req, _file, cb) {
    cb(null, './upload')
    console.log(upload);
  },
  //Como se nombran
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage: storage })

