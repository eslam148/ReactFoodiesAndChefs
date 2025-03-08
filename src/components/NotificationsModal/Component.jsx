/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import NotificationImg from "../../assets/images/NotificationFoodiesLogo.svg";
import getNotificationDuration from "../../utils/getNotificationDuration";

function NotificationsModal({ notifications, toggleNotifications, navigate }) {
  const { t, i18n } = useTranslation();

  const handleNotificationClick = (notification) => {
    if (notification?.title) {
      // todo: uncomment this line when routes coming from backend gets changed and comment next line
      // navigate(notification?.title || "#");
      navigate("#");
    }
  };

  return (
    <div
      id="notification-list"
      className="z-20 top-12 w-3/4 md:w-4/12 absolute mt-2 text-black bg-white shadow-lg rounded-lg
               ltr:right-20 rtl:left-20"
    >
      {/* Header */}
      <div className="flex justify-between bg-[#D9D9D9] h-[38px] p-2 border-2 border-black">
        <span className="font-semibold">
          {t("notifications.notifications")}
        </span>
        <button
          id="close_Notification"
          className="focus:outline-none bg-transparent"
          onClick={toggleNotifications}
        >
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-black"
          >
            <path
              d="M17.2188 0H1.78125C0.797852 0 0 0.797852 0 1.78125V14.8438C0 15.8271 0.797852 16.625 1.78125 16.625H17.2188C18.2021 16.625 19 15.8271 19 14.8438V1.78125C19 0.797852 18.2021 0 17.2188 0ZM14.1164 10.7803C14.2945 10.9584 14.2945 11.2479 14.1164 11.426L12.6135 12.9289C12.4354 13.107 12.1459 13.107 11.9678 12.9289L9.5 10.4389L7.03223 12.9289C6.8541 13.107 6.56465 13.107 6.38652 12.9289L4.88359 11.426C4.70547 11.2479 4.70547 10.9584 4.88359 10.7803L7.37363 8.3125L4.88359 5.84473C4.70547 5.6666 4.70547 5.37715 4.88359 5.19902L6.38652 3.69609C6.56465 3.51797 6.8541 3.51797 7.03223 3.69609L9.5 6.18613L11.9678 3.69609C12.1459 3.51797 12.4354 3.51797 12.6135 3.69609L14.1164 5.19902C14.2945 5.37715 14.2945 5.6666 14.1164 5.84473L11.6264 8.3125L14.1164 10.7803Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      {/* Notifications */}
      <div
        id="Notification-repet"
        className="max-h-72 overflow-y-auto border-2 border-black border-t-0"
      >
        {notifications && notifications.length > 0 ? (
          <>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="relative flex justify-between border-b-[0.5px] border-[#A9A9A9] h-[84px] hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="flex m-2 space-x-3 rtl:space-x-reverse">
                  <img
                    className="rounded-full w-16 h-16"
                    src={notification?.img || NotificationImg}
                    alt="NotificationFoodiesLogo"
                  />
                  <div className="flex flex-col items-start justify-center w-8/12">
                    <h1 className="font-bold text-black md:text-base text-sm">
                      {notification?.senderName}
                    </h1>
                    <p className="font-medium md:text-sm text-[0.6rem] text-[#8A8787] text-start">
                      {i18n.language === "en"
                        ? notification?.message
                        : notification?.messageAr}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute bottom-1 font-medium text-[9px] text-[#8A8787] md:w-3/12 w-3/12 sm:text-[12px] md:text-[13px] lg:text-[14px] end-0"
                  data-time="Thu Jan 16 2025 13:31:28 GMT+0200 (Eastern European Standard Time)"
                >
                  {getNotificationDuration(
                    notification?.createdAt,
                    i18n.language
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="flex m-2 space-x-3 rtl:space-x-reverse">
              <div className="flex flex-col items-start justify-center w-8/12">
                <h1 className="font-semibold md:text-base text-sm">
                  {t("notifications.noNotifications")}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NotificationsModal;
