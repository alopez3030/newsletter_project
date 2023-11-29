/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouteError, isRouteErrorResponse} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return <div>Something wrong happened.</div>;
  }

  // Explicit type assertion for error object
  const routeError = error

  return (
    <div className="text-center text-red-700">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeError.statusText}</i>
      </p>
    </div>
  );
};
