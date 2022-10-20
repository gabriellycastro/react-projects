import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LikeDislike from './pages/LikeDislike';
import TaskManager from './pages/TaskManager';

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path='/' element={<Home />} />
                <Route path='/task-manager' element={<TaskManager />} />
                <Route path='/like-dislike' element={<LikeDislike />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}