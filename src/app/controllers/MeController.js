const Menu = require('../models/Menu.js')
const moment = require('moment')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /me/stored/menus
    storedMenus(req, res, next) {
        Menu.find({})
            .then(menu => res.render('me/stored-menus', {
                menu: mutipleMongooseToObject(menu),
            }))
            .catch(next)
    }
}

module.exports = new MeController();
