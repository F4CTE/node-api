async function isConcerned(req, res, next) {
    if (req.params.id !== req.user.id) {
        res.status(403).send({ error: 'Forbidden' });
    }else {
        next()
    }
}

export default isConcerned;