import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component'
import Mixins from './routes/mixins/mixins'
import Suggestions from './routes/suggestions/suggestions'
import Navigation from './components/navigation/navigation';
import MediaQueries from './routes/mediaQueries/mediaQueries';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mixins' element={<Mixins />} />
            <Route path='/suggestions' element={<Suggestions />} />
            <Route path='/media-queries' element={<MediaQueries />} />
        </Routes>
    </div>
  );
}

export default App;
