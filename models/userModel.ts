import db from "../utils/database";
import { DataTypes } from "sequelize"

const userModel = db.define("users", {
    username: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {
    timestamps: true
  });

export default userModel