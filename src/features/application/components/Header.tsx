const Header = () => {
  return (
    <header className="h-[65px] flex-shrink-0 bg-primary">
      <div className="container mx-auto h-full">
        <nav className="flex flex-row items-center h-full">
          <a
            href="/"
            className="text-[28px] leading-[33.94px] text-white whitespace-nowrap"
          >
            Flick app
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
