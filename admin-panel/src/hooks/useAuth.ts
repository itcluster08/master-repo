import { ISingUp } from "../types";

export const useAuth = () => {
  async function signIn(username: string, password: string) {}
  async function signUp(user: ISingUp) {
    const { username, password, firstName, secondName, creditCard } = user;
    console.log(username, password, firstName, secondName, creditCard);
  }
  function signOut() {}
  return { signIn, signUp, signOut };
};
