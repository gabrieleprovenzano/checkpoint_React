import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { MyForm } from "./Checkpoint";

export function App() {


    return (
        <div>
            <Routes>
                 <Route path="/" element={<MyForm />} />
            </Routes>
            </div>
)}