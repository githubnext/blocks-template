import { useEffect, useRef, useState } from "react";

const duration = 3000;
interface NotificationType {
  title: string;
  info: any;
  details: string;
}
export const CallbackNotifications = ({}) => {
  const [notifications, setNotifications] = useState<
    (NotificationType | null)[]
  >([]);
  const notificationsRef = useRef<(NotificationType | null)[]>(notifications);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const origin = event.origin;
      // handle messages from the sandboxed block
      const originRegex = new RegExp(
        /^https:\/\/\d{1,4}-\d{1,4}-\d{1,4}-sandpack\.codesandbox\.io$/
      );
      if (!originRegex.test(origin) && origin !== window.location.origin)
        return;
      const eventType = event.data.type || "";
      // @ts-ignore
      const type: NotificationType | undefined = {
        "update-metadata": {
          title: "Update metadata",
          info: <>New metadata:</>,
          details: JSON.stringify(event.data.metadata, null, 2),
        },
        "update-file": {
          title: "Update file contents",
          info: <>New file contents:</>,
          details: JSON.stringify(event.data.content, null, 2),
        },
        "navigate-to-path": {
          title: "Navigate to path",
          info: <>Requested to navigate to page:</>,
          details: event.data.path,
        },
        "github-data--request": {
          title: "GitHub data request",
          info: (
            <>
              Requested more data from GitHub: {event.data.requestType}, with
              config:
            </>
          ),
          details: JSON.stringify(event.data.config, null, 2),
        },
      }[eventType];
      if (!type) return;
      const newNotification = type;
      console.log(newNotification);
      const newNotifications = [...notificationsRef.current, newNotification];
      notificationsRef.current = newNotifications;
      const index = newNotifications.length - 1;
      setNotifications(newNotifications);
      setTimeout(() => {
        const newNotifications = [...notificationsRef.current];
        newNotifications[index] = null;
        notificationsRef.current = newNotifications;
        setNotifications(newNotifications);
      }, duration);
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div className="position-fixed z-50 right-7 bottom-2">
      {notifications.map(
        (notification, index) =>
          notification && (
            <Notification
              key={index}
              title={notification.title}
              info={notification.info}
              details={notification.details}
            />
          )
      )}
    </div>
  );
};

const Notification = ({ title, info, details }: NotificationType) => {
  return (
    <div className="Box py-3 px-4 my-2" style={{ width: "20em" }}>
      <p className="f5 mb-0">Callback triggered:</p>
      <div className="h3-mktg">{title}</div>
      <p className="text-sm mt-2">{info}</p>
      <pre
        className="py-1 px-2 wb-break-all overflow-y-hidden"
        style={{
          maxHeight: "15em",
          background: "#F6F8FA",
        }}
      >
        {details}
      </pre>
      <p className="f6 lh-condensed mt-2" style={{ color: "#6F7781" }}>
        These callbacks aren't implemented in testing environments, but will
        work on blocks.githubnext.com instead of showing a popup
      </p>
    </div>
  );
};
