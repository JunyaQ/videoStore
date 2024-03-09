const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db', 'db.json');

const getTvs = () => {
  const dbData = fs.readFileSync(dbPath);
  const data = JSON.parse(dbData);
  return data.tvs;
};

module.exports = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.json(getTvs());
      break;
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
};