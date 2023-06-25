
// const User = require("../models/UsersSchema");
// const isAdmin = (req, res, next) => {
//   const userId = req.user.id;
//   const user = User.findById(userId);
//   if (user.role !== 1) {
//     res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
//   }
//   next();
// };
// module.exports = isAdmin;
