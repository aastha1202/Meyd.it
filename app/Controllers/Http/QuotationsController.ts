import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Quotation from 'App/Models/Quotations'
import Database from '@ioc:Adonis/Lucid/Database'


export default class QuotationsController {
    public async store({ auth, request, response }: HttpContextContract) {
        // Get authenticated maker user
        const maker = auth.user!
    
        // Get job and customer from the request
        const { jobId, makerId, customerId, price, message } = request.all()
    
        // Create a new quotation for the job by the maker
        const quotation = await Quotation.create({
          jobId,
          customerId,
          makerId,
          price,
          message,
          status: 'pending',
        })
    
        return response.status(201).json(quotation)}

        async index({ request, response }) {
          const customer_id  = request.qs().customer_id as string; 
          console.log(customer_id);
          const quotations = await Quotation.query().where('customer_id', `${customer_id}`)
  
        
          response.json(quotations);
        }
        async getMakerId({ request, response }) {
          const {maker_id} = request.params();
          const quotations = await Quotation.query().where('maker_id', `${maker_id}`)
          response.json(quotations);
        }
        // async getMaker({ request, response }: HttpContextContract) {
        //   const maker_id = request.qs().maker_id.split(",").map(Number);

        //   const query = Database.from('user_data');
        //   query.whereIn('id', maker_id);  
          
        //   const jobs = await query.select('*'); 
        //   response.json(jobs);
        // }

        async updateQuotationStatus({ request, response }: HttpContextContract) {
          const { quotation_id, status } = request.params();
          const quotation = await Quotation.findOrFail(quotation_id);
          quotation.status = status;
          await quotation.save();
          response.json({ message: "Quotation status updated successfully" });
        }
  // public async getQuotationsByJobAndMaker({ params, response }: HttpContextContract) {
  //   const { jobId, makerId } = params
  //   const quotations = await Quotation.query()
  //     .where('job_id', jobId)
  //     .where('maker_id', makerId)
  //     .preload('job')
  //     .preload('maker')
  //   response.json(quotations)
  // }
}
