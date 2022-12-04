const jsonServer = require('json-server');
const auth = require('json-server-auth');

const app = jsonServer.create();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

const router = jsonServer.router('db.json');

app.db = router.db;

app.use(auth);
app.use(router);
app.listen(8080);
