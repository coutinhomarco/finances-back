import express from 'express';

const app = express();
const port = 3000; // default port to listen

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
