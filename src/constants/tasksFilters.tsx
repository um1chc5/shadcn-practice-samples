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
    icon: <QuestionMarkCircledIcon />,
    id: 1,
  },
  {
    title: 'Todo',
    icon: <CircleIcon />,
    id: 2,
  },
  {
    title: 'In Progress',
    icon: <StopwatchIcon />,
    id: 3,
  },
  {
    title: 'Done',
    icon: <CheckCircledIcon />,
    id: 4,
  },
  {
    title: 'Canceled',
    icon: <CrossCircledIcon />,
    id: 5,
  },
] as const

export const priorities = [
  {
    title: 'Low',
    icon: <ArrowDownIcon />,
    id: 1,
  },
  {
    title: 'Medium',
    icon: <ArrowRightIcon />,
    id: 2,
  },
  {
    title: 'High',
    icon: <ArrowUpIcon />,
    id: 3,
  },
] as const
