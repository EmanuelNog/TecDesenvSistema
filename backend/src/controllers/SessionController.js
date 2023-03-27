const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { email, password } = req.body;

        const user = await connection('users')
        .where('email', email)
        .where('password',password)
        .select('id')
        .first();

        if (!user) {
        return res.status(400).json({ error: 'Nao foi encontrado um usuario com este email/senha' });
        }

        return res.json(user);
        }
}