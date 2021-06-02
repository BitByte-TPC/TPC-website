import { server } from "src/store/global";

type meetingType = {
  title: string;
  description: string;
  datetime: Date | string;
  club: string;
};

export const registerMeeting = async (
  userId: string,
  token: string,
  meetingId: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/meeting/register/" + meetingId, {
    method: "PATCH",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });
  const data = res.json();
  return data;
};

export const createMeeting = async (
  meetingData: meetingType,
  token: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/meeting/create", {
    method: "POST",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meetingData),
  });
  const data = res.json();
  return data;
};

export const updateMeeting = async (
  meetingData: meetingType,
  meetingId: string,
  token: string
): Promise<{ done: boolean; err?: string }> => {
  const res = await fetch(server + "/api/meeting/update/" + meetingId, {
    method: "PATCH",
    headers: {
      Authorization: "bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(meetingData),
  });
  const data = res.json();
  return data;
};
