import { Separator } from 'src/components/ui/separator'

export default function Home() {
  return (
    <section about="Email content" className="h-full flex flex-col">
      <div className="h-[52px]"></div>
      <Separator />
      <div className="flex grow justify-center items-center">
        <h2 className="text-3xl font-semibold">Choose an inbox to begin</h2>
      </div>
    </section>
  )
}
