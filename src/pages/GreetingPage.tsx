import Main from "../components/Main/Main";
import axios from "../api/axios";
import { useEffect } from "react";

const GreetingPage = () => {
  const Test = async () => {
    const { data } = await axios(
      "api/2.0.0/public/device/34670a76-6022-4df5-ac1d-68f88589c904/"
    );
    return { data };
  };
  useEffect(() => {
    Test().then((r) => console.log(r));
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
};

export default GreetingPage;
