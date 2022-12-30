import IUser from "../models/user";
// 만약 여기에 User가 안쓰인다 하면 다른 것을 import해와야한다 안그러면 컴파일 안한다.
// declare global {
//   namespace Express {
//     interface Request {
//       user?: User;
//     }
//   }
// }

// declare global -> declare module
//위 처럼 확장먼저 해보고 안먹으면 아래 방법(ambient module) 실시
// declare module "express-serve-static-core" {
//   interface Request {
//     user?: User;
//   }
// }

declare global {
  namespace Express {
    export interface User extends IUser {}
  }
}
