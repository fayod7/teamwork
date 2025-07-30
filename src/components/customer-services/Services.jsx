import quality from "../../../public/images/quality.svg";
import warranty from "../../../public/images/warranty.svg";
import shipping from "../../../public/images/shipping.svg";
import support from "../../../public/images/support.svg";

const Services = (mt, mb) => {
  console.log(mt, mb);

  return (
    <div className={`bg-[#FAF3EA] py-[100px]`}>
      <div className="container">
        <div className="flex max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:justify-center max-[720px]:gap-8 justify-between">
          <div className="flex gap-[10px] items-center">
            <div className="services-img">
              <img src={quality} alt="" />
            </div>
            <div className="service-content">
              <h2 className="text-[#242424] text-[25px] max-[990px]:text-[16px] max-[720px]:text-[20px] max-[1150px]:text-[20px] font-semibold">
                High Quality
              </h2>
              <p className="text-[#898989] text-[20px] max-[990px]:text-[11px] max-[720px]:text-[16px] max-[1150px]:text-[16px] font-medium">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="services-img">
              <img src={warranty} alt="" />
            </div>
            <div className="service-content">
              <h2 className="text-[#242424] text-[25px] max-[990px]:text-[16px] max-[720px]:text-[20px] max-[1150px]:text-[20px] font-semibold">
                Warranty Protection
              </h2>
              <p className="text-[#898989] text-[20px] max-[990px]:text-[11px] max-[720px]:text-[16px] max-[1150px]:text-[16px] font-medium">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="services-img">
              <img src={shipping} alt="" />
            </div>
            <div className="service-content">
              <h2 className="text-[#242424] text-[25px] max-[990px]:text-[16px] max-[720px]:text-[20px] max-[1150px]:text-[20px] font-semibold">
                Free Shipping
              </h2>
              <p className="text-[#898989] text-[20px] max-[990px]:text-[11px] max-[720px]:text-[16px] max-[1150px]:text-[16px] font-medium">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="services-img">
              <img src={support} alt="" />
            </div>
            <div className="service-content">
              <h2 className="text-[#242424] text-[25px] max-[990px]:text-[16px] max-[720px]:text-[20px] max-[1150px]:text-[20px] font-semibold">
                24 / 7 Support
              </h2>
              <p className="text-[#898989] text-[20px] max-[990px]:text-[11px] max-[720px]:text-[16px] max-[1150px]:text-[16px] font-medium">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
