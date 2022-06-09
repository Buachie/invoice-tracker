import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthenticationContext";

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.currentUser !== null) {
      router.replace("/");
      return <h2>Loading...</h2>;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.currentUser || auth.currentUser == null) {
      router.replace("/login");
      return <h2>Loading...</h2>;
    }
    return <Component auth={auth} {...props} setLogin={true} />;
  };
}
