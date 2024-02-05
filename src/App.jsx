import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./layout.css"
import { ImgAPI } from "./Checkpoint";


export function App() {


    return (
        <div>
            <Routes>
                <Route path="/" element={<ImgAPI />} />
            </Routes>
        </div>
)}
