const Header = () => {
  return (
    <header className="h-[65px] flex-shrink-0">
      <nav className="bg-primary flex flex-row h-full px-4 lg:px-6">
        <a href="/" className="flex items-center">
          <span className="self-center text-[28px] leading-[33.94px] text-white whitespace-nowrap">
            Flick app
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
