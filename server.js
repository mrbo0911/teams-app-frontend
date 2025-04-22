let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/teams-app-frontend/browser'));

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/dist/teams-app-frontend/browser/index.html');
});

app.listen(process.env.PORT || 8080);