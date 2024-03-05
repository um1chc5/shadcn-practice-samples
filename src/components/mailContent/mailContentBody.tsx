import { emailsData } from '@/data/mockData'
import DefaultAvatar from '../custom/defaultAvatar'
import { formatISODate } from '@/lib/utils'
import { Separator } from '../ui/separator'
import { Textarea } from '../ui/textarea'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'

interface Props {
  params: { id: number }
}

function MailContentBody({ params }: Props) {
  const emailData = emailsData.find((mail) => mail.id == params.id)

  return (
    <>
      {emailData && (
        <div className="grow flex flex-col">
          <div className="p-4 flex">
            <DefaultAvatar name={emailData?.from.name} />
            <div className="pl-3 grow">
              <div className="flex pb-1 justify-between items-center">
                <p className="text-sm font-semibold">{emailData.from.name}</p>
                <p className="text-xs text-muted-foreground">{formatISODate(emailData.time)}</p>
              </div>
              <p className="text-xs pb-[2px]">{emailData.title}</p>
              <p className="text-xs">
                <span className="font-medium">Reply to: </span>
                {emailData.from.name}
              </p>
            </div>
          </div>
          <Separator />
          <div className="p-4 grow">
            <p className="text-justify text-sm">{emailData.content}</p>
          </div>
          <Separator />
          <div className="p-4">
            <form>
              <Textarea placeholder={'Reply ' + emailData.from.name + '...'} />
              <div className="flex justify-between mt-4 pb-2">
                <div className="flex gap-2 items-center">
                  <Switch />
                  <p className="text-xs">Mute this thread</p>
                </div>
                <Button size={'sm'}>Send</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default MailContentBody
