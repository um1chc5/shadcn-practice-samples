import { Meta, StoryObj } from '@storybook/react'
import SlotTooltip from './tooltipCustom'

const meta = {
  title: 'Mail/SlotTooltip',
  component: SlotTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SlotTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Archive: Story = {
  args: {
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect width={20} height={5} x={2} y={3} rx={1} />
        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
        <path d="M10 12h4" />
      </svg>
    ),
    tooltip_content: 'Archive',
  },
}
