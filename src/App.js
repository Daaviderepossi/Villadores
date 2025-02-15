/////////////////////////////////////////////////////
// QUESTO CODICE FUNZIONA, SOTTO MIGLIORIE DELL'UI //
/////////////////////////////////////////////////////

// import React, { useEffect } from "react";
// import { useAuth } from "react-oidc-context";
// import MyCalendar from "./Calendar";

// function App() {
//   const auth = useAuth();

//   useEffect(() => {
//     console.log("Auth State:", auth);
//   }, [auth]);

//   const signOutRedirect = () => {
//     const clientId = "3jk0r0mrt0d52d2f0oodrk5ks2";
//     const logoutUri = "http://localhost:3000"; // Assicurati che sia corretto
//     const cognitoDomain = "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };

//   if (auth.isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (auth.error) {
//     console.error("Auth Error:", auth.error);
//     return <div>Encountering error... {auth.error.message}</div>;
//   }

//   if (auth.isAuthenticated) {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h2>Benvenuto, {auth.user?.profile.email}!</h2>
//         <MyCalendar /> 
//         <button onClick={() => auth.removeUser()}>Sign out</button>
//       </div>
//     );
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Effettua l'accesso per usare il calendario</h2>
//       <button onClick={() => auth.signinRedirect()}>Sign in</button>
//       <button onClick={() => signOutRedirect()}>Sign out</button>
//     </div>
//   );
// }

// export default App;


/////////////////////////////////////////////////////
/////////// codice con migliorie grafiche  //////////
/////////////////////////////////////////////////////

// import React, { useEffect } from "react";
// import { useAuth } from "react-oidc-context";
// import MyCalendar from "./Calendar";


// function App() {
//   const auth = useAuth();

//   useEffect(() => {
//     console.log("Auth State:", auth);
//   }, [auth]);

//   const signOutRedirect = () => {
//     const clientId = "3jk0r0mrt0d52d2f0oodrk5ks2";
//     const logoutUri = "http://localhost:3000";
//     const cognitoDomain = "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
//         {auth.isLoading && <p className="text-lg font-semibold">Loading...</p>}

//         {auth.error && (
//           <p className="text-red-500 text-sm">Errore: {auth.error.message}</p>
//         )}

//         {auth.isAuthenticated ? (
//           <>
//             <h2 className="text-2xl font-bold">Benvenuto, {auth.user?.profile.email}!</h2> 
//             <div className="mt-4">
//               <MyCalendar />
//             </div>
//             <button
//               className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//               onClick={() => auth.removeUser()}
//             >
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-xl font-semibold mb-4">Effettua l'accesso per usare il calendario</h2>
//             <button
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-2"
//               onClick={() => auth.signinRedirect()}
//             >
//               Sign In
//             </button>
//             <button
//               className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
//               onClick={() => signOutRedirect()}
//             >
//               Sign Out
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////
///// NON FUNZIONA DIOPORCO ///////
///////////////////////////////////

// import React, { useEffect } from "react";
// import { useAuth } from "react-oidc-context";
// import MyCalendar from "./Calendar";

// function App() {
//   const auth = useAuth();

//   useEffect(() => {
//     console.log("Auth State:", auth);
//   }, [auth]);

//   const signOutRedirect = () => {
//     const clientId = "3jk0r0mrt0d52d2f0oodrk5ks2";
//     const logoutUri = "http://localhost:3000";
//     const cognitoDomain = "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
//         {auth.isLoading && <p className="text-lg font-semibold">Loading...</p>}

//         {auth.error && (
//           <p className="text-red-500 text-sm">Errore: {auth.error.message}</p>
//         )}

//         {auth.isAuthenticated ? (
//           <div>
//             <h2 className="text-2xl font-bold text-center text-green-600">Benvenuto, {auth.user?.profile.email}!</h2>
//             <div className="mt-6">
//               <MyCalendar />
//             </div>
//             <button
//               className="w-full mt-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//               onClick={() => auth.removeUser()}
//             >
//               Sign Out
//             </button>
//           </div>
//         ) : (
//           <>
//             <h2 className="text-xl font-semibold text-center mb-6">Effettua l'accesso per usare il calendario</h2>
//             <div className="space-y-4">
//               <button
//                 className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 onClick={() => auth.signinRedirect()}
//               >
//                 Sign In
//               </button>
//               <button
//                 className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
//                 onClick={() => signOutRedirect()}
//               >
//                 Sign Out
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

