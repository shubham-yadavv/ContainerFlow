const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  db: {
    MONGO_IP: process.env.MONGO_IP || "mongo",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,

    localmongo: process.env.LOCAL_MONGO,
    mongoUrlDockerCompose: process.env.MONGO_URL_DOCKER_COMPOSE,
  },

  server: {
    port: process.env.PORT,
  },
};
