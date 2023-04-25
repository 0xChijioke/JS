import { categories } from "@/constants"
import fetchNews from "@/lib/fetchNews"


export default async function Home() {

  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  )
}
