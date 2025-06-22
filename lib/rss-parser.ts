interface Article {
  title: string
  description: string
  link: string
  pubDate: string
  category?: string
  image?: string
}

export async function fetchAnimalNews(): Promise<Article[]> {
  try {
    const response = await fetch("https://www.goodnewsnetwork.org/category/news/animals/feed/", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const xmlText = await response.text()

    // Parse XML manually since we're in a browser environment
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, "text/xml")

    const items = xmlDoc.querySelectorAll("item")
    const articles: Article[] = []

    items.forEach((item, index) => {
      if (index < 6) {
        // Limit to 6 articles
        const title = item.querySelector("title")?.textContent || ""
        const description = item.querySelector("description")?.textContent || ""
        const link = item.querySelector("link")?.textContent || ""
        const pubDate = item.querySelector("pubDate")?.textContent || ""

        // Extract image from description if available
        const imgMatch = description.match(/<img[^>]+src="([^">]+)"/i)
        const image = imgMatch ? imgMatch[1] : null

        // Clean description of HTML tags
        const cleanDescription = description.replace(/<[^>]*>/g, "").substring(0, 150) + "..."

        articles.push({
          title: title.length > 80 ? title.substring(0, 80) + "..." : title,
          description: cleanDescription,
          link,
          pubDate,
          image: image || `/placeholder.svg?height=400&width=600`,
        })
      }
    })

    return articles
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    // Return fallback articles if RSS fails
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
