import { ConfigProvider } from 'antd';
import React from 'react';
import Game from './Game';
import MyCalendar from './MyCalendar';

const App: React.FC = () => ( 
  <>
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <Game />
    <MyCalendar />
  </ConfigProvider>
  </>  
);

export default App;