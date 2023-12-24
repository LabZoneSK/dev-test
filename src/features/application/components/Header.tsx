const Header = () => {
  return (
    <header className="h-[65px] flex-shrink-0 bg-primary">
      <div className="container mx-auto h-full">
        <nav className="flex flex-row h-full">
          <a href="/" className="flex items-center">
            <span className="self-center text-[28px] leading-[33.94px] text-white whitespace-nowrap">
              Flick app
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
