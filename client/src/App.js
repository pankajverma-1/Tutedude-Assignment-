import './App.css';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

function App() {
  return (
    <>
      <Screen1 />
      <hr />
      <hr />
      <div style={{ margin: '10rem 0' }}>
        <h1 style={{ textAlign: 'center' }}>Screen 2</h1>
      </div>
      <hr />
      <hr />
      <Screen2 />
      <hr />
      <hr />
      <div
        className=""
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1>My Other Project</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://thenews.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-white"
          >
            <button>A News website</button>
          </a>
          <a
            href="https://github.com/pankajverma-1/News_website"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <div style={{ marginLeft: '5px' }}>code</div>
          </a>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}
        >
          <a
            href="https://amazon-clone-mern-a.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-white"
          >
            <button>Amazon Clone</button>
          </a>
          <a
            href="https://github.com/pankajverma-1/Amazon_Clone"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <div style={{ marginLeft: '5px' }}>code</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
