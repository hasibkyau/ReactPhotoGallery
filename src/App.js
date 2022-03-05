import './App.css';
import MainComponent from './components/MainComponent';
import myStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  //console.log("App.js", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
            <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
