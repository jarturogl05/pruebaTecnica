const express = require('express')
const app = express()


const cors = require('cors');
const routes = require("./routes");
app.use(cors());
app.use(routes);


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})