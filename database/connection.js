import Sequelize from "sequelize";
import config from "./config/config.mjs";

function connect() {
  try {
    let sequelize;
    if (process.env.NODE_ENV === "production") {
      sequelize = new Sequelize(config.production);
    } else {
      sequelize = new Sequelize(config.production);
    }
    return sequelize;
  } catch (error) {
    console.log(error);
  }
}

const connection = connect();

export default connection;
