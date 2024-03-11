import { Meta, StoryObj } from '@storybook/react'
import MailCard from './mailCard'

const meta = {
  title: 'Mail/MailCard',
  component: MailCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MailCard>

export default meta
type Story = StoryObj<typeof meta>

export const Sample: Story = {
  args: {
    mail: {
      from: {
        email: 'williamsmith@example.com',
        name: 'William Smith',
      },
      time: '2023-10-22T09:00:00Z',
      title: 'Meeting Tomorrow',
      tag: ['meeting', 'work', 'important'],
      content:
        "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to our meeting! Best regards, William",
      read: true,
    },
  },
}
