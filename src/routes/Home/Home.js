import { Layout } from "antd";
import Text from "antd/lib/typography/Text";
import Gallery from "./Gallery/Gallery";
import style from "./Home.module.less";

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        <Text className={style.title}>Flickr App</Text>
      </Header>
      <Content className={style.content}>
        <Gallery />
      </Content>
      <Footer className={style.footer}>
        <Text className={style.footer_text}>Images are from Flickr </Text>
      </Footer>
    </Layout>
  );
};

export default Home;
