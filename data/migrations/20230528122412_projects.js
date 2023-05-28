/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.scheme.createTable("projects",table=>{
    table.increments("project_id")
    table.string("project_name").notNullable()
    table.string("project_description")
    table.boolean("project_completed").defaultTo(false)
})
.createTable("resources", t=>{
    t.increments("resource_id")
    t.string("resource_name").notNullable().unıque()
    t.string("resource_description")
})
.createTable("tasks",t=>{
    t.increments("task_id")
    t.string("task_description").notNullable()
    t.strin("task_notes")
    t.boolean("task_completed").defaultTo(false)
    //ilişki
    t.integer("project_id").notNullable()
    .references("project_id")
    .inTable("projects")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
})
.createTable("projects_resources",t=>{
    t.increments("project_resource_id")
    t.integer("project_id").notNullable()
             .references("project_id")
             .inTable("projects")
             .onDelete("CASCADE")
             .onUpdate("CASCADE")
     t.integer("resource_id").notNullable()
             .references("resource_id")
             .inTable("references")
             .onDelete("CASCADE")
             .onUpdate("CASCADE")

})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
         .dropTableIfExists("project_resources")
         .dropTableIfExists("task")
         .dropTableIfExists("resources")
         .dropTableIfExists("projects")
};