//////////////
//// BOOOO ///
//////////////

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar'; // Libreria per il calendario
// import 'react-calendar/dist/Calendar.css'; // Stili del calendario

// const App = () => {
//   const [date, setDate] = useState(new Date());
//   const [presence, setPresence] = useState(null);
//   const [proposals, setProposals] = useState([]);
//   const [newProposal, setNewProposal] = useState('');

//   // Funzione per gestire la selezione della data
//   const handleDateChange = (date) => {
//     setDate(date);
//     // Qui puoi aggiungere la logica per caricare i dati relativi alla data selezionata
//   };

//   // Funzione per gestire la presenza
//   const handlePresence = (response) => {
//     setPresence(response);
//     // Qui puoi aggiungere la logica per inviare la risposta al server
//   };

//   // Funzione per aggiungere una nuova proposta
//   const addProposal = () => {
//     if (newProposal.trim()) {
//       setProposals([...proposals, { text: newProposal, votes: { yes: 0, no: 0 } }]);
//       setNewProposal('');
//       // Qui puoi aggiungere la logica per inviare la proposta al server
//     }
//   };

//   // Funzione per votare una proposta
//   const voteProposal = (index, vote) => {
//     const updatedProposals = [...proposals];
//     if (vote === 'yes') {
//       updatedProposals[index].votes.yes += 1;
//     } else {
//       updatedProposals[index].votes.no += 1;
//     }
//     setProposals(updatedProposals);
//     // Qui puoi aggiungere la logica per inviare il voto al server
//   };

//   return (
//     <div className="app">
//       <h1>Calendario Presenze</h1>
//       <div className="calendar-container">
//         <Calendar onChange={handleDateChange} value={date} />
//       </div>
//       <div className="presence-buttons">
//         <button onClick={() => handlePresence('yes')}>SI</button>
//         <button onClick={() => handlePresence('no')}>NO</button>
//       </div>
//       <div className="presence-list">
//         <h2>Presenze:</h2>
//         {/* Qui puoi mappare gli utenti e le loro risposte */}
//       </div>
//       <div className="proposals-section">
//         <h2>Proposte:</h2>
//         <input
//           type="text"
//           value={newProposal}
//           onChange={(e) => setNewProposal(e.target.value)}
//           placeholder="Inserisci una nuova proposta"
//         />
//         <button onClick={addProposal}>Aggiungi Proposta</button>
//         {proposals.map((proposal, index) => (
//           <div key={index} className="proposal">
//             <p>{proposal.text}</p>
//             <div className="vote-buttons">
//               <button onClick={() => voteProposal(index, 'yes')}>SI ({proposal.votes.yes})</button>
//               <button onClick={() => voteProposal(index, 'no')}>NO ({proposal.votes.no})</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

////////////////////
// BELLISSIMOOOOO //
// MA COGNITO???? //
////////////////////

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [votes, setVotes] = useState({});
//   const [userVote, setUserVote] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Funzione per gestire il click su una data
//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setIsSidebarOpen(true);
//   };

//   // Funzione per gestire il voto
//   const handleVote = (vote) => {
//     if (selectedDate) {
//       const dateKey = selectedDate.toDateString();
//       setVotes((prevVotes) => ({
//         ...prevVotes,
//         [dateKey]: {
//           ...prevVotes[dateKey],
//           [userVote ? "userName" : "Utente Anonimo"]: vote, // Puoi sostituire "Utente Anonimo" con il nome dell'utente
//         },
//       }));
//       setUserVote(vote);
//     }
//   };

//   // Funzione per chiudere la finestra laterale
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center text-4xl font-bold">
//         Benvenuti tossici!
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4">
//         {/* Calendario */}
//         <div className="flex justify-center mt-8">
//           <Calendar
//             onChange={handleDateClick}
//             value={selectedDate}
//             className="rounded-lg shadow-lg bg-white p-4"
//           />
//         </div>

