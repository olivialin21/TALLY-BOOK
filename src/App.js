import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css';
import './App.css';
import Home from './pages/Home';
import Input from './pages/Input';
import Feedback from './pages/Feedback';
import Setting from './pages/Setting';
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={Input} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/setting" component={Setting} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
