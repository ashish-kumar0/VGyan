import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import InstructorsPage from "./pages/InstructorsPage";
import AboutPage from "./pages/AboutPage";
import ResultsPage from "./pages/ResultsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

import Class9Courses from "./pages/Class9Courses";
import Class10Courses from "./pages/Class10Courses";
import Class11Courses from "./pages/Class11Courses";
import Class12Courses from "./pages/Class12Courses";
import OnlineCourses from "./pages/OnlineCourses";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/courses/9" element={<Class9Courses />} />
            <Route path="/courses/10" element={<Class10Courses />} />
            <Route path="/courses/11" element={<Class11Courses />} />
            <Route path="/courses/12" element={<Class12Courses />} />
            <Route path="/courses/online" element={<OnlineCourses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
