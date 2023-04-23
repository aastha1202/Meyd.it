// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job'
// import {v2 as cloudinary} from 'cloudinary'
import Database from '@ioc:Adonis/Lucid/Database'


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//   })


export default class JobsController {
    async index ({  response }) {
        // Get all jobs
        const jobs = await Job.all()
    
        return response.json(jobs)
      }

    async store ({request, response}){
        const data = request.only([
            "fname",
            "lname",
            "phone",
            "email",
            "clothing_type",
            "description",
            "budget",
            "image",
            "address",
            "user_id"

        ])
    

     

        const job= await Job.create(data)

        return response.status(201).json(job)
    }
    

    async getJobsByAddress({ request, response }) {
      const address = request.qs().address as string;
      const clothType= request.qs().clothType as string;
      const query = Database.from('jobs');
      console.log(address);
      if(address){
        query.where('address', 'like', `%${address}%`);

      }
      if(address){
        query.where('clothing_type', 'like', `%${clothType}%`);

      }
      const jobs = await query.select('*'); 
      response.json(jobs);
    }

    // async show ({ params, request, response }) {
    //     // Get a single job by ID
    //     const job = await Job.findOrFail(params.id)
    
    //     return response.json(job)
    //   }

    //   async update ({params, request, response}){
    //     const job = await Job.findOrFail(params.id)
    //     const data = request.only([
    //         "fname",
    //         "lname",
    //         "phone",
    //         "email",
    //         "clothing_type",
    //         "description",
    //         "budget",
    //         "address",
          
    //     ])

    //     const file = request.file('image')
    //     if (file) {
    //       const { secure_url } = await cloudinary.uploader.upload(file.tmpPath, {
    //         folder: 'jobs'
    //       })
    //       data.image = secure_url
    //     }
      
    //     job.merge(data)
    //     await job.save()

    //     return response.json(job)
    // }

    async updateQuotationCount({ params, response }) {
      const job = await Job.find(params.job_id)
      if (!job) {
        response.status(404).send({ message: 'Job not found' })
        return
      }
      job.quotation_count += 1
      await job.save()
      response.status(200).send({ message: 'Quotation count updated successfully' })
    }
    
    async destroy ({ params, response }) {
        // Delete a job by ID
        const job = await Job.findOrFail(params.id)
        await job.delete()
    
        return response.status(204).json(null)
      }
}
