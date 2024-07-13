import './styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

export default function App() {
  return (
    <div className={'App-wrap'}>
      <header className="App-header">
        <Header />
      </header>
      <Sidebar />
    </div>

  );
}
