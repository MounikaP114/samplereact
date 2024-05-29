
import './App.css';
import Toggle from './Toggle';
import VisibilityToggle from './VisibilityToggle';
import FormData from './FormData';
import ThemeChange from './ThemeChange';
import DynamicList from './DynamicList';

function App() {
  return (
    <div className="App">
      <Toggle></Toggle>
      <VisibilityToggle></VisibilityToggle>
      <FormData></FormData>
      <ThemeChange></ThemeChange>
      <DynamicList></DynamicList>
    </div>
  );
}

export default App;
