import React from 'react'
import { Route, Switch } from 'react-router'
import { Howitwork } from '../Components/Howitwork'
import { Landing } from '../Components/Landing'
import { Whatwedo } from '../Components/Whatwedo'
import {Campaign} from '../Components/Campaign'
import { Navbar } from '../Components/Navigation/Navbar'
export const Routee=()=>{
    return(
        <>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
                <Landing/>
            </Route>
            <Route  path='/about'>
              <Whatwedo/>
            </Route>
            <Route  path='/how-it-work'>
              <Howitwork/>
            </Route>
            <Route  path='/start-a-campaign'>
               <Campaign/>
            </Route>
        </Switch>
        </>
    )
}