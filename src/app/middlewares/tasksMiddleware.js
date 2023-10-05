import { StatusEnum } from "../enums/statusEnum.js";

const validateFieldTitle = (req, resp, next) => {
  const { body } = req;
  if (body.title == undefined) {
    return resp.status(400).json({ message: 'The field "title" is required' });
  }

  if (body.title == "") {
    return resp.status(400).json({ message: "title cannot be empty" });
  }

  next();
};

const validateFieldStatus = (req, resp, next) => {
  const { body } = req;
  if (body.status == undefined) {
    return resp.status(400).json({ message: 'The field "status" is required' });
  }

  if (body.status == "") {
    return resp.status(400).json({ message: "status cannot be empty" });
  }

  if (!Object.values(StatusEnum).includes(body.status)) {
    return resp.status(400).json({ message: "Incorrect status value" });
  }

  next();
};

export default {
  validateFieldTitle,
  validateFieldStatus,
};
