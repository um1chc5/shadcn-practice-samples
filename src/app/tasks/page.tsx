import TableContainer from './components/tableContainer'

function TasksMangement() {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <TableContainer />
    </div>
  )
}

export default TasksMangement
