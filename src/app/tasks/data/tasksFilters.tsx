import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons'

export const statusList = [
  {
    title: 'Backlog',
    value: 'backlog',
    icon: <QuestionMarkCircledIcon />,
    id: 1,
  },
  {
    title: 'Todo',
    value: 'todo',
    icon: <CircleIcon />,
    id: 2,
  },
  {
    title: 'In Progress',
    value: 'in progress',
    icon: <StopwatchIcon />,
    id: 3,
  },
  {
    title: 'Done',
    value: 'done',
    icon: <CheckCircledIcon />,
    id: 4,
  },
  {
    title: 'Canceled',
    value: 'canceled',
    icon: <CrossCircledIcon />,
    id: 5,
  },
] as const

export const priorities = [
  {
    title: 'Low',
    value: 'low',
    icon: <ArrowDownIcon />,
    id: 1,
  },
  {
    title: 'Medium',
    value: 'medium',
    icon: <ArrowRightIcon />,
    id: 2,
  },
  {
    title: 'High',
    value: 'high',
    icon: <ArrowUpIcon />,
    id: 3,
  },
] as const
