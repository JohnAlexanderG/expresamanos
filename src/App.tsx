import { Provider } from './context/Provider';
import ReactGA from 'react-ga'

import Video from './components/Video';
import StepView from './components/StepView';
import Content from './components/Content';

import "antd/dist/antd.css";
import { useEffect } from 'react';
import { addUsers, getUsers } from './utils/firebase';

import './App.css';

ReactGA.initialize('G-PRV2X6LCH1');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // getUsers();
  }, [])

  return (
    <Provider>
      <section className='expresamanos-wrapper'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', WebkitOverflowScrolling: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Video />
            <Content />
          </div>
          <StepView />
        </div>
      </section>
    </Provider>
  )
}

export default App
