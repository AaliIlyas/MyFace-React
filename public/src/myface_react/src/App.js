import './App.scss';
import { Posts } from './components/Posts';
import { UserList } from './components/User_List';
import { UserDetails } from './components/User_Details';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { CreatePosts } from './components/Create_Posts';
import { CreateUser } from './components/Create_User';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/posts/">Posts</Link>
                    </li>
                    <li>
                        <Link to="/posts/create">Create new post</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/users/id/12" />
                    </Route>
                    <Route exact path="/users/create">
                        <CreateUser />
                    </Route>
                    <Route exact path="/users/">
                        <UserList />
                    </Route>
                    <Route exact path="/users/:page">
                        <UserList />
                    </Route>
                    <Route exact path="/users/id/:userId">
                        <UserDetails />
                    </Route>
                    <Route exact path="/posts/">
                        <Posts />
                    </Route>
                    <Route exact path="/posts/create">
                        <CreatePosts />
                    </Route>
                    <Route exact path="/posts/:page">
                        <Posts />
                    </Route>
                    <Route path="/">
                        Error: Page does not exist
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
