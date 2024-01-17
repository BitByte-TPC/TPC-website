import { server } from "src/store/global";
import useTokenStore from "src/store/tokenStore";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import { jwtDecode } from "jwt-decode";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useUser = (): any => {
  const accessToken = useTokenStore((state) => state.token);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let jwtData: any = { userId: null };
  if (accessToken) jwtData = jwtDecode(accessToken);
  const userId = jwtData.userId;
  const { data } = useSWR(server + "/api/user/get/" + userId, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
  });
  return {
    userData: data,
  };
};
export default useUser;
