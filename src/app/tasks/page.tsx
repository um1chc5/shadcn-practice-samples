import TaskCombobox from '@/components/custom/taskCombobox'
import { Input } from '@/components/ui/input'
import { priorities, statusList } from '@/constants/tasksFilters'
import ViewFilter from './components/viewFilter'

function TasksMangement() {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
      <div>
        <div className="flex">
          <Input placeholder="Filter tasks..." className="w-[250px] py-1" />
          <TaskCombobox title="Status" filterList={statusList} />
          <TaskCombobox title="Priority" filterList={priorities} />
          <div className="ml-auto">
            <ViewFilter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TasksMangement
