interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  category?: string
  image?: string
}

export async function fetchAnimalNewsServer(): Promise<Article[]> {
  try {
    const response = await fetch("https://www.goodnewsnetwork.org/category/news/animals/feed/", {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const xmlText = await response.text()

    // Simple XML parsing for RSS
    const articles: Article[] = []
    const itemMatches = xmlText.match(/<item>(.*?)<\/item>/gs)

    if (itemMatches) {
      itemMatches.slice(0, 6).forEach((item) => {
        const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/)
        const descMatch =
          item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
          item.match(/<description>(.*?)<\/description>/)
        const linkMatch = item.match(/<link>(.*?)<\/link>/)
        const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)

        if (titleMatch && descMatch && linkMatch) {
          const title = titleMatch[1].trim()
          const description = descMatch[1].replace(/<[^>]*>/g, "").trim()
          const link = linkMatch[1].trim()
          const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString()

          // Extract image from description if available
          const imgMatch = descMatch[1].match(/src="([^"]+)"/i)
          const image = imgMatch ? imgMatch[1] : null

          articles.push({
            title: title.length > 80 ? title.substring(0, 80) + "..." : title,
            description: description.length > 150 ? description.substring(0, 150) + "..." : description,
            link,
            pubDate,
            image: image || `/placeholder.svg?height=400&width=600`,
          })
        }
      })
    }

    return articles.length > 0 ? articles : getFallbackArticles()
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return getFallbackArticles()
  }
}

function getFallbackArticles(): Article[] {
  return [
    {
      title: "Shelter Dog Finds Forever Home After 5 Years",
      description: "After waiting patiently for 5 years, Max finally found his perfect family.",
      link: "#",
      pubDate: new Date().toISOString(),
      image: "/images/dog-rescue.png",
    },
    {
      title: "Therapy Cats Bring Joy to Retirement Home",
      description: "A group of trained therapy cats is making a huge difference in seniors' lives.",
      link: "#",
      pubDate: new Date().toISOString(),
      image: "/images/therapy-cats.png",
    },
    {
      title: "Lost Parrot Returns Home After 3 Years",
      description: "A family's beloved parrot returned home after being missing for three years.",
      link: "#",
      pubDate: new Date().toISOString(),
      image: "/images/parrot-return.png",
    },
  ]
}
