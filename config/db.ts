import { Sequelize } from "sequelize";

const dbConnect = new Sequelize("movie-reservation", "root", "oyindamola97$", {
  dialect: "mysql",
  host: "localhost",
});

export { dbConnect };
