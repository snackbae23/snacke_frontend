import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const SnackbaeContext = createContext({});

export const useSnackBae = () => {
  const snack = useContext(SnackbaeContext);
  return snack;
};

export const SnackBaeProvider = (props) => {
  const [user, setUser] = useState(false); // it help in store data of user after fetch
  const [login, setLogin] = useState(false); //open login for user when it not logged in
  const [allBlogs, setAllBlogs] = useState("");
  const [loader, setLoader] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);
  const [isOn, setIsOn] = useState(false); //toggle switch
  const [shareVisible, setShareVisible] = useState(false); //toggle switch
  const [restaurentdata, setRestaurentData] = useState();

  useEffect(() => {
    setLoader(true);
    getAllData();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  //get all blog data
  const getAllData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://13.202.8.14:4000/api/getBlogs",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setAllBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SnackbaeContext.Provider
      value={{
        loader,
        setLoader,
        allBlogs,
        setAllBlogs,
        commentVisible,
        setCommentVisible,
        user,
        setUser,
        login,
        setLogin,
        isOn,
        setIsOn,
        shareVisible,
        setShareVisible,
        restaurentdata,
        setRestaurentData,
      }}
    >
      {props.children}
    </SnackbaeContext.Provider>
  );
};
