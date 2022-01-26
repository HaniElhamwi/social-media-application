export function useUser() {
    const Storeg = window.localStorage;
  
    const id = Storeg.getItem("id");
    const fullName = Storeg.getItem("fullName");
    const email = Storeg.getItem("email");
    const password = Storeg.getItem("password");
  
  
    return { id, fullName, email ,password};
  }
  