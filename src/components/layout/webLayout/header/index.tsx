import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

const HeaderWeb = () => {
  return (
    <div>
      {/* desktop */}
      <DesktopHeader />
      {/* mobile  */}
      <div className="md:hidden block ">
        <MobileHeader />
      </div>
    </div>
  );
};

export default HeaderWeb;
