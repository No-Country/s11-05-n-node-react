import multer from "multer";

const fileFilter = (_req, file, cb) => {
  const allowedExtensions = ["png", "jpeg", "jpg"];
  const fileExtension = file.originalname.split(".").pop().toLowerCase();
  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file extension"), false);
  }
};

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./upload");
  },
  filename: function (_req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage, fileFilter: fileFilter });
