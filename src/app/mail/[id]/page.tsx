import { Separator } from '@/components/ui/separator'
import MailContentHeader from '../components/mailContent/mailContentHeader'
import MailContentBody from '../components/mailContent/mailContentBody'

interface Props {
  params: { id: number }
}

function MailContent({ params }: Props) {
  return (
    <div className="flex flex-col h-full">
      <MailContentHeader />
      <Separator />
      <MailContentBody params={params} />
    </div>
  )
}

export default MailContent
