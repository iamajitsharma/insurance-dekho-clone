import Container from "@/components/common/Container";
import ProductTitle from "../components/ProductTitle";
import InsuranceAdvisorList from "../components/InsuranceAdvisorList";
export default async function Page({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;

  const data = [];

  return (
    <section className="w-full ">
      <Container>
        <div className="flex w-full h-full">
          <div className="w-3/12 bg-gray-300">
            <p>Sidebar</p>
          </div>
          <div className="w-9/12 p-4">
            <ProductTitle
              title={`Insurance Advisors in ${location}`}
              desc="Get expert advice at your home to buy the right insurance plan. Here is a list of the best insurance agents in Faridabad. These agents have an experience of selling Health, Life Insurance and have a rating up to 4.5"
            />

            <InsuranceAdvisorList />
          </div>
        </div>
      </Container>
    </section>
  );
}
