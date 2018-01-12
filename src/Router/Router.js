/**
 * Created by Administrator on 2017/7/3.
 */
import React,{Component}from 'react';
import  {Router, Route, Link} from 'ReactRouterDOM';
import {history} from 'history';
import ShowTime from './show-time/show-time';
const RouterBtn = ()=>{
<Router history={history}>
   <div>
     <Switch>
       <Route exact path="/ShowTime" component={ShowTime} />
       <Route path="*" component={NotFound} />
     </Switch>
   </div>
 </Router>
}

// export default RouterBtn;
