import Image from "next/image";
import { v4 as uuid } from "uuid";
import PageTitle from "./PageTitle";

const Testimonials = () => {
  const testimonialLink = [
    {
      id: uuid(),
      title: "80 Lac+",
      subTitle: "Happy Smiles",
      icon: "v2_icon_happysmiles.svg",
      shape: "shape1.svg",
    },
    {
      id: uuid(),
      title: "4.8",
      subTitle: "Rated on Goggle",
      icon: "v2_icon_Grating.svg",
      shape: "shape2.svg",
    },
    {
      id: uuid(),
      title: "35K+",
      subTitle: "Claims Served",
      icon: "v2_icon_claimsetteled_3.svg",
      shape: "shape3.svg",
    },
  ];

  return (
    <section className="">
      <div className="max-w-3xl w-full mx-auto flex items-center h-32 overflow-hidden">
        <div className="flex items-center justify-center w-full h-full px-4 gap-8">
          {testimonialLink.map((item) => (
            <div
              className="relative flex-shrink-0 flex items-center justify-center w-48 h-full "
              key={item.id}
            >
              <div className="absolute -z-[5px] left-0 w-[85px] h-[84px]">
                <Image
                  src={`/icon/${item.shape}`}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-start gap-2 z-10 relative -ml-10">
                <div className="w-[30px] h-[30px]">
                  <Image
                    src={`/icon/${item.icon}`}
                    alt="Smiling Face"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-gray-700">
                  <h5 className="font-semibold text-base">{item.title}</h5>
                  <p className="text-xs ">{item.subTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialCard = () => {
  return (
    <div className="mt-10 w-full">
      <div className=" bg-white py-8">
        <PageTitle
          title="Benefits of InsuranceDekho"
          subheading="Understand your insurance policy options. Identify the best value. Enjoy peace of mind."
        />

        <div className="flex items-center justify-center gap-x-6 max-w-5xl w-full mx-auto ">
          {Array.from({ length: 3 }).map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-start">
                <Image
                  src="/icon/benifitimg1.svg"
                  alt="featured"
                  width={100}
                  height={100}
                  className="bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <h2 className="font-semibold text-lg text-gray-700">
                  5 Minutes Policy Issuance*
                </h2>
                <div className="text-sm text-gray-600">
                  <p>
                    Say no to spending hours and days in queues doing the
                    paperwork for your insurance policy. Get your insurance
                    issued instantly with InsuranceDekho. The entire process
                    from selecting the best insurance policy to getting it
                    issued takes just 5 minutes on InsuranceDekho.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
