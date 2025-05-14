import Container from "@/components/common/Container";
import NewsList from "../components/NewsList";
import FreeQuote from "../components/FreeQuote";

interface NewsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  publisher: string;
  date: string;
  category: string;
}

const getNews = async (category: string) => {
  const response = await fetch("http://localhost:4000/news", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const newsItems = await response.json();

  const filteredNews = newsItems.filter(
    (news: NewsProps) => news.category === category
  );

  return filteredNews;
};

const NewsCategory = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const newsItems = await getNews(category);
  return (
    <section className="w-full bg-white ">
      <Container className="lg:not-even:px-20">
        <div className="text-2xl font-medium text-gray-700 py-2">
          <h2>Insurance News</h2>
        </div>
        <div className="flex w-full h-full">
          <div className="w-8/12">
            <NewsList news={newsItems} />
          </div>
          <div className="w-4/12 p-4">
            <div className="flex flex-col gap-5">
              <FreeQuote />
              {/* <CalculatorList />
              <FreeQuote /> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsCategory;
