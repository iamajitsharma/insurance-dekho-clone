import Image from "next/image";

const FooterTestimonials = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10">
          <Image
            src="/icon/v2_icon_happysmiles_1.svg"
            alt=""
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
        <div className="leading-tight">
          <p className="text-lg font-semibold text-neutral-800">80 Lac+</p>
          <p className="text-sm font-medium text-neutral-600">Happy Smiles</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTestimonials;
