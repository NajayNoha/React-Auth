import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Tous from './components/rdv/tous'
import RdvLayout from './layouts/RdvLayout'
import Login from './views/Login'
import Register from './views/Register'


export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/' element={ <MainLayout />}>
        <Route path='/rendez-vous' element={ <RdvLayout />}>
          <Route path='/rendez-vous/tous'  element={ <Tous />} />
          <Route path='/rendez-vous/fixer-rdv'  element={ <Tous />} />
          <Route path='/rendez-vous/programmer'  element={ <Tous />} />
          <Route path='/rendez-vous/a-programmer'  element={ <Tous />} />
          <Route path='/rendez-vous/a-completer'  element={ <Tous />} />
          <Route path='/rendez-vous' index element={ <Tous />} />
        </Route>
      </Route>
    </Route>
  )
)