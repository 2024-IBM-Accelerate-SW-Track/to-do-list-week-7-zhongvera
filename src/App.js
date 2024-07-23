// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import NavbarComp from './component/navigation/NavbarComp';

// function App() {
//   return (
//     <div className="App">
//       <NavbarComp/>
//     </div>
//   );
// }

// export default App;

import * as api from './services/api';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authUser = async () => {
        setAuthenticated(await api.authenticate(username, password));
    }

    const createUser = async () => {
        await api.createUser(username, password);
    }

    return (
        <div className="App">
            {!authenticated ? (
                <div>
                    <label>Username: </label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={createUser}>Create User</button>
                    <button onClick={authUser}>Login</button>
                </div>
            ) : (
                <div>
                    <NavbarComp />
                </div>
            )}
        </div>
    );
}

export default App;
