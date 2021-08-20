const path = require('path');
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static("./client/build"));

app.get('*', (req, res) => {
    res.redirect('index.html');
});