import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import hpp from "hpp";
import helmet from "helmet";
import passport from "passport";

dotenv.config();

const app = express();
const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 80);
// passportConfig();
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err: Error) => {
//     console.error(err);
//   });

if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan("combined"));
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).send(err);
  }
);

app.get("/", (req, res, next) => {
  res.send("server is running");
});

app.listen(app.get("port"), () => {
  console.log(`server is running on ${app.get("port")}`);
});
