import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      
      table.string("fname").notNullable()
      table.string("lname").notNullable()
      table.string("phone").notNullable()
      table.string("email").notNullable()
      table.string("clothing_type").notNullable()
      table.text("description").notNullable()
      table.string("budget").notNullable()
      table.string("image",512)
      table.string("address").notNullable()
      table.integer("quotation_count").notNullable() 
      table.integer('user_id').unsigned().references('id').inTable('user_data').onDelete('CASCADE')


    
    })
  
  }

  

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
