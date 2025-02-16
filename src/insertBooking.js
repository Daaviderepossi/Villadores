const client = require('./db');  // Importa il client dal file db.js

// Funzione per inserire una prenotazione nel database
function insertBooking(userId, bookingDate) {
  const query = 'INSERT INTO prenotazioni (user_id, data_prenotazione) VALUES ($1, $2)';
  const values = [userId, bookingDate];

  // Esegui la query
  client.query(query, values)
    .then(res => console.log('Prenotazione salvata:', res))
    .catch(err => console.error('Errore nella query:', err));
}