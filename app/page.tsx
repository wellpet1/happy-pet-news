import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dog, Cat, Rabbit, Bird, Search, Mail, Bone, ExternalLink } from "lucide-react"
import { fetchAnimalNewsServer } from "@/lib/rss-server"

function getCategoryColor(title: string): string {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("rescue") || lowerTitle.includes("adopt")) return "bg-green-100 text-green-700"
  if (lowerTitle.includes("therapy") || lowerTitle.includes("service")) return "bg-blue-100 text-blue-700"
  if (lowerTitle.includes("return") || lowerTitle.includes("reunion")) return "bg-amber-100 text-amber-700"
  if (lowerTitle.includes("hero") || lowerTitle.includes("save")) return "bg-purple-100 text-purple-700"
  return "bg-orange-100 text-orange-700"
}

function getCategoryLabel(title: string): string {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("rescue") || lowerTitle.includes("adopt")) return "Rescue"
  if (lowerTitle.includes("therapy") || lowerTitle.includes("service")) return "Therapy"
  if (lowerTitle.includes("return") || lowerTitle.includes("reunion")) return "Reunion"
  if (lowerTitle.includes("hero") || lowerTitle.includes("save")) return "Hero"
  return "News"
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  } catch {
    return "Today"
  }
}

export default async function Home() {
  const articles = await fetchAnimalNewsServer()

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bone className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold">WellPet</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dogs" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Dogs
            </Link>
            <Link href="/cats" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Cats
            </Link>
            <Link href="/other-pets" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Other Pets
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <form className="hidden md:flex relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search pet news..." className="w-[200px] pl-8 rounded-full bg-muted" />
            </form>
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Pawsitive News From Around The Globe
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    WellPet brings you heartwarming stories, rescue tales, and joyful moments from the animal kingdom,
                    updated daily.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                    <a href="#todays-headlines">Latest Stories</a>
                  </Button>
                  <Button variant="outline">Subscribe</Button>
                </div>
              </div>
              <Image
                src="/images/hero-dog-cat-friendship.jpeg"
                width={550}
                height={550}
                alt="A heartwarming scene of a tabby cat and German Shepherd dog playing together on green grass, showing the beautiful friendship between different pets"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="todays-headlines" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Latest from Good News Network
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Today's Tail-Wagging Headlines</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Fresh heartwarming pet stories from around the world, updated daily.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {articles.slice(0, 3).map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={article.image || `/placeholder.svg?height=400&width=600`}
                    width={600}
                    height={400}
                    alt={article.title}
                    className="aspect-video object-cover w-full"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`inline-block rounded-full px-3 py-1 text-xs ${getCategoryColor(article.title)}`}>
                        {getCategoryLabel(article.title)}
                      </div>
                      <span className="text-xs text-muted-foreground">{formatDate(article.pubDate)}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{article.description}</p>
                    <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-700" asChild>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        Read full story
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {articles.length > 3 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">More Pawsitive News</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {articles.slice(3, 6).map((article, index) => (
                    <Card key={index + 3} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className={`inline-block rounded-full px-2 py-1 text-xs ${getCategoryColor(article.title)}`}
                          >
                            {getCategoryLabel(article.title)}
                          </div>
                          <span className="text-xs text-muted-foreground">{formatDate(article.pubDate)}</span>
                        </div>
                        <h4 className="font-semibold mb-2 line-clamp-2">{article.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.description}</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-orange-600 hover:text-orange-700 text-sm"
                          asChild
                        >
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            Read more
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore By Pet Type</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Find stories about your favorite furry, feathery, or scaly friends.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <Link
                href="/dogs"
                className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="rounded-full bg-orange-100 p-3">
                  <Dog className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium">Dogs</h3>
                <p className="text-sm text-muted-foreground">Loyal companions and their amazing stories</p>
              </Link>
              <Link
                href="/cats"
                className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="rounded-full bg-orange-100 p-3">
                  <Cat className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium">Cats</h3>
                <p className="text-sm text-muted-foreground">Curious felines and their heartwarming tales</p>
              </Link>
              <Link
                href="/birds"
                className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="rounded-full bg-orange-100 p-3">
                  <Bird className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium">Birds</h3>
                <p className="text-sm text-muted-foreground">Feathered friends and their uplifting journeys</p>
              </Link>
              <div className="flex flex-col items-center gap-2 p-4 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-full bg-orange-100 p-3">
                  <Rabbit className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-medium">Other Pets</h3>
                <p className="text-sm text-muted-foreground">Rabbits, hamsters, reptiles and more</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                Stay Updated
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get Your Daily Dose of Pawsitivity
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Subscribe to our newsletter and receive the most heartwarming pet stories directly in your inbox every
                day.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
              <div className="grid w-full gap-2">
                <form className="grid gap-4">
                  <div className="flex gap-2">
                    <Input placeholder="Enter your email" type="email" className="flex-1" />
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div>
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
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              About Us
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
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
