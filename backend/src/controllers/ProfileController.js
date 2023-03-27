const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    //const user_id = req.headers.authorization;

    const schedules = await connection('schedules')
      .select('*');

    return res.json(schedules);
  }
}