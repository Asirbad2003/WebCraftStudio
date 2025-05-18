import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  company: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, company, image, quote }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <CardDescription>{company}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute -left-1 -top-1 h-6 w-6 text-muted-foreground opacity-40"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
          <p className="pl-6 italic text-muted-foreground">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}
