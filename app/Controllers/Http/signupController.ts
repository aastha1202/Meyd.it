import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/Signup'
import Database from '@ioc:Adonis/Lucid/Database'



export default class SignupController {
    async index ({ request, response }) {
        const user = await User.all()
    
        return response.json(user)
      }

    async store ({request, response}){

        const data = request.only([
            "fname",
            "lname",
            "userType",
            "email",
            "password",
            "phone",
            "address"   

        ])

     

        const user= await User.create(data)

        return response.status(201).json(user)
    }

    async show ({ params, request, response }) {
        // Get a single job by ID
        const user = await User.findOrFail(params.id)

        return response.json(user)
      }

      async update ({params, request, response}){
        const user = await User.findOrFail(params.id)
        const data = request.only([
            "fname",
            "lname",
            "userType",
            "email",
            "password",
            "phone",
            "address"
        ])
      
        user.merge(data)
        await user.save()

        return response.json(user)
    }

    async getMaker({ request, response }: HttpContextContract) {
        const maker_id = request.qs().maker_id.split(",").map(Number);

        const query = Database.from('user_data');
        query.whereIn('id', maker_id);  
        
        const jobs = await query.select('*'); 
        response.json(jobs);
      }

    async destroy ({ params, request, response }) {
        // Delete a job by ID
        const user = await User.findOrFail(params.id)
        await user.delete()
    
        return response.status(204).json(null)
      }
}
