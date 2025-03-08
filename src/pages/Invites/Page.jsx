import DishImg from "../../assets/images/dish.webp";
import { useEffect, useState } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { getAllInvitesService } from "../../services/invites/invites";

function InvitesPage() {
  const { t } = useTranslation();
  const [invites, setInvites] = useState([]);
  const [invitesStatus, setInvitesStatus] = useState("all");

  useEffect(() => {
    const updateInvites = async () => {
      const res = await getAllInvitesService(invitesStatus);

      if (res && res.data) {
        console.log(res);

        setInvites(res.data.data);
      }
    };

    updateInvites();
  }, [invitesStatus]);

  return (
    <main
      className="invites-page min-h-[80dvh]  md:flex md:gap-10 mt-0 p-0 plus-jakarta-sans"
      id="overlay"
    >
      <section className="min-h-screen mainbg relative   space-y-6 md:min-h-full flex flex-col w-full items-center p-3 md:p-5 z-10 text-start lato-bold md:pl-10 plus-jakarta-sans">
        <img
          src={DishImg}
          alt="Background"
          className="hidden md:block absolute inset-0 m-auto h-full object-cover z-0 opacity-40"
        />

        <div className="w-full flex md:flex-row flex-col justify-center md:space-y-0 space-y-5">
          <div className="relative flex flex-col  md:w-1/4 w-full  items-center">
            <label className="section-title font-medium self-start md:self-start lg:self-start text-start p">
              {t("invites.status")}
            </label>

            <select
              name="status"
              className="text-xs md:text-xl appearance-none w-full px-4 py-2 rounded-[15px] text-white opacity-70 h-[39px] md:h-[48px]    border border-[#FFFFFF4D]  bg-[#444444] form-control    p-3   focus:border-[#fa8836be] focus:ring-2 focus:ring-[#ecaf4a] focus:outline-none"
              onChange={(e) => setInvitesStatus(e.target.value)}
              value={invitesStatus}
            >
              <option
                value="all"
                className=" checked:bg-orange-100 bg-white text-black "
              >
                - {t("invites.statusType.all")} -
              </option>

              <option
                value="accepted"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("invites.statusType.confirmed")}
              </option>

              <option
                value="declined"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("invites.statusType.declined")}
              </option>

              <option
                value="draft"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("invites.statusType.draft")}
              </option>

              <option
                value="pending"
                className="checked:bg-orange-100 bg-white text-black "
              >
                {t("invites.statusType.pending")}
              </option>
            </select>
            <div className="absolute top-7 ltr:right-2 rtl:left-2 md:ltr:right-[2%] md:rtl:left-[2%] flex items-center px-2 pointer-events-none">
              <i className="text-2xl md:text-3xl fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>

        {!invites || invites?.length === 0 ? (
          <div className="text-center z-10">
            <div className="font-bold text-base md:text-2xl mt-5 plus-jakarta-sans">
              {t("invites.noInvites")}
            </div>
          </div>
        ) : (
          // <div>{t("invites.invites")}</div>
          <div></div>
        )}
      </section>
    </main>
  );
}

export default InvitesPage;
