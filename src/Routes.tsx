import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/task-manager' element={<TaskManager />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}