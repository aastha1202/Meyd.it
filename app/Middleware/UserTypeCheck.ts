import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class UserTypeCheck {
  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>, allowedUserTypes: string[]) {
    const user = auth.user

    if (!user || !allowedUserTypes.includes(user.user_type)) {
      throw new AuthenticationException('Unauthorized access', 'E_UNAUTHORIZED_ACCESS')
    }

    // call next to advance the request
    await next()
  }
}
