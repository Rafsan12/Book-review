import BannerImg from "../../assets/BannerImg.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={BannerImg} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn border-orange-500 mt-8">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
