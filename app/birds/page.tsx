import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bone, ArrowLeft } from "lucide-react"

export default function BirdsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bone className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold">WellPet</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Latest News
            </Link>
            <Link href="/dogs" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Dogs
            </Link>
            <Link href="/cats" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Cats
            </Link>
            <Link href="/birds" className="text-sm font-medium text-orange-600 transition-colors">
              Birds
            </Link>
            <Link href="/other-pets" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Other Pets
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="flex items-center text-orange-600 hover:text-orange-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soaring Bird Stories
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover heartwarming tales of our feathered friends, from rescue parrots to therapy birds making a
                    difference around the world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700">Latest Bird Stories</Button>
                  <Button variant="outline">Submit Your Story</Button>
                </div>
              </div>
              <Image
                src="/images/barn-swallow-hero.jpeg"
                width={550}
                height={550}
                alt="Beautiful barn swallow in graceful flight with wings spread, captured against a soft green background, representing the freedom and beauty of pet birds"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Featured Bird Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Wings of Wonder & Hope</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Amazing stories of bird rescues, therapy birds, and the incredible bonds between humans and their
                  feathered companions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Rescued parrot in new home"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Rescue
                  </div>
                  <h3 className="text-lg font-bold">Abandoned Parrot Learns to Trust Again</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    After years of neglect, Rainbow the macaw has found a loving home and is learning to socialize
                    again.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Therapy bird helping patients"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Therapy
                  </div>
                  <h3 className="text-lg font-bold">Cockatiel Helps Children with Speech Therapy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sunny the cockatiel assists speech therapists by encouraging children to practice their words.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Wild bird rescue operation"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Wildlife
                  </div>
                  <h3 className="text-lg font-bold">Injured Owl Returns to the Wild</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    After months of rehabilitation, a great horned owl was successfully released back into its natural
                    habitat.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Bird Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore stories about different types of birds and their amazing contributions to our world.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Parrot icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Parrots</h3>
                <p className="text-sm text-muted-foreground">Intelligent companions with vibrant personalities</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Canary icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Songbirds</h3>
                <p className="text-sm text-muted-foreground">Melodious friends bringing joy through song</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Therapy bird icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Therapy Birds</h3>
                <p className="text-sm text-muted-foreground">Feathered healers providing comfort</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  width={80}
                  height={80}
                  alt="Wild bird icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Wild Birds</h3>
                <p className="text-sm text-muted-foreground">Rescue and rehabilitation stories</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                    Did You Know?
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Amazing Bird Facts</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        African Grey parrots can learn over 1,000 words and use them in context, showing remarkable
                        intelligence.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Canaries were historically used in coal mines to detect dangerous gases, saving countless lives.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Some parrots can live over 100 years, forming lifelong bonds with multiple generations of
                        families.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Therapy birds help reduce anxiety and depression in hospitals, nursing homes, and schools
                        worldwide.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Birds have excellent memories and can recognize individual human faces even after years apart.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Beautiful birds showcasing their unique characteristics"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Bird Care Tips
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Creating Happy Homes for Birds</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Learn how to provide the best care for your feathered friends.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Mental Stimulation</h3>
                <p className="text-sm text-muted-foreground">
                  Provide puzzle toys, foraging opportunities, and social interaction to keep your bird mentally engaged
                  and happy.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Proper Nutrition</h3>
                <p className="text-sm text-muted-foreground">
                  Offer a varied diet with high-quality pellets, fresh fruits, vegetables, and species-appropriate
                  treats.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Safe Environment</h3>
                <p className="text-sm text-muted-foreground">
                  Create a bird-safe space free from toxic plants, fumes, and hazards while providing adequate flight
                  space.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Social Interaction</h3>
                <p className="text-sm text-muted-foreground">
                  Birds are social creatures that need daily interaction, whether with humans or other compatible birds.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Regular Vet Care</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule regular check-ups with an avian veterinarian to maintain your bird's health and catch issues
                  early.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Natural Light</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure your bird gets adequate natural light or full-spectrum lighting for proper vitamin D synthesis.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Bone className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-bold">WellPet</span>
            </Link>
            <p className="text-sm text-muted-foreground">Spreading pawsitivity across the globe since 2024.</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/" className="text-sm hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              © {new Date().getFullYear()} WellPet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
