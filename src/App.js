import './App.css';
import Feed from './Feed';
import Header from './Header'
import Sidebar from './Sidebar'


function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* App body */}
      <div className='app_body'>
        <Sidebar />
        {/* Feed */}
        <Feed />
      {/* Widgets */}
        </div>
     
    </div>
  );
}

export default App;
