import { Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="w-full h-full bg-primary flex p-2">
      <div className="w-[300px] h-full bg-primary">

      </div>
      <div className="w-[calc(100%-300px)] h-full border-[2px] border-accent rounded-[20px]">
          <Routes path="/">
              <Route path="/" element={<h1>Admin Dashboard</h1>}/>
              <Route path="products" element={<h1>products</h1>}/>
              <Route path="orders" element={<h1>orders</h1>}/>
          </Routes>
      </div>
    </div>
  );
}
