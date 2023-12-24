import { useGetFeed } from "../hooks/useGetFeed";

const Content = () => {
  const { items, isLoading, refetch } = useGetFeed();
  console.log(items);
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 65) {
      refetch();
    }
  };

  return (
    <main onScroll={handleScroll} className="flex-1 overflow-scroll">
      {!items && isLoading && <div className="">Loading feed...</div>}

      {items?.map((item) => {
        console.log(item.link);
        return (
          <div className="card" key={item.link}>
            <img src={item.media.m} alt={item.description} height="50" />
            <div className="">{item.title}</div>
            <span
              dangerouslySetInnerHTML={{
                __html: item.description.replace(/<img .*?>/g, ""),
              }}
            ></span>
            <button onClick={() => openLink(item.link)}>Explore -{">"}</button>
          </div>
        );
      })}
    </main>
  );
};

export default Content;
