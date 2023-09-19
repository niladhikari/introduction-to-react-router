import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center text-white font-bold text-2xl">
      <h2>Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page not found</h3>
          <p>Go back where you from</p>
          <Link to="/">
            <button className="bg-blue-600 p-3 font-bold rounded-md mt-3 ml-2">
              Go Home
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
