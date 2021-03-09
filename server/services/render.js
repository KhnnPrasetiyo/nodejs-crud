
const axios = require('axios')
const { response, request } = require('express')

exports.homeRoutes = (req, res) => {

    axios.get('https://khnn-nodejs-crud.herokuapp.com/api/users')
        .then(function (response) {
            res.render('index', { users: response.data })
        })

        .catch(e => {
            res.send(e)
        })

}
exports.addUserRoute = (request, response) => {
    response.render('add_user')
}
exports.updateUserRoute = (req, res) => {

    axios.get('https://khnn-nodejs-crud.herokuapp.com/api/users', { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render("update_user", { user: userdata.data })
        })
        .catch(err => {
            res.send(err)
        })
}