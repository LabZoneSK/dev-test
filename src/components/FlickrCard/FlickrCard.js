import { Button, Card as AntDesignCard } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import style from "./FlickrCard.module.less";

const { Meta } = AntDesignCard;

const FlickrCard = ({ title, description, cover, flickrLink }) => {
  const onExploreClick = () => {
    window.open(flickrLink, "_blank").focus();
  };

  return (
    <AntDesignCard
      style={{ width: 300 }}
      cover={
        <img className={style.cover} alt={title} src={cover} height="100px" />
      }
      actions={[
        <Button type={"primary"} onClick={onExploreClick}>
          Explore <ArrowRightOutlined />
        </Button>,
      ]}
    >
      <Meta className={style.meta} title={title} description={description} />
    </AntDesignCard>
  );
};

export default FlickrCard;
