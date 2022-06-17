import React, { useEffect } from "react";
import { DyteMeeting, Meeting } from "dyte-client";
import { useNavigate, useParams } from "react-router-dom";
import { joinExistingRoom } from "../../utils";

type Params = {
  id: string | undefined;
  room: string;
};

export const MeetingComponent: React.FC<{}> = () => {
  let navigate = useNavigate();
  const { id, room } = useParams<Params>();
  let auth = sessionStorage.getItem("auth");
  let roomName = sessionStorage.getItem("roomName");

  const onDyteInit = (meeting: Meeting) => {
    //meeting ended event
    meeting.on(meeting.Events.meetingEnded, () => {
      sessionStorage.clear();
      navigate("/");
    });
  };

  useEffect(() => {
    if (!auth && !roomName) {
      //creating a new participant
      joinExistingRoom(id!, room!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {auth && roomName && (
        <DyteMeeting
          onInit={onDyteInit}
          clientId={process.env.REACT_APP_DYTE_ORG_ID!}
          meetingConfig={{
            roomName: roomName,
            authToken: auth,
            apiBase: process.env.REACT_APP_DYTE_BASE_URL,
          }}
        />
      )}
    </React.Fragment>
  );
};
