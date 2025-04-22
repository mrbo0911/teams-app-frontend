let express = require('express');
const cors = require('cors');

let app = express();

// Allow all origins (or specify specific origins)
app.use(cors({
    origin: ['http://localhost:8080']  // Allow requests from localhost
}));

app.use(express.static(__dirname + '/dist/teams-app-frontend/browser'));

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/dist/teams-app-frontend/browser/index.html');
});

app.listen(process.env.PORT || 8080);