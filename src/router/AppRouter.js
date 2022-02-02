import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import General from "../pages/General";
import Main from "../pages/Main";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/general" element={<General />} />
            </Routes>
        </Router>
    );
};
export default AppRouter;
