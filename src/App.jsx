import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import Student from './components/Student';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  )
}