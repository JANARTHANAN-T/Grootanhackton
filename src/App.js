import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import './App.css';
import Keycloak from 'keycloak-js';

// const keycloak = new Keycloak({
//     url: 'https://dashboard.qa.qlikauth.com/',
//     realm: 'grootan',
//     clientId: 'f0971474-78f7-4bef-a33c-835c28a0c62a'
// });

// try {
//     const authenticated = await keycloak.init();
//     console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
// } catch (error) {
//     console.error('Failed to initialize adapter:', error);
// }

function App() {
  return (
    <div>
    <Router>
      <AllRoutes/>
    </Router>
      
    </div>
  );
}

export default App;
