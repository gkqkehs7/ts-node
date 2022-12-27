import { Model, DataTypes } from "sequelize";

import { dbType } from "./index"; // 여기는 순환참조 지만, 문제가 발생하지 않음
// type을 순환참조하는 것은 문제가 되지 않는다.
import { sequelize } from "./sequelize"; // 이 부분 떄문에 index.js에서 sequelize객체를 만드는 부분을 뺴주어야한다

class User extends Model {
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createAt!: Date; //sequelize에서 자체적 관리하기 때문에 readonly
  public readonly updatedAt!: Date;
}

User.init(
  {
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    // snsId: {
    //   type: DataTypes.STRING(100),
    // },
    // provider: {
    //   type: DataTypes.STRING(20),
    // },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export default User;
