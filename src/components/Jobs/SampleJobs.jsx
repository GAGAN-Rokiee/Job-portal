import React from "react";
import Img1 from "../../assets/samplejobs/bp.jpg";
import Img2 from "../../assets/samplejobs/com.jpg";
import Img3 from "../../assets/samplejobs/ee.jpg";
import Img4 from "../../assets/samplejobs/pw.jpg";
import Img5 from "../../assets/samplejobs/mo.jpg";

import { FaStar } from "react-icons/fa6";

const JobsData = [
  {
    id: 1,
    img: Img1,
    Position: "Bulk hiring at Domestic BPO ",
    rating: 5.0,
    company: "Wrixty Services Gurugram",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    Position: "Computer operator Jobs in Gurgaon",
    rating: 4.5,
    company: "Right Step Consulting",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    Position: "Electrical Detailing Engineer",
    rating: 4.7,
    company: "Vdc Technologies",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    Position: "Electrician/ Fitter/PW Operator",
    rating: 4.4,
    company: "G.S PHARMBUTOR PVT LTD",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    Position: "Machine Operator Faridabad",
    rating: 4.5,
    company: "Hiring for United HR Solutions",
    aosDelay: "800",
  },
];

const SampleJobs = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        Top searched job of this Week
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {JobsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.Position}</h3>
                  <p className="text-sm text-gray-600">{data.company}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleJobs;
