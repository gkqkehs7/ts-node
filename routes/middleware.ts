import { Request, Response, NextFunction } from "express";

// 여기서는 그냥 함수이기 때문에 req, res, next의 타입을 정의해주어야한다.
const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

const isNotLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인한 사용자는 접근할 수 없습니다.");
  }
};

export { isLoggedIn, isNotLoggedIn };
