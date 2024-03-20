import { Separator } from 'src/components/ui/separator'

export default function Home() {
  return (
    <section about="Email content" className="h-full flex flex-col">
      <div className="h-[52px]"></div>
      <Separator />
      <div className="flex grow justify-center items-center">
        <h2 className="text-3xl font-semibold">Choose an inbox to begin - new</h2>
        <p className="text-3xl font-semibold">Main branch</p>
      </div>
    </section>
  )
}
