/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/Signup'
import { sign } from 'jsonwebtoken'
import crypto from "crypto"






const secretKey = crypto.randomBytes(64).toString('hex');


// const providers = [
//   '@adonisjs/cors/providers/CorsProvider'
// ]




Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/jobs', 'JobsController.index')

Route.post('/jobs', 'JobsController.store')

// Route.get('/jobs/:jobId', 'JobsController.show')



Route.get('/user', 'signupController.index')

Route.post('/user', 'signupController.store')

Route.post('/login', async ({ request, response }) => {
  const { email, password } = request.all()

  try {
    const user = await User.query().where('email', email).firstOrFail()

    if (user.password !== password) {
      console.log("error")
      throw new Error('Invalid credentials')
    }

    const token = sign({id:user.id},secretKey)
    // console.log(user.id)

    return response.status(200).json({
      token: token,
      type: 'bearer',
      id:user.id,
      usertype: user.userType,
      fname:user.fname,
      lname:user.lname,
      email:user.email,
      phone:user.phone,
      address:user.address
    })
  } catch (error) {
    console.log(error);
    return response.status(401).json({
      error: 'Invalid credentials',
    })  
  }
})
Route.get('/jobs/filter', 'JobsController.getJobsByAddress') // New route

// Route.get('/jobs/:jobId/makers/:makerId/quotations', 'QuotationsController.getQuotationsByJobAndMaker');

Route.post('/quotations', 'QuotationsController.store');

Route.get("/quotations","QuotationsController.index")

Route.get("/maker/quotations/:maker_id","QuotationsController.getMakerId")


Route.get("/maker","signupController.getMaker")

Route.put("/quotations/:quotation_id/:status","QuotationsController.updateQuotationStatus")

Route.put('/jobs/:job_id', 'JobsController.updateQuotationCount')















