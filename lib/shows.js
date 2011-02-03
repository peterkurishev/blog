var kanso = require('kanso/core'),
    navigation = require('./navigation');


exports.about = function (doc, req) {
    var content = kanso.template('about.html', req, {});

    if (req.client) {
        $('#main').html(content);
        $('#navigation li').not('#nav_about').removeClass('selected');
        $('#nav_about').addClass('selected');
        document.title = 'About';
        window.scrollTo(0, 0);
    }
    else {
        var nav = navigation.create(req, 'nav_about');
        return kanso.template('base.html', req, {
            title: 'About',
            content: content,
            navigation: nav
        });
    }
};

exports.moved = function (doc, req) {
    return {code: 301, headers: {location: req.query.loc}};
};