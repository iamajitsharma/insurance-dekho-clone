import Container from "@/components/common/Container";
import NewsList from "./components/NewsList";
import FreeQuote from "./components/FreeQuote";
import CalculatorList from "./components/CalculatorList";
import { v4 as uuid } from "uuid";
const News = () => {
  const newsItems = [
    {
      id: uuid(),
      title:
        "From October 1st, Life Insurance Refund Will Be Higher When You Surrender Your Policy",
      description:
        "With the new updates and introduction of the new Special Surrender Value (SSV) regulations, life insurance policy holders will now get more money refunded as compared to before 1st of October 2024.",
      image: "/dummy-news.jpg",
      publisher: "Kritika Singh",
      date: "09 Oct 2024",
    },
    {
      id: uuid(),
      title: "Government Plans to Cut GST on Daily Essentials",
      description:
        "The finance ministry is reviewing GST rates on daily consumer goods and may cut them to ease inflationary pressure.",
      image: "/dummy-news.jpg",
      publisher: "Arjun Mehta",
      date: "11 Oct 2024",
    },
    {
      id: uuid(),
      title: "Tech Giants Face New Antitrust Regulations in India",
      description:
        "India’s competition commission announces new regulations aimed at increasing transparency and fairness in the digital marketplace.",
      image: "/dummy-news.jpg",
      publisher: "Divya Kapoor",
      date: "12 Oct 2024",
    },
    {
      id: uuid(),
      title: "Mumbai Metro Line 5 Construction Reaches Final Phase",
      description:
        "The MMRDA confirms that the final leg of construction is underway and the line is expected to open by March 2025.",
      image: "/dummy-news.jpg",
      publisher: "Ravi Joshi",
      date: "13 Oct 2024",
    },
    {
      id: uuid(),
      title: "India’s Space Startup Sets Record for Small Satellite Launch",
      description:
        "AgniKul Cosmos launches 25 micro-satellites into orbit with a single rocket, setting a national record.",
      image: "/dummy-news.jpg",
      publisher: "Sneha Iyer",
      date: "14 Oct 2024",
    },
    {
      id: uuid(),
      title: "New RBI Guidelines Aim to Curb Loan App Harassment",
      description:
        "The Reserve Bank of India has released a new circular banning aggressive recovery tactics used by digital loan platforms.",
      image: "/dummy-news.jpg",
      publisher: "Amit Chawla",
      date: "15 Oct 2024",
    },
    {
      id: uuid(),
      title: "Delhi Air Quality Worsens Ahead of Winter",
      description:
        "With stubble burning season beginning, AQI levels in Delhi have started to reach the 'very poor' category.",
      image: "/dummy-news.jpg",
      publisher: "Pooja Sharma",
      date: "16 Oct 2024",
    },
    {
      id: uuid(),
      title: "India and Japan Sign New Trade Agreement on Rare Earths",
      description:
        "The countries agree to collaborate on mining and processing rare earth metals vital for electronics and EVs.",
      image: "/dummy-news.jpg",
      publisher: "Raj Malhotra",
      date: "17 Oct 2024",
    },
    {
      id: uuid(),
      title: "ISRO Announces Manned Mission by End of 2025",
      description:
        "ISRO confirms it is on track to send astronauts into space with the Gaganyaan mission next year.",
      image: "/dummy-news.jpg",
      publisher: "Neha Verma",
      date: "18 Oct 2024",
    },
    {
      id: uuid(),
      title: "India’s GDP Growth Revised to 7.1% for FY24",
      description:
        "The National Statistical Office has revised India's GDP forecast upward based on robust manufacturing data.",
      image: "/dummy-news.jpg",
      publisher: "Siddharth Jain",
      date: "19 Oct 2024",
    },
    {
      id: uuid(),
      title: "Food Delivery Firms Now Required to Display Calorie Info",
      description:
        "A new health regulation requires Swiggy, Zomato, and others to show nutritional info for all menu items.",
      image: "/dummy-news.jpg",
      publisher: "Megha Bhatt",
      date: "20 Oct 2024",
    },
    {
      id: uuid(),
      title: "Chennai Hit by Unseasonal Rains, Schools Closed",
      description:
        "The Tamil Nadu government orders school closures for two days due to flooding in several areas.",
      image: "/dummy-news.jpg",
      publisher: "Kiran Nair",
      date: "21 Oct 2024",
    },
    {
      id: uuid(),
      title: "Cybersecurity Breach at Major Indian Bank Under Investigation",
      description:
        "Authorities are probing a large data breach that reportedly affected thousands of customer accounts.",
      image: "/dummy-news.jpg",
      publisher: "Ananya Desai",
      date: "22 Oct 2024",
    },
    {
      id: uuid(),
      title: "India Launches AI-Powered Farmer Advisory App",
      description:
        "The government rolls out a multilingual AI assistant to help farmers with crop advice and market prices.",
      image: "/dummy-news.jpg",
      publisher: "Rohit Sen",
      date: "23 Oct 2024",
    },
    {
      id: uuid(),
      title: "Oil Prices Surge as Global Tensions Escalate",
      description:
        "Brent crude hits a six-month high, sparking concerns about inflation in import-dependent countries.",
      image: "/dummy-news.jpg",
      publisher: "Sheetal Rao",
      date: "24 Oct 2024",
    },
    {
      id: uuid(),
      title: "Supreme Court Reserves Judgment on Electoral Bonds Case",
      description:
        "After weeks of hearings, the apex court reserves its verdict on the legality of anonymous political funding.",
      image: "/dummy-news.jpg",
      publisher: "Vikram Yadav",
      date: "25 Oct 2024",
    },
    {
      id: uuid(),
      title: "Startup Raises $50 Million to Develop Hydrogen Fuel Tech",
      description:
        "A Bengaluru-based clean energy firm secures funding to accelerate its green hydrogen production process.",
      image: "/dummy-news.jpg",
      publisher: "Tanya D’Souza",
      date: "26 Oct 2024",
    },
    {
      id: uuid(),
      title: "Supreme Court Asks States to Report on Prison Overcrowding",
      description:
        "The court seeks detailed data on inmate population and infrastructure from all state governments.",
      image: "/dummy-news.jpg",
      publisher: "Nikhil Shah",
      date: "27 Oct 2024",
    },
    {
      id: uuid(),
      title: "India’s E-Vehicle Sales Cross 2 Million Mark in 2024",
      description:
        "Electric two-wheelers and cars see record growth as incentives and charging infrastructure expand.",
      image: "/dummy-news.jpg",
      publisher: "Lakshmi Rao",
      date: "28 Oct 2024",
    },
    {
      id: uuid(),
      title: "National Education Policy to Introduce Coding from Class 5",
      description:
        "The Ministry of Education unveils plans to make computer science foundational for middle school students.",
      image: "/dummy-news.jpg",
      publisher: "Deepak Ghosh",
      date: "29 Oct 2024",
    },
  ];

  console.log(newsItems);

  return (
    <section className="w-full bg-white ">
      <Container className="lg:not-even:px-20">
        <div className="text-2xl font-medium text-gray-700 py-2">
          <h2>Insurance News</h2>
        </div>
        <div className="flex w-full h-full">
          <div className="w-8/12">
            <NewsList />
          </div>
          <div className="w-4/12 p-4">
            <div className="flex flex-col gap-5">
              <FreeQuote />
              <CalculatorList />
              <FreeQuote />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
