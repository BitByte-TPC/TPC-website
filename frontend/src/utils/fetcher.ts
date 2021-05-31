export const fetcher = (url: string): Promise<Response> =>
  fetch(url).then((res) => res.json());

export const fetcherToken = (url: string, token: string): Promise<Response> => {
  return fetch(url, {
    headers: {
      Authorization: "bearer " + token,
    },
  }).then((res) => res.json());
};
