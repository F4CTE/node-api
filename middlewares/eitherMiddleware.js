function eitherMiddleware(middleware1, middleware2) {
    return function(req, res, next) {
        middleware1(req, res, error1 => {
            if (!error1) {
                next();
            } else {
                middleware2(req, res, error2 => {
                    if (!error2) {
                        next();
                    } else {
                        res.status(401).send("Unauthorized");
                    }
                });
            }
        });
    };
}

export default eitherMiddleware;
