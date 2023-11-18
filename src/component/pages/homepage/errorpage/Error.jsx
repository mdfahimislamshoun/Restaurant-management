import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full mt-4 mb-10   h-screen">
        <div>
        <img
          className=" justify-center mx-auto"
          src="https://i.ibb.co/5R641qb/Error-page-1.png"
          alt=""
        />
        <h1 className="text-xl text-center font-bold mb-2">No Data Found</h1>
        <p className="text-xl text-center text-black mb-20">
          Click here to return to{" "}
          <span className="text-red-600">
            <Link to="/">Homepage</Link>
          </span>{" "}
        </p>
        </div>
      </div>
    );
};

export default Error;