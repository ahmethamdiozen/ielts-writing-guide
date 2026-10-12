import StudyPlan from '../components/StudyPlan.jsx'
import plan from '../data/plan.js'

export default function PlanPage() {
  return (
    <div className="page page-2">
      <div className="page-head"><h1>Plan</h1></div>
      <div className="layout layout-single">
        <main className="content">
          <StudyPlan plan={plan} />
        </main>
      </div>
    </div>
  )
}
