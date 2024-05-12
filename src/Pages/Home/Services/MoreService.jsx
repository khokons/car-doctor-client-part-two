import img1 from "../../../assets/icons/001-timetable.png";
import img2 from "../../../assets/icons/Group 34.png";
import img3 from "../../../assets/icons/Group 35.png";

const MoreService = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-[250px] bg-[#151515] p-3 my-5 rounded-lg">
      <div className="flex justify-evenly items-center">
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="text-white leading-normal">
          <h2 className="text-sm font-medium">We are open monday-friday</h2>
          <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className='text-white leading-normal'>
          <h2 className="text-sm font-medium">Have a question?</h2>
          <h2 className="text-2xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <div>
          <img src={img3} alt="" />
        </div>
        <div className='text-white leading-normal'>
          <h2 className="text-sm font-medium">Need a repair? our address</h2>
          <h2 className="text-2xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default MoreService;
