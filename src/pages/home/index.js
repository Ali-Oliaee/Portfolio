import { useTranslation } from "react-i18next";
import SocialButtons from "../../components/social-media";
import "./style.scss";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <h1 className="name">
        {t("name")} <span className="family">{t("family")}</span>
      </h1>
      <p className="description">{t("home-description")}</p>
      <SocialButtons />
    </div>
  );
};

export default HomePage;
