import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fname:string

  @column()
  public lname:string

  @column()
  public phone:string

  @column()
  public email:string

  @column()
  public clothing_type:string

  @column()
  public description:string

  @column()
  public budget:string

  @column()
  public image:string

  @column()
  public address:string

  @column()
  public quotation_count:string

  @column()
  public user_id:number

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime
}
