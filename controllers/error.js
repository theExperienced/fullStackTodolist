exports.getError = (req, res, next) => {
    res.status(404).send('NOT FOUND');
    // res.send(path.join(__dirname, 'client/build/index.html'));
}