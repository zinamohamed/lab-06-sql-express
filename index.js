const { app } = require('./app.js');


const port = 3000;


app.listen(port, () => {
        // eslint-disable-next-line no-console
    console.log(`Example app listening at http://localhost:${port}`);
    // eslint-disable-next-line no-console
    console.log(`This isn't so bad!`);
}
);