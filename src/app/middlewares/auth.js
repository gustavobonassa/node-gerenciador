module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        res.locals.user = req.session.user; //res.locals objeto fica disponivel para todos

        return next();
    }

    return res.redirect('/');
}
