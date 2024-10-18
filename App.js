
import './App.css';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { useWeather } from './context/Weather';
function App() {
  const weather=useWeather()
  return (
    <div className="App">
      <h1>Weather ForeCast</h1>
      <Input/>
      <Button value="Search" onClick={weather.fetchData}/>
      <Card/> 
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
