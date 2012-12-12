var templates = require('duality/templates'),
    Showdown = require('showdown');


exports.about = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    return {
        title: 'Обо мне',
        content: templates.render('about.html', req, {nav: 'about'})
    };
};

exports.cv = function (doc, req) {
    if (req.client && req.initial_hit) {
        // no need for double render on first hit
        return;
    }
    var converter = new Showdown.converter();

    return {
        title: 'Резюме',
        content: templates.render('cv.html', req, {nav: 'cv'})
    };
};

exports.moved = function (doc, req) {
    return {code: 301, headers: {location: req.query.loc}};
};
