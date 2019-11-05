
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table){
      table.increments();
      table.string('VIN',128).notNullable();
      table.string('Make',128).notNullable();
      table.string('Model', 128).notNullable();
      table.float('Mileage')
      table.string('TransmissionType',128);
      table.string('TitleStatus',128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