//         {/* Finestra Laterale */}
//         {isSidebarOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
//             <div className="bg-white w-96 p-6 shadow-lg">
//               <button
//                 onClick={closeSidebar}
//                 className="text-gray-600 hover:text-gray-900"
//               >
//                 &times; Chiudi
//               </button>
//               <h2 className="text-xl font-bold mb-4">
//                 Voti per il {selectedDate.toDateString()}
//               </h2>
//               <ul>
//                 {votes[selectedDate.toDateString()] &&
//                   Object.entries(votes[selectedDate.toDateString()]).map(
//                     ([user, vote], index) => (
//                       <li key={index} className="mb-2">
//                         <strong>{user}</strong>: {vote}
//                       </li>
//                     )
//                   )}
//               </ul>
//               <div className="mt-4">
//                 <button
//                   onClick={() => handleVote("SI")}
//                   className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   SI
//                 </button>
//                 <button
//                   onClick={() => handleVote("NO")}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   NO
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default App;



///////////////////////////
// COGNITO FUNZIONERA'?? //
///////////////////////////

// import React, { useState, useEffect } from "react";
// import { useAuth } from "react-oidc-context";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const App = () => {
//   const auth = useAuth(); // Usa il contesto di autenticazione
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [votes, setVotes] = useState({});
//   const [userVote, setUserVote] = useState(null);

//   // Reindirizza automaticamente al login se l'utente non è autenticato
//   useEffect(() => {
//     if (!auth.isLoading && !auth.isAuthenticated) {
//       auth.signinRedirect(); // Reindirizza alla pagina di login di Cognito
//     }
//   }, [auth.isLoading, auth.isAuthenticated, auth]);

//   // Funzione per gestire il click su una data
//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   // Funzione per gestire il voto
//   const handleVote = (vote) => {
//     if (selectedDate) {
//       const dateKey = selectedDate.toDateString();
//       setVotes((prevVotes) => ({
//         ...prevVotes,
//         [dateKey]: {
//           ...prevVotes[dateKey],
//           [auth.user?.profile?.email || "Utente Anonimo"]: vote, // Usa l'email dell'utente come chiave
//         },
//       }));
//       setUserVote(vote);
//     }
//   };

//   // Se l'utente non è autenticato, mostra un messaggio di caricamento
//   if (auth.isLoading || !auth.isAuthenticated) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
//         <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
//           <p className="text-lg font-semibold">Reindirizzamento al login...</p>
//         </div>
//       </div>
//     );
//   }

//   // Se l'utente è autenticato, mostra il contenuto principale
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white py-6 text-center text-4xl font-bold">
//         Benvenuti tossici!
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4 flex">
//         {/* Calendario */}
//         <div className="flex-1">
//           <div className="flex justify-center">
//             <Calendar
//               onChange={handleDateClick}
//               value={selectedDate}
//               className="rounded-lg shadow-lg bg-white p-4"
//               tileContent={({ date, view }) => {
//                 if (view === "month") {
//                   const dateKey = date.toDateString();
//                   const hasVote = votes[dateKey] && Object.values(votes[dateKey]).includes("SI");
//                   return (
//                     <div className="flex justify-center items-end h-full">
//                       {hasVote && <div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>}
//                     </div>
//                   );
//                 }
//                 return null;
//               }}
//             />
//           </div>
//         </div>

//         {/* Barra Laterale (sempre visibile) */}
//         <div className="w-96 bg-white shadow-lg rounded-lg p-6 ml-6">
//           <h2 className="text-xl font-bold mb-4">
//             {selectedDate ? `Voti per il ${selectedDate.toDateString()}` : "Seleziona una data"}
//           </h2>
//           {selectedDate && (
//             <>
//               <ul className="mb-4">
//                 {votes[selectedDate.toDateString()] &&
//                   Object.entries(votes[selectedDate.toDateString()]).map(
//                     ([user, vote], index) => (
//                       <li key={index} className="mb-2">
//                         <strong>{user}</strong>: {vote}
//                       </li>
//                     )
//                   )}
//               </ul>
//               <div className="mt-4">
//                 <button
//                   onClick={() => handleVote("SI")}
//                   className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   SI
//                 </button>
//                 <button
//                   onClick={() => handleVote("NO")}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   NO
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </main>

