import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProductReel from "@/components/ProductReel"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, GraduationCap } from "lucide-react"
import Link from "next/link"

const perks = [
  {
    name: "Instant Access",
    Icon: ArrowDownToLine,
    description:
      "Get your cards delivered to your email in seconds and download them right away.",
  },
  {
    name: "High Quality",
    Icon: CheckCircle,
    description:
      "Every card in our platform are preparaed with delicate attention. Not happy? Let us know and we will fix it.",
  },
  {
    name: "For a healthier society",
    Icon: GraduationCap,
    description:
      "We have committed to allocating 2% of our profits to support medical students in need worldwide.",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Learn medicine with{" "}
            <span className="text-red-600">digital cards</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to MedCards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/subjects" className={buttonVariants()}>
              Browse Topics
            </Link>
            <Button variant="ghost">Your guide to cards</Button>
          </div>
        </div>

        <ProductReel title="Brand New" subtitle="Most Recent" href='/products' query={{sort: 'desc', limit: 4}} />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm font-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
