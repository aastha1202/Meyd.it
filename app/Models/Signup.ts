// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserData extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fname:string

  @column()
  public lname:string

  @column()
  public userType:string

  @column()
  public email:string

  @column()
  public password:string

  @column()
  public phone:string

  @column()
  public address:string

  // @column()
  // public isVerified:boolean

  // @column()
  // public verification_token:string

}
