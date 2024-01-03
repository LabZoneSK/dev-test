import { Footer } from "flowbite-react";

export const MyFooter = () => {
  return (
    <Footer
      container
      className="fixed bottom-0 left-0 z-20 w-full p-4 bg-slate-200"
    >
      <Footer.Copyright by="Shannon Ronaldson" year={2024}></Footer.Copyright>
      <Footer.LinkGroup>
        <Footer.Link
          href="https://github.com/LabZoneSK/dev-test?tab=readme-ov-file"
          target="_blank"
          rel="noreferrer"
        >
          Instructions on creating this site
        </Footer.Link>
        <Footer.Link
          href="https://shanronaldson-portfolio-shanronaldson.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Personal Website
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};