//       {/* Bottone di Logout */}
//       <div className="flex justify-center mt-6">
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//           onClick={() => auth.removeUser()}
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;




//////////////////////////////////
// username al posto della mail //
//////////////////////////////////


import React, { useState, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const App = () => {
  const auth = useAuth(); // Usa il contesto di autenticazione
  const [selectedDate, setSelectedDate] = useState(null);
  const [votes, setVotes] = useState({});
  const [userVote, setUserVote] = useState(null);
  const [userName, setUserName] = useState("Utente Anonimo");

  // Reindirizza automaticamente al login se l'utente non è autenticato
  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect(); // Reindirizza alla pagina di login di Cognito
    }
  }, [auth.isLoading, auth.isAuthenticated, auth]);

  // Recupera il nome utente dall'oggetto autenticazione
  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      setUserName(
        auth.user.profile.preferred_username || 
        auth.user.profile.email || 
        auth.user.profile.sub || 
        "Utente sconosciuto"
      );
    }
  }, [auth.isAuthenticated, auth.user]);

  // Funzione per gestire il click su una data
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Funzione per gestire il voto
  const handleVote = (vote) => {
    if (selectedDate) {
      const dateKey = selectedDate.toDateString();
      setVotes((prevVotes) => ({
        ...prevVotes,
        [dateKey]: {
          ...prevVotes[dateKey],
          [userName]: vote, // Usa il nome utente come chiave
        },
      }));
      setUserVote(vote);
    }
  };

  // Funzione per il logout
  const handleLogout = () => {
    const clientId = "3jk0r0mrt0d52d2f0oodrk5ks2"; // Sostituisci con il tuo Client ID Cognito
    const logoutUri = "https://main.d2edpj14zktqpx.amplifyapp.com/"; // Modifica con il tuo dominio
    const cognitoDomain = "https://eu-north-1imkpoe97i.auth.eu-north-1.amazoncognito.com";

    auth.removeUser(); // Cancella la sessione
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  // Se l'utente non è autenticato, mostra un messaggio di caricamento
  if (auth.isLoading || !auth.isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold">Reindirizzamento al login...</p>
        </div>
      </div>
    );
  }

  // Se l'utente è autenticato, mostra il contenuto principale
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white py-6 text-center text-4xl font-bold">
        Benvenuti, {userName}!
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 flex">
        {/* Calendario */}
        <div className="flex-1">
          <div className="flex justify-center">
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              className="rounded-lg shadow-lg bg-white p-4"
              tileContent={({ date, view }) => {
                if (view === "month") {
                  const dateKey = date.toDateString();
                  const hasVote = votes[dateKey] && Object.values(votes[dateKey]).includes("SI");
                  return (
                    <div className="flex justify-center items-end h-full">
                      {hasVote && <div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>}
                    </div>
                  );
                }
                return null;
              }}
            />
          </div>
        </div>

        {/* Barra Laterale (sempre visibile) */}
        <div className="w-96 bg-white shadow-lg rounded-lg p-6 ml-6">
          <h2 className="text-xl font-bold mb-4">
            {selectedDate ? `Voti per il ${selectedDate.toDateString()}` : "Seleziona una data"}
          </h2>
          {selectedDate && (
            <>
              <ul className="mb-4">
                {votes[selectedDate.toDateString()] &&
                  Object.entries(votes[selectedDate.toDateString()]).map(
                    ([username, vote], index) => (
                      <li key={index} className="mb-2">
                        <strong>{username}</strong>: {vote}
                      </li>
                    )
                  )}
              </ul>
              <div className="mt-4">
                <button
                  onClick={() => handleVote("SI")}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  SI
                </button>
                <button
                  onClick={() => handleVote("NO")}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  NO
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Bottone di Logout */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          //onClick={handleLogout}
          onClick={() => auth.signoutRedirect()} // Usa signoutRedirect invece di removeUser
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default App;




