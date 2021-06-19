import { server } from "src/store/global";

type pollType = {
  question: string;
  options: { name: string }[];
  club: string;
};

export const votePoll = async (
  optionId: string,
  token: string,
  pollId: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/poll/vote/" + pollId, {
    method: "PATCH",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ optionId }),
  });
  const data = res.json();
  return data;
};

export const createPoll = async (
  pollData: pollType,
  token: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/poll/create", {
    method: "POST",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pollData),
  });
  const data = res.json();
  return data;
};

export const updatePoll = async (
  pollData: pollType,
  pollId: string,
  token: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/poll/update/" + pollId, {
    method: "PATCH",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pollData),
  });
  const data = res.json();
  return data;
};

export const deletePoll = async (
  pollId: string,
  club: string,
  token: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/poll/delete/" + pollId, {
    method: "DELETE",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ club }),
  });
  const data = res.json();
  return data;
};
