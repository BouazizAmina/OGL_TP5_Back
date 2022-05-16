module.exports = (sequelize, Sequelize) => {
    const Parking = sequelize.define("parkings", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: Sequelize.TEXT
        },
        etat: {
            type: Sequelize.STRING
        },
        taux: {
            type: Sequelize.INTEGER
        },
        nom: {
            type: Sequelize.STRING
        },
        commune: {
            type: Sequelize.STRING
        },
        distance: {
            type: Sequelize.DOUBLE
        },
        duree: {
            type: Sequelize.INTEGER
        },
        tempsOuv: {
            type: Sequelize.INTEGER
        },
        tempsFerm: {
            type: Sequelize.INTEGER
        },
        unitPrice: {
            type: Sequelize.INTEGER
        },
        prix: {
            type: Sequelize.DOUBLE
        }
    });
    return Parking;
  };