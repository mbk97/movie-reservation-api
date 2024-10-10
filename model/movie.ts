import { DataTypes, Model, Optional } from "sequelize";
import { dbConnect } from "../config/db";
// import { User } from "./user";

interface IMovies {
  id: number;
  movie_title: string;
  movie_description: string;
  movie_image: string;
  movie_showtime: string;
}

interface MoviesCreationAttributes extends Optional<IMovies, "id"> {}

class Movies
  extends Model<IMovies, MoviesCreationAttributes>
  implements IMovies
{
  public id!: number;
  public movie_title!: string;
  public movie_description!: string;
  public movie_image!: string;
  public movie_showtime!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the Workout model
Movies.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_showtime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnect,
    modelName: "Workout",
    tableName: "workouts",
    timestamps: true,
  },
);

export { Movies };
