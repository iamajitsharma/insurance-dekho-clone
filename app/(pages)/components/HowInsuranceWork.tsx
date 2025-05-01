import Image from "next/image";
import PageTitle from "@/components/common/PageTitle";

const HowInsuranceWork = () => {
  return (
    <section>
      <div className="max-w-5xl w-full mx-auto border-y pt-5 pb-10">
        <PageTitle title="How InsuranceDekho Works?" />

        <div className="flex items-center justify-center gap-x-6 w-full mx-auto ">
          {Array.from({ length: 5 }).map((item, index) => {
            if (index % 2 !== 0) {
              return (
                <div
                  key={index}
                  className={`flex items-center justify-center w-64 ${
                    index === 3 ? "-scale-y-100" : "rotate-0"
                  }`}
                >
                  <Image
                    src="/icon/fancy-arrow.svg"
                    alt="Insurance Dekho"
                    width={100}
                    height={100}
                  />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/icon/HowIDwork_img1.svg"
                      alt="featured"
                      width={100}
                      height={100}
                      className="bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 pt-2">
                    <h2 className="font-semibold text-base text-gray-700">
                      Fill in Your Details
                    </h2>
                    <div className="text-center text-sm text-gray-600">
                      <p>
                        Fill in your details and get insurance policy premium
                        quotes from top-rated insurers instantly.
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default HowInsuranceWork;
