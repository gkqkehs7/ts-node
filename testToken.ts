import jwt from "jsonwebtoken";

const token = jwt.sign(
  { foo: "bar" }, // token에 저장할 객체 key-value
  "secret-key", // toekn만들때 사용하는 문자열
  { algorithm: "RS256", expiresIn: "1d", keyid: "a" } // 사용할 알고리즘 및, 만료 시간
  //   function (err, token) {
  //     console.log(token);
  //   }
);

const decode = token.foo;
