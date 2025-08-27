import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id },"superiotoken", {
    expiresIn: "30d",
  });
};

export default generateToken;
