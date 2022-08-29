import './App.css';
import InputField from './components/InputField';
import ShortenedLink from './components/ShortenedLink';

function App() {
    return (
        <div className='App'>
            <h1>Shortify your URL</h1>
            <InputField />
            <hr />
            <ShortenedLink />
        </div>
    );
}

export default App;
