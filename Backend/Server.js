const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin:["http://localhost:5173"]
};

const app = express();
const port=8080;
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api", (req, res) => {
    res.send("<h1>Hello, World!</h1?");
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});