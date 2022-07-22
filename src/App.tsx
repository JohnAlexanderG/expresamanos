import { Provider } from './context/Provider';
import ReactGA from 'react-ga'

import Video from './components/Video';
import StepView from './components/StepView';
import Content from './components/Content';

import "antd/dist/antd.css";
import { useEffect } from 'react';

ReactGA.initialize('G-PRV2X6LCH1');

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <Provider>
      <div style={{ display: 'flex', backgroundColor: '#929292' }}>
        <StepView />
        <div style={{ backgroundColor: '#fcfcfc', position: 'fixed', marginLeft: '56px', height: '100%' }}>
          <Video />
          <Content />
        </div>
      </div>
    </Provider>
  )
}

export default App
