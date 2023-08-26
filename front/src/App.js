import { BrowserRouter as Router } from 'react-router-dom';
import Path from '../src/components/Path';
import Nav from '../src/components/Nav';


function App() {
  return (
    <div>
    <Router>
    <Nav/>
    <Path/>
    </Router>
    </div>
  );
}

export default App;
