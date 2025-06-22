import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft, Fish, Rabbit } from "lucide-react"

export default function OtherPetsPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-orange-600" />
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
            <Link href="/other-pets" className="text-sm font-medium text-orange-600 transition-colors">
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
                    Amazing Other Pet Stories
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover heartwarming tales from rabbits, reptiles, fish, birds, and all the wonderful creatures
                    that make our world brighter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700">Latest Pet Stories</Button>
                  <Button variant="outline">Submit Your Story</Button>
                </div>
              </div>
              <Image
                src="/images/goldfish-hero.jpeg"
                width={550}
                height={550}
                alt="Beautiful orange goldfish swimming peacefully in a clear glass bowl, representing the wonderful world of aquatic pets"
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
                  Featured Pet Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Extraordinary Tales from Unique Companions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  From rescue rabbits to therapy birds, discover the amazing stories of pets beyond cats and dogs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Rescue rabbit in new home"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Rescue
                  </div>
                  <h3 className="text-lg font-bold">Abandoned Rabbit Finds Perfect Family</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Benny the rabbit was found in a park and now lives happily with his new family.
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
                  <h3 className="text-lg font-bold">Parrot Helps Children with Speech Therapy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Charlie the parrot assists speech therapists in helping children overcome communication challenges.
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
                  alt="Guinea pig rescue operation"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Community
                  </div>
                  <h3 className="text-lg font-bold">Guinea Pig Rescue Saves 50 Animals</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Local rescue organization successfully rehomes 50 guinea pigs from overcrowded conditions.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pet Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore stories about different types of unique pets and their amazing contributions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <Rabbit className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-sm font-medium">Rabbits</h3>
                <p className="text-xs text-muted-foreground">Gentle hoppers with big hearts</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Birds</h3>
                <p className="text-xs text-muted-foreground">Colorful companions with personality</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <Fish className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-sm font-medium">Fish</h3>
                <p className="text-xs text-muted-foreground">Peaceful aquatic friends</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Reptiles</h3>
                <p className="text-xs text-muted-foreground">Fascinating scaled companions</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Hamsters</h3>
                <p className="text-xs text-muted-foreground">Tiny bundles of energy</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <svg className="h-8 w-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium">Guinea Pigs</h3>
                <p className="text-xs text-muted-foreground">Social and gentle creatures</p>
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Amazing Pet Facts</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Rabbits can live 8-12 years and are highly social animals that form strong bonds with their
                        owners.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Some parrots can live over 100 years and have the intelligence of a 5-year-old child.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Guinea pigs "popcorn" (jump and twist in the air) when they're happy and excited.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Goldfish have memories that last months, not seconds, and can be trained to perform tricks.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Bearded dragons can recognize their owners and show affection by waving their arms.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Various pets showing their unique characteristics"
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
                  Pet Care Tips
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Caring for Unique Pets</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Learn essential care tips for your special companions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Proper Housing</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure your pets have appropriate enclosures with proper ventilation, temperature, and space to move.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Species-Specific Diet</h3>
                <p className="text-sm text-muted-foreground">
                  Research and provide the correct nutrition for your pet's species, age, and health requirements.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Social Needs</h3>
                <p className="text-sm text-muted-foreground">
                  Many pets are social creatures that need companionship, either from their own species or regular
                  interaction.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Veterinary Care</h3>
                <p className="text-sm text-muted-foreground">
                  Find an exotic pet veterinarian who specializes in your type of pet for regular health check-ups.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Environmental Enrichment</h3>
                <p className="text-sm text-muted-foreground">
                  Provide toys, hiding places, and activities to keep your pets mentally stimulated and happy.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Pet-proof your home and be aware of potential hazards specific to your type of pet.
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
              <Heart className="h-6 w-6 text-orange-600" />
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
