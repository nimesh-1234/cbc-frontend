import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
    return(
        <div className="w-full h-full bg-primary">
            <Header/>
            <Routes>
                <Route path="/" element={<h1>Welocme to Home Page</h1>} />
                <Route path="/products" element={<h1>products</h1>} />
                <Route path="/contact" element={<h1>contact</h1>} />
                <Route path="/about" element={<h1>AboutPage</h1>} />
                <Route path="/*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}