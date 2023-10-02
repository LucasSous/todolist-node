const validateFieldName = (req, resp, next) => {
  const { body } = req;
  if (body.name == undefined) {
    return resp.status(400).json({ message: 'The field "name" is required' });
  }

  if (body.name == "") {
    return resp.status(400).json({ message: "name cannot be empty" });
  }

  next();
};

const validateFieldEmail = (req, resp, next) => {
  const { body } = req;
  if (body.email == undefined) {
    return resp.status(400).json({ message: 'The field "email" is required' });
  }

  if (body.email == "") {
    return resp.status(400).json({ message: "email cannot be empty" });
  }

  next();
};

const validateFieldPassword = (req, resp, next) => {
  const { body } = req;
  if (body.password == undefined) {
    return resp
      .status(400)
      .json({ message: 'The field "password" is required' });
  }

  if (body.password == "") {
    return resp.status(400).json({ message: "password cannot be empty" });
  }

  next();
};

export default {
  validateFieldName,
  validateFieldEmail,
  validateFieldPassword,
};
