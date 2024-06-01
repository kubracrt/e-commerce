import React from "react";
import Slider from "react-slick";
import foto1 from "../../assets/a.jpg";
import foto2 from "../../assets/discount.jpg";
const SliderComp = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="my-4 ">
      <Slider {...settings}>
        <div className="flex items-center  bg-slate-700 text-white relative h-[600px]  justify-center">
          <div className=" flex flex-col justify-center w-[600px] mt-40 mx-10">
            <div className="font-thin text-sm">OYUN TURNUVAMIZA KATIL</div>
            <div className="mt-10 font-thin text-sm">
              Kübo Teknolojiye ücretsiz üye ol, oyun Turnuvamıza katıl, eşsiz
              indirimler kazan. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil quasi nobis sapiente ea pariatur
              dignissimos et, unde enim nisi, laborum corrupti? Nemo sed
              quibusdam, molestiae mollitia a sunt ea dolorem! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Nisi dolor beatae maiores,
              nemo, officiis nobis repellat deleniti ipsam, eum fuga suscipit
              nihil veniam rerum voluptas debitis! Impedit suscipit facilis
              molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Qui, tenetur sequi eos consequatur nostrum dolorem iusto
              soluta neque est aspernatur commodi ullam? Nihil reiciendis ab sed
              fuga delectus blanditiis accusantium.
            </div>
          </div>
          <img
            src={foto1}
            className="absolute right-0 top-0  w-[700px] h-[600px] object-cover"
            alt="Foto 1"
          />
        </div>

        <div className="flex items-center  bg-slate-700 text-white relative h-[600px]  justify-center">
          <div className=" flex flex-col text-center justify-center mt-40 mx-10">
            <div className="font-thin text-sm">İNDİRİMLERİ KAÇIRMA</div>
            <div className="font-thin text-sm mt-10">
              Mart ayına özel tüm teknolojik eşyalarımızda %30 indirim ayrıca
              diğer en az 20 binlik alışverinize %5 lik kupon kazanın. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam
              tempore id officiis quam fugiat explicabo commodi aliquid expedita
              quod, quae quibusdam, enim molestias rem unde placeat numquam
              veritatis! Quod.. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Illum perspiciatis rem atque necessitatibus sit
              provident facilis nisi iusto, nobis deleniti placeat officiis qui,
              quis velit hic eligendi reprehenderit distinctio error?
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
