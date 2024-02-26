import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Container, Content, BannerSection } from "./styles";
import { CardList } from "../../../components/CardList";
import bannerImg from "../../../assets/macaron.png";

export function Home() {
  return (
    <Container>
      <Header isAdmin />
      <Content className="containerWrapper">
        <BannerSection>
          <div className="containerImg">
            <img src={bannerImg} alt="Macarons image" />
          </div>
          <div>
            <h1>Unbelievable tastes</h1>
            <p>Feel the care of preparation with selected ingredients.</p>
          </div>
        </BannerSection>
        <CardList title="Meals" isAdmin />
        <CardList title="Main Dishes" isAdmin />
        <CardList title="Favorites" isAdmin />
      </Content>
      <Footer />
    </Container>
  );
}
