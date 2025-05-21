import './App.css'
import SayHello from './components/SayHello'
import WindowSize from './components/WindowSize'
import UsingLocalStorage from './components/UsingLocalStorage.jsx'
import UserList from './components/UserList.jsx'


function App() {  

  return (
    <>
      <h1>UseEffect Hook</h1>
      <hr />
      <SayHello />
      <hr />
      <WindowSize />
      <hr />
      <UsingLocalStorage />
      <hr />
      <UserList />
    </>

  )
}

export default App
