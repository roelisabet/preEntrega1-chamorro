
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import './navBar.css'

const App = () => {
  return (
    <>
    <div>

    <NavBar/>
    <ItemListContainer greeting= "Bienvenidos a mi tienda" />

    </div>
    </>
  )
}

export default App 