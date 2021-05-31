import { server } from "src/store/global";
import useTokenStore from "src/store/tokenStore";
import { fetcherToken } from "src/utils/fetcher";
import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useMeetingData = (): any => {
  const accessToken = useTokenStore((state) => state.token);
  const { data } = useSWR(
    [`${server}/api/meeting/get_all`, accessToken],
    fetcherToken,
    { revalidateOnFocus: false, revalidateOnMount: true }
  );
  return {
    meetingData: data,
  };
};
export default useMeetingData;
