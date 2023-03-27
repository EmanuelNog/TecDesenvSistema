const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
     const user_id = req.headers.authorization;
        
      const schedules = await connection('schedules')
        .where('user_id', user_id)
        .select('*');
  
      return res.json(schedules);
    },

    async create(req, res) {
        const { title, start, end} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        const user_id = req.headers.authorization;
        
        await connection('schedules').insert({
            id,
            title,
            start, 
            end,
            user_id
        })
        return res.json({ 
            id,
            title,
            start, 
            end,
            user_id
        });
    },

    async delete(req,res){
        const {id} = req.params;
        const user_id = req.headers.authorization;

        const schedule = await connection('schedules')
        .where('id',id)
        .select('user_id')
        .first();

        if(schedule.user_id !== user_id){
            return res.status(401).json({ error: 'Operation not permitted'});    
        }

        await connection('schedules').where('id',id).delete();

        return res.status(204).send();
    }
};