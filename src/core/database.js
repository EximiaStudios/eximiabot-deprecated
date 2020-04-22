module.exports = () => {
    const Sequelize = require("sequelize");

    const sequelize = new Sequelize("database", "user", "password", {
        host: "localhost",
        dialect: "sqlite",
        logging: false,
        // SQLite only
        storage: "db/status.sqlite",
    });

    const StatusDB = sequelize.define("status", {
        name: {
            type: Sequelize.STRING,
            unique: true,
        },
        text: Sequelize.STRING,
        activity: Sequelize.STRING
    });

    return StatusDB;
};