import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './Signup'
import Job from './Job'

export default class Quotation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public customerId: number | null

  @column()
  public makerId: number | null

  @column()
  public jobId: number

  @column({ serializeAs: null })
  public price: number

   @column()
   public message:string

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Job)
  public job: BelongsTo<typeof Job>

  @belongsTo(() => User)
  public maker: BelongsTo<typeof User>

  @belongsTo(() => User)
  public customer: BelongsTo<typeof User>
}
