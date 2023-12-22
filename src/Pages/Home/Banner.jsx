
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useAuth from './../../Hooks/useAuth';
const Banner = () => {
  const { user } = useAuth();
  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true}>
        
        <div className="h-[500px] bg-no-repeat bg-center bg-cover bg-[url('https://assets-global.website-files.com/632954a961fe6a195cb51903/634cd23ce8327e1a65382366_ida%20cover-p-2000.webp')]">
          <div className="h-[500px] flex justify-center items-center text-white ml-10 p-2 rounded bg-black/50  ">
            <div>
              <p className="mb-10 text-gray-200 text-justify">
              Certainly! Creating a simple to-do app can be <br /> 
              a great project to practice programming and web <br /> brdevelopment skills. Below is a basic example   <br />
              of a to-do app using HTML, CSS, and JavaScript. <br />
              You can customize and expand upon it based on your <br /> preferences and requirements.
              </p>
              <Link to={user? '/dashboard' : '/login'}
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                {" "}
                Lets Explore{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[500px] bg-no-repeat bg-center bg-cover bg-[url('https://res.cloudinary.com/practicaldev/image/fetch/s--r5oUDhhT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/036s7j5b73up7455rdth.png')]">
          <div className="h-[500px] flex justify-center items-center text-white  p-2 rounded bg-black/50  ">
            <div>
            <p className="mb-10 text-gray-200 text-justify">
              Certainly! Creating a simple to-do app can be <br /> 
              a great project to practice programming and web <br /> brdevelopment skills. Below is a basic example   <br />
              of a to-do app using HTML, CSS, and JavaScript. <br />
              You can customize and expand upon it based on your <br /> preferences and requirements.
              </p>
              
                <Link to={user? '/dashboard' : '/login'}
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                {" "}
                Lets Explore{" "}
              </Link>
              
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
