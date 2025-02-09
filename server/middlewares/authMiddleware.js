// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   try {
//     const token = req.header("authorization").replace("Bearer ", "");
//     const decryptedData = jwt.verify(token, process.env.jwt_secret);
//     req.body.userId = decryptedData.userId;
//     next();
//   } catch (error) {
//     return res.send({
//       success: false,
//       message: error.message,
//     });
//   }
// };


const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    const decryptedData = jwt.verify(token, process.env.jwt_secret);
    req.body.userId = decryptedData.userId;
    next();
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};


// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   try {
//     const token = req.header("authorization");
//     if (!token || !token.startsWith("Bearer ")) {
//       return res.status(401).send({
//         success: false,
//         message: "Authorization token missing or malformed",
//       });
//     }

//     const accessToken = token.replace("Bearer ", "");
//     const decryptedData = jwt.verify(accessToken, process.env.jwt_secret);

//     // Attach user data to req.user
//     req.user = { userId: decryptedData.userId };
//     next();
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       return res.status(401).send({
//         success: false,
//         message: "Token has expired. Please refresh your token.",
//       });
//     }

//     return res.status(401).send({
//       success: false,
//       message: "Authentication failed. " + error.message,
//     });
//   }
// };


// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   try {
//     const token = req.header("authorization");
//     if (!token || !token.startsWith("Bearer ")) {
//       return res.status(401).send({
//         success: false,
//         message: "Authorization token missing or malformed",
//       });
//     }

//     const accessToken = token.replace("Bearer ", "");
//     const decryptedData = jwt.verify(accessToken, process.env.jwt_secret);

//     // Attach user data to req.user
//     req.user = { userId: decryptedData.userId };
//     next();
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       console.error("Token expired: Allowing the request for now.");
//       req.user = null; // You can proceed without a user if necessary
//       return next(); // Allow the project to continue running
//     }

//     console.error("JWT verification failed:", error.message);
//     return res.status(401).send({
//       success: false,
//       message: "Authentication failed. " + error.message,
//     });
//   }
// };
