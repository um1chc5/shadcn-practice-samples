export interface Mail {
  from: From
  title: string
  time: string
  content: string
  tag: string[]
  read: boolean
  id?: number
}

export interface From {
  email: string
  name: string
}

const emailsData: Mail[] = [
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
  {
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
  {
    from: {
      email: 'emilydavis@example.com',
      name: 'Emily Davis',
    },
    time: '2023-03-25T13:15:00Z',
    title: 'Re: Question about Budget',
    tag: ['meeting', 'work', 'important'],
    content:
      "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality. I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting. Thanks, Emily",
    read: false,
  },
]

emailsData.forEach((mail, index) => {
  mail['id'] = index
})

export { emailsData }
