export type Task = {
  id: string
  title: string
  status: 'in progress' | 'backlog' | 'todo' | 'canceled' | 'done'
  label: string
  priority: 'low' | 'high' | 'medium'
}
