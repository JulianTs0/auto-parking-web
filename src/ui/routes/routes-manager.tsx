import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RoutesManager(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <div>Home </div> }/>
            </Routes>
        </BrowserRouter>
    )
}
