import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.string("fname").notNullable()
      table.string("lname").notNullable()
      table.string("user_type").notNullable()
      table.string("email").notNullable()
      table.string("password").notNullable()
      table.string("phone").notNullable()  
      // table.boolean("isVerified").notNullable()
      // table.string("verification_token").nullable()
      table.string("address").notNullable()
    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
