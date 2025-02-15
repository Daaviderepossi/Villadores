////////////////////////
// 1.0.0 non funziona //
////////////////////////

// import React, {useState, useEffect} from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';

// function MyCalendar(){
// 	const[date, setDate] = useState(new Date());
// 	const[events, setEvents] = useState([]);

// 	useEffect(() => {
// 		axios.get('http://127.0.0.1:8000/evento/')
// 			.then(response => setEvents(response.data))
// 			.catch(error => console.error(error));
// 	},[]);

// 	return(
// 		<div>
// 			<h2>Calendario Eventi</h2>
// 			<Calendar onChange = {setDate} value = {date}/>
// 			<h3>Eventi Programmati:</h3> 
// 			<ul>
// 				{events.map(event => (
// 					<li key = {event.id}>{event.titolo} - {event.data} </li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default MyCalendar;

////////////////////
// 1.0.1 funziona //
////////////////////

// import React, { useState } from 'react';

// function MyCalendar() {
//     const [date, setDate] = useState(new Date());

//     return (
//         <div>
//             <h2>Calendario</h2>
//             <p>Data selezionata: {date.toDateString()}</p>
//             <button onClick={() => setDate(new Date())}>Aggiorna Data</button>
//         </div>
//     );
// }

// export default MyCalendar;

//////////////////////////////
/////// 2.0.0 vediamo ////////
//////////////////////////////

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Importa lo stile del calendario

function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const [votes, setVotes] = useState({}); // Oggetto per salvare i voti Sì/No per ogni data

    // Funzione per gestire la selezione di una data
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    // Funzione per votare "Sì" o "No"
    const handleVote = (vote) => {
        const formattedDate = date.toDateString();
        setVotes((prevVotes) => ({
            ...prevVotes,
            [formattedDate]: vote, // Salva il voto per la data selezionata
        }));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Calendario</h2>
            
            {/* Calendario interattivo */}
            <Calendar onChange={handleDateChange} value={date} />

            {/* Mostra la data selezionata e il voto */}
            <p>Data selezionata: {date.toDateString()}</p>
            <p>Voto: {votes[date.toDateString()] || 'Nessun voto'}</p>

            {/* Pulsanti di voto */}
            <button onClick={() => handleVote('Sì')} style={{ marginRight: '10px' }}>Sì</button>
            <button onClick={() => handleVote('No')}>No</button>
        </div>
    );
}

export default MyCalendar;
