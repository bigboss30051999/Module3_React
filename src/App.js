import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListStudent from "./ListStudent";
import AddStudent from "./AddStudent";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/students" />} />
                <Route path="/students" element={<ListStudent />} />
                <Route path="/add-student" element={<AddStudent />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;