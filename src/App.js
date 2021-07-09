import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Form from './components/Form';
import Msg from './components/Msg';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={Form}/>
        <Route path="/mensage" component={Msg}/>
      </Switch>
    </Router>

    
  );
}

export default App;
