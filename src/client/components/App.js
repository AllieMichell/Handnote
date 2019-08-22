import React, { Component } from 'react';
import './app.css';
import ReactDom from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';


// Components
import Home from './home/home';
import Register from './form/form';
import Err from './404/error';
import UserList from './users/users';
import Comments from './comments/comment';
import NewComment from './comments/newComment';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Home exact path="/" />
        <Route path="/c" component={Comments} />
        <Route path="/nc" component={NewComment} />
        <Route path="/r" component={Register} />
        <Route path="/e" component={Err} />
        <Route path="/u" component={UserList} />
      </div>
    </BrowserRouter>
  );
}

export default Router;
