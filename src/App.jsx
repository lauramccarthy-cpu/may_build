import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
import AttendeeFlow from './pages/attendee/AttendeeFlow'
import TutorDashboard from './pages/TutorDashboard'
import GroupView from './pages/GroupView'
import ConsultancySummary from './pages/ConsultancySummary'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/attendee" element={<AttendeeFlow />} />
            <Route path="/tutor" element={<TutorDashboard />} />
            <Route path="/group-view" element={<GroupView />} />
            <Route path="/summary" element={<ConsultancySummary />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
