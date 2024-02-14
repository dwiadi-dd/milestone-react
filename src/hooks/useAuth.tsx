export const useAuth = () => {
  const auth = JSON.parse(localStorage.getItem("userlogged") as string);
  console.log(auth);
  const isAuth = () => {
    if (!auth) return false;
    if (auth?.fullname !== "") {
      return true;
    }
    return false;
  };

  return { isAuth };
};
