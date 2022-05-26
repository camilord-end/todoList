import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'React Hooks implemented',
      completed: true,
      id: 'b967afe24b23'
    },
    {
      text: 'Play with the cat',
      completed: false,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Lear a new thing',
      completed: false,
      id: '54937fhajd'
    },
    {
      text: 'use Context and providers',
      completed: true,
      id: '43242341aaaaa'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
