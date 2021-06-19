import { server } from "src/store/global";
import useTokenStore from "src/store/tokenStore";
import useYearStore from "src/store/yearStore";
import { fetcherToken } from "src/utils/fetcher";
import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePollData = (): any => {
  const accessToken = useTokenStore((state) => state.token);
  const year = useYearStore((state) => state.year);
  const { data } = useSWR(
    [`${server}/api/poll/get_all?year=${year}`, accessToken],
    fetcherToken,
    { revalidateOnFocus: false, revalidateOnMount: true }
  );
  return {
    pollData: data,
  };
};
export default usePollData;
