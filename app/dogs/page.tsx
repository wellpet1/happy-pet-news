import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ArrowLeft } from "lucide-react"

export default function DogsPage() {
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
            <Link href="/dogs" className="text-sm font-medium text-orange-600 transition-colors">
              Dogs
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600 transition-colors">
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
                    Pawsitive Dog News
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Heartwarming stories about our loyal canine companions from around the world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700">Latest Dog Stories</Button>
                  <Button variant="outline">Submit Your Story</Button>
                </div>
              </div>
              <Image
                src="/images/dogs-hero-running.webp"
                width={550}
                height={550}
                alt="Happy dogs running joyfully across a green lawn with trees and blue sky in the background"
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
                  Featured Dog Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Canine Heroes & Happy Tails</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover amazing stories of dog rescues, therapy dogs, and everyday canine joy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="overflow-hidden">
                <Image
                  src="/images/service-dog.png"
                  width={600}
                  height={400}
                  alt="Service dog helping owner"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Service Dogs
                  </div>
                  <h3 className="text-lg font-bold">Service Dog Saves Owner During Medical Emergency</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bella, a trained service dog, alerted neighbors when her owner collapsed at home.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/rescue-puppies.png"
                  width={600}
                  height={400}
                  alt="Rescued puppies in shelter"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Rescue
                  </div>
                  <h3 className="text-lg font-bold">Abandoned Puppies Rescued and Find New Homes</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A litter of seven puppies abandoned in a park have all found loving forever homes.
                  </p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                    Read more
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/images/therapy-dog.png"
                  width={600}
                  height={400}
                  alt="Therapy dog with children"
                  className="aspect-video object-cover w-full"
                />
                <CardContent className="p-4">
                  <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800 mb-2">
                    Therapy
                  </div>
                  <h3 className="text-lg font-bold">Therapy Dogs Help Children Overcome Reading Anxiety</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Local library's "Read to a Dog" program helps children improve reading skills.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Dog Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore stories about different types of dogs and their amazing contributions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/service-dog-icon.png"
                  width={80}
                  height={80}
                  alt="Service dog icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Service Dogs</h3>
                <p className="text-sm text-muted-foreground">Amazing stories of canine assistance</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/rescue-dog-icon.png"
                  width={80}
                  height={80}
                  alt="Rescue dog icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Rescue Stories</h3>
                <p className="text-sm text-muted-foreground">Dogs finding their forever homes</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/therapy-dog-icon.png"
                  width={80}
                  height={80}
                  alt="Therapy dog icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Therapy Dogs</h3>
                <p className="text-sm text-muted-foreground">Canines helping humans heal</p>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/everyday-dog-icon.png"
                  width={80}
                  height={80}
                  alt="Everyday dog icon"
                  className="rounded-full"
                />
                <h3 className="text-lg font-medium">Everyday Heroes</h3>
                <p className="text-sm text-muted-foreground">Ordinary dogs doing extraordinary things</p>
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
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Amazing Dog Facts</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        Dogs can understand up to 250 words and gestures, count up to 5, and perform simple mathematical
                        calculations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>A dog's sense of smell is 10,000 to 100,000 times more acute than a human's.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>Dogs have been proven to help reduce stress, anxiety, and depression in humans.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-600">•</span>
                      <span>
                        The average dog can run about 19 mph (30 km/h), with some breeds reaching up to 45 mph (72
                        km/h).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/dog-facts.png"
                  width={500}
                  height={500}
                  alt="Happy dog with facts"
                  className="rounded-xl object-cover"
                />
              </div>
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
