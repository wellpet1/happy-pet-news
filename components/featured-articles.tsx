import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fetchAnimalNews } from "@/lib/rss-parser"
import { ExternalLink } from "lucide-react"

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
      year: "numeric",
    })
  } catch {
    return "Recent"
  }
}

export default async function FeaturedArticles() {
  const articles = await fetchAnimalNews()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
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
                      <div className={`inline-block rounded-full px-2 py-1 text-xs ${getCategoryColor(article.title)}`}>
                        {getCategoryLabel(article.title)}
                      </div>
                      <span className="text-xs text-muted-foreground">{formatDate(article.pubDate)}</span>
                    </div>
                    <h4 className="font-semibold mb-2 line-clamp-2">{article.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.description}</p>
                    <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-700 text-sm" asChild>
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
  )
}
