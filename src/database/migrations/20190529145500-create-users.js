'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(123),
            },
            avatar: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            password_hash: {
                allowNull: false,
                type: Sequelize.STRING(123),
            },
            provider: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
