import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomeRoute from './components/Home'
import MovieDetailView from './components/MovieDetailView'
import Popular from './components/Popular'
import Account from './components/Account'
import Search from './components/Search'
import ProfilePage from './components/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/movies/:id" component={MovieDetailView} />
      <ProtectedRoute exact path="/search" component={Search} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/profilepage" component={ProfilePage} />

      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App

// ccbp submit RJSCP79ATS
