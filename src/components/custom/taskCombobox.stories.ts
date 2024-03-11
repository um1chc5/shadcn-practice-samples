import { Meta, StoryObj } from '@storybook/react'
import TaskCombobox from './taskCombobox'
import { statusList } from 'src/app/tasks/data/tasksFilters'

const meta = {
  title: 'Mail/TaskCombobox',
  component: TaskCombobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TaskCombobox>

export default meta
type Story = StoryObj<typeof meta>

export const status: Story = {
  //@ts-ignore
  args: {
    title: 'status',
    filterList: statusList,
  },
}
