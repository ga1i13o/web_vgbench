const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static("./client/build"));

app.get('*', (req, res) => {
    res.redirect('index.html');
});