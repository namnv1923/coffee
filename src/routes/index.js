const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const menuRouter = require('./menus');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/menu', menuRouter);

    app.use('/', siteRouter);
}

module.exports = route;
