'use strict';

const { Sequelize } = require('winext-repo-store').dataSequelizeStore;

module.exports = {
  name: 'UserModel',
  attributes: {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    userName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    permissions: [Sequelize.STRING],
    accessToken: { type: Sequelize.STRING },
    refreshToken: { type: Sequelize.STRING },
    //filter
    slug: { type: Sequelize.STRING },
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    created_at: { type: Sequelize.DATETIME },
    created_by: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.DATETIME, defaultValue: Sequelize.NOW },
    updated_by: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'users',
    timestamps: false,
  },
};
