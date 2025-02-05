import './App.css'
import Container from './components/Container/Container';
import Stamp from './components/Stamp/Stamp';

function App() {
  return (
    <div className='App'>
      <Stamp author='Гречишников Олег' nameWork='Тестовое задание для компании Купаев И. В.'/>
      <Container />
    </div>
  )
}

export default App
