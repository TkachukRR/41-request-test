const app = require('./middleware');
const routes = require('./routes');

app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
