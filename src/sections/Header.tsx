function Header() {
  return (
    <div
      id="home"
      className="w-full bg-primary h-[120px] flex items-center justify-center !px-4 relative"
    >
      <div className="flex items-center justify-between w-full !max-w-[328px] md:!max-w-full xl:!max-w-[1318px] relative">
        <div className="flex items-center flex-shrink-0">
          <img
            src="./assets/images/logo.webp"
            alt="logo"
            className="w-[350px] h-[300px] md:w-[400px] md:h-[350px] xl:w-[500px] xl:h-[450px] !ml-[-65px] md:!ml-[-50px] xl:!ml-[-62px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
