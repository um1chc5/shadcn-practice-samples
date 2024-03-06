import SideNav from '@/components/general/sidenav'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import MailList from './components/mailList/mailList'

function MailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={18} minSize={8} collapsible={true} collapsedSize={4}>
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
