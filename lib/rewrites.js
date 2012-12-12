var moved = function (from, to) {
    return {
        from: from,
        to: '_show/moved',
        query: {loc: to}
    };
};

module.exports = [
    {from: '/favicon.ico', to: 'static/favicon.ico'},
    {from: '/static/*', to: 'static/*'},
    {from: '/files/*', to: 'files/*'},
    {from: '/feed.xml', to: '_list/rssfeed/blogposts_by_pubdate', query: {
        include_docs: 'true',
        descending: 'true'
    }},
    {from: '/', to: '_list/blogposts/blogposts_by_pubdate', query: {
        descending: 'true'
    }},
    {from: '/posts', to: '_list/blogposts/blogposts_by_pubdate', query: {
        descending: 'true'
    }},
    {from: '/posts/:slug', to: '_list/blogpost/blogposts_by_slug', query: {
        startkey: [':slug'],
        endkey: [':slug', {}],
        limit: '1',
        include_docs: 'true'
    }},
    {from: '/projects', to: '_list/projects/docs_by_type', query: {
        include_docs: 'true',
        key: '"project"'
    }},
    {from: '/about', to: '_show/about'},
    {from: '/cv', to: '_show/cv'}, 
    {from:   "/data/:doc/:attachment", to: "../../:doc/:attachment"},
    // Старые ссылки
    moved('/ru/2009/11/23/functional', '/posts/functional'),
    moved('/ru/cv', '/cv')
];
