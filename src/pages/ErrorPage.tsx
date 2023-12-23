import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <img
        src="https://m3.material.io/static/angular/404-light.caafc6e0327e9785.png"
        alt="Error image description"
        className="w-[40rem] h-auto rounded "
      />
      <h1 className=" text-black text-4xl font-bold mb-6 ">Error Page</h1>
      <Link to="/">
        <p className="bg-blue-600 text-white px-4 py-4 rounded-full mb-4">
          Home Page
        </p>
      </Link>
    </div>
  );
};

export default ErrorPage;
