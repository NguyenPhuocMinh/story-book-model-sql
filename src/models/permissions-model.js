'use strict';

const { Sequelize } = require('winext-repo-store').dataSequelizeStore;

module.exports = {
  name: 'PermissionModel',
  attributes: {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    //filter
    slug: { type: Sequelize.STRING },
    deleted: { type: Sequelize.BOOLEAN, defaultValue: false },
    created_at: { type: Sequelize.DATE },
    created_by: { type: Sequelize.STRING },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updated_by: { type: Sequelize.STRING },
  },
  options: {
    tableName: 'permissions',
    timestamps: false,
  },
};
