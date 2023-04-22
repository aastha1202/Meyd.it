import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Quotations extends BaseSchema {
  protected tableName = 'quotations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customer_id').unsigned().references('id').inTable('user_data').onDelete('CASCADE').nullable()
      table.integer('maker_id').unsigned().references('id').inTable('user_data').onDelete('CASCADE').nullable()
      table.integer('job_id').unsigned().references('id').inTable('jobs').onDelete('CASCADE')
      table.decimal('price', 8, 2)
      table.text("message").notNullable()
      table.string('status').defaultTo('pending')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
