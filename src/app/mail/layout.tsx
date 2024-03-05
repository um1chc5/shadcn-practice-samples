import SideNav from '@/components/custom/sidenav'
import MailList from '@/components/mailList/mailList'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'

function MailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full border rounded-lg shadow-xl bg-background"
    >
      <ResizablePanel defaultSize={18}>
        <SideNav />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={82}>
        <main className="h-full">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <MailList />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>{children}</ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default MailLayout
