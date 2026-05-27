import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
// import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-black via-gray-850 to-black" />

      <div
        className="absolute inset-0 -z-10 opacity-60 
         bg-[radial-gradient(circle_at_20%_20%,#00BFFF,#00000000_40%),radial-gradient(circle_at_80%_30%,#1E90FF,#00000000_35%)]"
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
