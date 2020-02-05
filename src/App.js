import React, { useState, useEffect } from 'react';

function App() {
  // states
  const [summoner, setSummoner] = useState(null);

  // effects
  useEffect(() => {
    // paramètres de la requête POST
    const options = {
      method: 'POST',
      body: JSON.stringify({ name: 'onkk' }),
      cors: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    // exemple post (avec params)
    fetch('http://localhost:5001/summoner', options)
      .then((data) => data.json())
      .then((sum) => setSummoner(sum));

    // exemple get (pas besoin de params)
    fetch('http://localhost:5001/summoner/zak')
      .then((data) => data.json())
      .then(console.log);
  }, []);

  // jsx
  return (
    <pre>
      {JSON.stringify(summoner, null, '\t')}
    </pre>
  );
}

export default App;
