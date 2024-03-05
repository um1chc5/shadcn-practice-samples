'use client'

import { Select } from '@radix-ui/react-select'
import React, { useState } from 'react'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'
import { emailIcons } from '@/data/mailIcons'

type EmailsType = keyof typeof emailIcons

function SideNav() {
  const [mail, setMail] = useState<EmailsType>('triangle')

  return (
    <>
      <div className="px-2 flex items-center h-[52px]">
        <Select onValueChange={(value) => setMail(value as EmailsType)} defaultValue="triangle">
          <SelectTrigger className="w-full">
            <SelectValue asChild>
              <div className="flex gap-3 items-center">
                <span>{emailIcons[mail].jsx} </span>
                <span>An Vu Vuong</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Object.entries(emailIcons).map((icon) => (
              <SelectItem key={icon[0]} value={icon[0]}>
                <div className="flex gap-3 items-center">
                  <div>{icon[1].jsx}</div>
                  <div>{icon[1].mail}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="p-2">
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-primary/90 bg-primary text-secondary font-medium text-sm">
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
            className="mr-2 h-4 w-4"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
          <p>Inbox</p>
          <span className="ml-auto">128</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <p>Draft</p>
          <span className="ml-auto">9</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
          <p>Sent</p>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
            <path d="m9.5 17 5-5"></path>
            <path d="m9.5 12 5 5"></path>
          </svg>
          <p>Junk</p>
          <span className="ml-auto">23</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" x2="10" y1="11" y2="17"></line>
            <line x1="14" x2="14" y1="11" y2="17"></line>
          </svg>
          <p>Trash</p>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
            <path d="M10 12h4"></path>
          </svg>
          <p>Archive</p>
        </div>
      </div>
      <Separator />
      <div className="p-2">
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M14 19a6 6 0 0 0-12 0"></path>
            <circle cx="8" cy="9" r="4"></circle>
            <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
          </svg>
          <p>Social</p>
          <span className="ml-auto">972</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <p>Update</p>
          <span className="ml-auto">342</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
          </svg>
          <p>Forums</p>
          <span className="ml-auto">128</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <p>Shopping</p>
          <span className="ml-auto">8</span>
        </div>
        <div className="flex mb-2 cursor-pointer rounded-lg px-3 h-9 items-center hover:bg-accent font-medium text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
            <path d="M10 12h4"></path>
          </svg>
          <p>Promotion</p>
          <span className="ml-auto">21</span>
        </div>
      </div>
    </>
  )
}

export default SideNav
