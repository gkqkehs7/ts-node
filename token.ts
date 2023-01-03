import jwt from "jsonwebtoken";

jwt.sign({ id: "minu" }, "mySecretKey", options);
// jwt.verify(token, secretKey) 없으면 error
// jwt.sign(
//     { id: exUser.id },
//     "jwt-secret-key",
//     {
//       algorithm: "HS256",
//       expiresIn: "14d",
//     }
//   );

// verify는 id를 return
