'use strict';

const { Sequelize } = require('winext-repo-store').dataSequelizeStore;

module.exports = {
  name: 'UserModel',
  attributes: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    userName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    passwordConfirm: { type: Sequelize.STRING },
    //filter
    slug: { type: Sequelize.STRING },
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    created_at: { type: Sequelize.DATE },
    created_by: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updated_by: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'users',
    timestamps: false,
  },
};
