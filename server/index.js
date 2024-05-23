const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', routes)


const PORT = 8081
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});