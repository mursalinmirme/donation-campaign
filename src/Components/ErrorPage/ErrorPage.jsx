import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const catchError = useRouteError();
    console.log(catchError)
    return (
        <div className="w-full h-[90vh] flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold text-gray-600">Oops... Some went wrong!</h3>
            <div className="mt-5 flex gap-5 items-center">
                <p className="text-lg font-semibold text-gray-600">Please Go Back</p>
                <Link to={'/'} className="bg-[#3c3b3b] text-white font-semibold px-5 py-2 rounded-md">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;