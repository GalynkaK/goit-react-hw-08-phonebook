import { useSelector } from "react-redux"
import { selectIsLoading, selectIsRefreshing, selectUser } from "redux/auth/selectors";
export * from './useAuth';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};