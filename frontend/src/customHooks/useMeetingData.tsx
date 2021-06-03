import { server } from "src/store/global";
import useTokenStore from "src/store/tokenStore";
import useYearStore from "src/store/yearStore";
import { fetcherToken } from "src/utils/fetcher";
import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useMeetingData = (): any => {
  const year = useYearStore((state) => state.year);
  const accessToken = useTokenStore((state) => state.token);
  const { data } = useSWR(
    [`${server}/api/meeting/get_all?year=${year}`, accessToken],
    fetcherToken,
    { revalidateOnFocus: false, revalidateOnMount: true }
  );
  return {
    meetingData: data,
  };
};
export default useMeetingData;
