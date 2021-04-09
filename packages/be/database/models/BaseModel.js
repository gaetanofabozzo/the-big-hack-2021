const { Model, snakeCaseMappers } = require("objection");

class BaseModel extends Model {
  $formatDatabaseJson(json) {
    const newJson = super.$parseDatabaseJson(json);
    return {
      ...newJson,
      ...(json.createdAt ? { createdAt: new Date(json.createdAt) } : {}),
      ...(json.updatedAt ? { updatedAt: new Date(json.updatedAt) } : {}),
    };
  }

  $beforeUpdate() {
    this.updatedAt = new Date();
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = { BaseModel };
