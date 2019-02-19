const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async store(req, res) {

        const { email } = req.body;

        try {

            if (await User.findOne({ email }))
                throw('User already exists');

            const user = await User.create(req.body);

            user.password = undefined; // not return hash

            return res.send({ user });

        } catch (err)
        {
            return res.status(400).send({ error: err })
        }
    },

    async index(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');


        try {

            if (!user)
                throw('User not found');

            if (!await bcrypt.compare(password, user.password))
                throw('Invalid password');

            user.password = undefined;

            return res.send({ user });

        } catch (err)
        {
            return res.status(400).send({ error: err });
        }

    }
}
