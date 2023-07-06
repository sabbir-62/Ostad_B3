const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.listen(5000, () => {
    console.log(`server run successfully on port ${PORT}`);
})