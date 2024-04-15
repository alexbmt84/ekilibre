import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <div className="w-full py-12 mt-20">
      <div className="container grid max-w-2xl px-4 md:px-6 gap-10 mx-auto">
        <div className="space-y-2">
          <h1 className="lg:mt-5 md:mt-0 text-white text-4xl font-bold tracking-tighter sm:text-6xl/relaxed xl:text-7xl/relaxed text-center">
            Contact
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center pt-5">
            Laissez moi votre message et je reviendrai vers vous dès que possible.
          </p>
        </div>
        <div className="space-y-4 mx">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className={"text-white"}>Nom</Label>
              <Input id="last-name" className={"text-black"} placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className={"text-white"}>Prénom</Label>
              <Input id="first-name" className={"text-black"} placeholder="Votre prénom" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={"text-white"}>Email</Label>
            <Input id="email" className={"text-black"} placeholder="Votre email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className={"text-white"}>Objet</Label>
            <Input id="subject" className={"text-black"} placeholder="Objet du message" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className={"text-white"}>Message</Label>
            <Textarea className="min-h-[100px] text-black" id="message" placeholder="Votre message" />
          </div>
          <Button className={"w-full"}>Envoyer</Button>
        </div>
      </div>
    </div>
  )
}
