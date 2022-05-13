'use strict';

const UserModel = require('./models/user-model');
const RoleModel = require('./models/role-model');
const GroupModel = require('./models/group-model');
const BoardModel = require('./models/board-model');

const models = [
  UserModel,
  RoleModel,
  GroupModel,
  BoardModel
];

module.exports = models;
