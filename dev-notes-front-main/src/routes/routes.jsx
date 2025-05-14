import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Register2 } from '../pages/Register2';
import { Admin } from '../pages/Admin';
import { Main } from '../pages/Main';
import { Task } from '../pages/Task';
import { SearchTask } from '../pages/SearchTask';
import { Login2 } from '../pages/Login2';
import PrivateRoute from './private-route'

function AppRouter(){
    return (
        <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login2 />} />
                <Route path="/register" element={<Register />} />
                <Route
                    element={<PrivateRoute />}
                    path="/admin"
                    isAdmin
                ></Route>
                <Route path="/register2" element={<Register2 />} />
                <Route path="/main" element={<Main />} />
                <Route path="/task" element={<Task />} />
                <Route path="/searchtask" element={<SearchTask />} />
        </Routes>
    );
}


export default AppRouter

