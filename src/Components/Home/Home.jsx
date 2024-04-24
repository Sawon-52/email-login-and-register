import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div className="flex flex-col items-center space-y-5">
      <h2 className="text-5xl font-semibold text-gray-100">Welcome To Email Login System</h2>
      <Link to={"/login"} className="text-md p-3  bg-blue-600 text-white rounded-full shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:shadow-none">
        GO
      </Link>
    </div>
  );
};

export default Home;
