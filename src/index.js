'use strict';

const SupperAdminModel = require('./models/supper-admin');
const UserModel = require('./models/user-model');
const RoleModel = require('./models/role-model');
const PermissionModel = require('./models/permissions-model');
const GroupModel = require('./models/group-model');
const BoardModel = require('./models/board-model');

const models = [
  SupperAdminModel,
  UserModel,
  RoleModel,
  PermissionModel,
  GroupModel,
  BoardModel
];

module.exports = models;
