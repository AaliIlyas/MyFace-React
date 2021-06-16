import './App.css';
import { Posts } from './components/Posts';
import { UserList } from './components/User_List';
import { UserDetails } from './components/User_Details';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/posts/">posts</Link>
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
                        <Posts />
                    </Route>
                    <Route exact path="/users/">
                        <UserList />
                    </Route>
                    <Route exact path="/users/:id">
                        <UserDetails />
                    </Route>
                    <Route exact path="/posts/">
                        <Posts />
                    </Route>
                    <Route exact path="/posts/:page">
                        <Posts />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
