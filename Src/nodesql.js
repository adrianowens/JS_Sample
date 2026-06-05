function auth_filter(req, res, next) {
    const user = auth(req) || {};
    const sql = `SELECT COUNT(*) AS authorized
                 FROM user
                 WHERE username = '${user.name}' AND
                       password = '${user.pass}'`;

    // use SQL to authorize the resource
    private_db.get(sql, function (err, row) {
        if (err || !row.authorized) {
            res.writeHead(401, {'WWW-Authenticate': 'Basic realm="Private"'});
            res.end('Unauthorized');
        } else {
            next();
        }
    });
