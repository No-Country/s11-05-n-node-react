import { validationResult } from "express-validator";

const ValidatorGeneral = (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(403).json({ errors: errors.array() });
  } catch (err) {
    res.status(403);
    res.send({ error: err.array() });
  }
};

export { ValidatorGeneral };
