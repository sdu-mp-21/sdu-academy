const UserController = require("../controllers/UserController.js")
const User = require("../models/User.js")
bcrypt = require('bcrypt')
jwt = require('./JwtController.js')

class AuthController {
    async signUp(req, res) {
        try {
            var { name, email, password } = req.body;
            const saltRounds = 10;
            password = await bcrypt.hash(password, saltRounds)
            let user = ({ name, email, createdAt, updatedAt } = (await UserController.create({ name, email, password })))
            const jwtToken = jwt.generateAccessToken(user)
            res.status(201).json({ user, jwtToken })
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async login(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({ email: email })
            if (user) {
                const validPassword = await bcrypt.compare(password, user.password)
                if (validPassword) {
                    const token = jwt.generateAccessToken(user)
                    res.status(200).json({ message: "Valid password", jwt: token })
                } else {
                    res.status(400).json({ error: "Invalid Password" })
                }
            } else {
                res.status(401).json({ error: "User does not exist" })
            }
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}

module.exports = new AuthController()