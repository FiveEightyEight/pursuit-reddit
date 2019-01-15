const app = require('express')();

const {myBodyParser, logger} = require('./middleware');
const port = 9002;

app.use(myBodyParser);
app.use(logger);

app.post('/', (req, res) => {
    // console.log(req.body);
    res.json({
        body: req.body,
    })
})

app.use((req, res) => {
    res.status(404).json({
        message: 'catch all / base',
    })
});

app.listen(port, _ => {
    console.log(`Listening on port: ${port}`);
});