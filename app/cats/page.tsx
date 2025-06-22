import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"

export default function CatsPage() {
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
            <Link href="/cats" className="text-sm font-medium text-orange-600 transition-colors">
              Cats
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600 transition-colors">
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
                    Purr-fect Cat News
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Heartwarming stories about our independent and loving feline friends from around the world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700">Latest Cat Stories</Button>
                  <Button variant="outline">Submit Your Story</Button>
                </div>
              </div>
              <Image
                src="/images/cat-hero-sleeping.webp"
                width={550}
                height={550}
                alt="Peaceful tabby cat sleeping contentedly on a white lounge chair"
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
                  Featured Cat Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Feline Heroes & Happy Purrs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover amazing stories of cat rescues, therapy cats, and everyday feline joy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden">
                <Image
                  src="/images/library-cat.png"
                  width={600}
                  height={400}
                  alt="Library cat helping visitors"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Community
                  </div>
                  <h3 className="text-lg font-bold">Library Cat Becomes Local Celebrity</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Whiskers, the library cat, has helped increase reading program attendance by 40%.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/senior-cat-rescue.png"
                  width={600}
                  height={400}
                  alt="Senior cat finding new home"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Rescue
                  </div>
                  <h3 className="text-lg font-bold">15-Year-Old Cat Finds Perfect Retirement Home</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Senior cat Mittens was adopted by a loving family who specializes in caring for older pets.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/therapy-cat-hospital.png"
                  width={600}
                  height={400}
                  alt="Therapy cat in hospital"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Therapy
                  </div>
                  <h3 className="text-lg font-bold">Hospital Therapy Cat Comforts Patients</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Luna the therapy cat visits patients daily, providing comfort during difficult times.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cat Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore stories about different types of cats and their amazing contributions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/therapy-cat-icon.png"
                  width={80}
                  height={80}
                  alt="Therapy cat icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Therapy Cats</h3>
                <p className="text-sm text-muted-foreground">Felines providing comfort and healing</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/rescue-cat-icon.png"
                  width={80}
                  height={80}
                  alt="Rescue cat icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Rescue Stories</h3>
                <p className="text-sm text-muted-foreground">Cats finding their forever homes</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/working-cat-icon.png"
                  width={80}
                  height={80}
                  alt="Working cat icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Working Cats</h3>
                <p className="text-sm text-muted-foreground">Cats with important jobs</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/celebrity-cat-icon.png"
                  width={80}
                  height={80}
                  alt="Celebrity cat icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Celebrity Cats</h3>
                <p className="text-sm text-muted-foreground">Famous felines making a difference</p>
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Amazing Cat Facts</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Cats have a special scent organ called the Jacobson's organ that allows them to "taste" smells.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>A cat's purr vibrates at a frequency that can help heal bones and reduce pain.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Cats can rotate their ears 180 degrees and have 32 muscles controlling each ear.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>A group of cats is called a "clowder," and a group of kittens is called a "kindle."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Cats spend 70% of their lives sleeping, which equals 13-16 hours a day.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/cat-facts.png"
                  width={500}
                  height={500}
                  alt="Happy cat with facts"
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
                  Cat Care Tips
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Creating Happy Homes for Cats</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Learn how to provide the best care for your feline friends.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Mental Stimulation</h3>
                <p className="text-sm text-muted-foreground">
                  Provide puzzle feeders, interactive toys, and climbing structures to keep your cat mentally engaged.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Safe Spaces</h3>
                <p className="text-sm text-muted-foreground">
                  Create quiet retreats where your cat can feel secure, especially in multi-pet households.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Regular Vet Visits</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule annual check-ups and stay up-to-date with vaccinations to keep your cat healthy.
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
