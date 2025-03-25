import { Avatar } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react"
import { Textarea } from "@nextui-org/react"
import { GraduationCap, Stethoscope, Utensils, Landmark } from "lucide-react"

export default function NearbySection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* What's nearby section */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold mb-6">What's nearby</h2>

          {/* Education */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Allen Academy</span>
                <span>0.089mile</span>
              </div>
              <div className="flex justify-between">
                <span>St. Joseph School</span>
                <span>0.028mile</span>
              </div>
              <div className="flex justify-between">
                <span>George Washington School</span>
                <span>0.059 mile</span>
              </div>
            </div>
          </div>

          {/* Health & Medicine */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Stethoscope className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Health & Medicine</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Allen Academy</span>
                <span>0.089mile</span>
              </div>
              <div className="flex justify-between">
                <span>St. Joseph School</span>
                <span>0.028mile</span>
              </div>
              <div className="flex justify-between">
                <span>George Washington School</span>
                <span>0.059 mile</span>
              </div>
            </div>
          </div>

          {/* Food */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Utensils className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Food</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Allen Academy</span>
                <span>0.089mile</span>
              </div>
              <div className="flex justify-between">
                <span>St. Joseph School</span>
                <span>0.028mile</span>
              </div>
              <div className="flex justify-between">
                <span>George Washington School</span>
                <span>0.059 mile</span>
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Culture</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Allen Academy</span>
                <span>0.089mile</span>
              </div>
              <div className="flex justify-between">
                <span>St. Joseph School</span>
                <span>0.028mile</span>
              </div>
              <div className="flex justify-between">
                <span>George Washington School</span>
                <span>0.059 mile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact agent section */}
        <div className="lg:col-span-4">
          <div className="bg-blue-600 text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Contact agent</h2>

            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-10 w-10 border-2 border-white">
                <img src="/placeholder.svg?height=40&width=40" alt="Emilia Buck" />
              </Avatar>
              <div>
                <p className="font-medium">Emilia Buck</p>
                <p className="text-sm text-blue-100">emilia@agentline.net</p>
              </div>
            </div>

            <form className="space-y-3">
              <Input type="text" placeholder="Your name" className="bg-white text-black" />
              <Input type="email" placeholder="Your mail" className="bg-white text-black" />
              <Input type="tel" placeholder="Your phone" className="bg-white text-black" />
              <Textarea placeholder="Your message" className="bg-white text-black min-h-[100px]" />
              <Button className="w-full bg-blue-800 hover:bg-blue-900">Interressé</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

