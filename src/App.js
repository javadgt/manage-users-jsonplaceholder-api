import './App.scss';
import Content from './content/Content';
import Sidebar from './components/sidebar/Sidebar';
import DashbordContextProvider from './context/DashbordContext';
import Portal from './Portal';

function App() {
  

  return (
    <DashbordContextProvider>
      {/* <Portal/> */}
      <Sidebar/>
      <Content/>
    </DashbordContextProvider>      
  );
}

export default App;
