const dotenv = require("dotenv");
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  [key: string]: string;
};

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  // dotenv쓰기 위해 js파일로 변환
  development: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "ts-node",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "ts-node",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD!,
    database: "ts-node",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

export default config;
