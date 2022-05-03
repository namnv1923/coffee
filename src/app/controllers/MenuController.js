const Menu = require('../models/Menu.js')
const { mongooseToObject } = require('../../util/mongoose')

class MenuController {

    // [GET] /menu/:slug
    show(req, res, next) {
        Menu.findOne({ slug: req.params.slug })
            .then(menu => {
                res.render('menus/show', {
                    menu: mongooseToObject(menu)
                })
            })
            .catch(next)
    }

    // [GET] /menu/create
    create(req, res, next) {
        res.render('menus/create.hbs')
    }

    // [POST] /menu/store
    store(req, res, next) {
        const menu = new Menu(req.body)
        menu.save()
            .then(() => res.redirect(`/`))
            .catch(error => {})
    }

    // [GET] menu/:id/edit
    edit(req, res, next) {
        Menu.findById(req.params.id)
            .then(menu => res.render('menus/edit.hbs', {
                menu: mongooseToObject(menu)
            }))
            .catch(next)
    }

    // [PUT] menu/:id
    update(req, res, next) {
        Menu.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/menus'))
            .catch(next)
    }

    // [DELETE] menu/:id
    delete(req, res, next) {
        Menu.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new MenuController();
