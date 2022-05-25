import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import './App.css';
import Home from './routes/home/Home';
import SignIn from './routes/sign-in/SignIn';

const Hello = () => {
  return (
    <div>
      <div>
        <h1>Hello there</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Hello />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
