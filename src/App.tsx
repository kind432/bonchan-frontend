import React from 'react';
import {Route, Routes} from "react-router-dom";
import { Header } from './components/layout/Header';
import {HomePage} from "./pages/HomePage";
import {TopicsPage} from "./pages/TopicsPage";
import {Sidebar} from "./components/layout/Sidebar";
import {AboutPage} from "./pages/AboutPage";
import {LoginPage} from "./pages/LoginPage";
import {CommentPage} from "./pages/CommentPage";

function App() {
  return (
      <div className="bg-gray-500 min-h-screen">
          <Header/>
          <div className="flex flex-wrap">
            <Sidebar/>
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                <Route path="/forum/:id" element={<TopicsPage /> }/>
                <Route path="/about" element={ <AboutPage />}/>
                <Route path="/login" element={ <LoginPage />}/>
                <Route path="/topic/:id" element={ <CommentPage/>}/>
            </Routes>
          </div>
      </div>
  );
}

export default App;
