import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './components/Users';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
