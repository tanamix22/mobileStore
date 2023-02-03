import RoutesMain from './routes/RoutesMain'
import { DataContextProvider } from './contexts/DataContext'

function App () {
  return (
    <div className='App'>
      <DataContextProvider>
        <RoutesMain />
      </DataContextProvider>
    </div>
  )
}

export default App
