import Image from "next/image";

const FooterTestimonials = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <div className="w-8 h-8">
          <Image
            src="/icon/v2_icon_happysmiles.svg"
            alt=""
            width={64}
            height={64}
            className="w-full h-full grayscale"
          />
        </div>
        <div className="leading-tight text-gray-700">
          <p className="text-sm font-semibold ">80 Lac+</p>
          <p className="text-[10px] font-medium">Happy Smiles</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-8 h-8">
          <Image
            src="/icon/v2_icon_Grating.svg"
            alt=""
            width={64}
            height={64}
            className="w-full h-full grayscale"
          />
        </div>
        <div className="leading-tight text-gray-700">
          <p className="text-sm font-semibold ">4.8</p>
          <p className="text-[10px] font-medium">Rated on Google</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-8 h-8">
          <Image
            src="/icon/v2_icon_claimsetteled_3.svg"
            alt=""
            width={64}
            height={64}
            className="w-full h-full grayscale"
          />
        </div>
        <div className="leading-tight text-gray-700">
          <p className="text-sm font-semibold ">35k+</p>
          <p className="text-[10px] font-medium">Claims Served</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTestimonials;
