const { Client } = require('pg');

const client = new Client({
  host: 'prenotazione-db.cjwss6my6wvb.eu-north-1.rds.amazonaws.com',
  user: 'admin_user',
  password: 'Ciaorepo2299!',
  database: 'prenotazione-db',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connesso al database'))
  .catch(err => console.error('Errore di connessione:', err));

module.exports = client;