import { Article, Section } from './styles'
import ratingStar from '../../assets/images/rating-star.png'
import restaurantFig from '../../assets/images/restaurant-figure.png'

const ProductList = () => {
  return (
    <main className="centralizer">
      <Section>
        <Article>
          <figure>
            <img src={restaurantFig} alt="" style={{ width: '100%' }} />
          </figure>
          <div className="content">
            <div className="contentHeader">
              <h2>Hioki Sushi </h2>
              <div className="rating">
                <p>4.9</p>
                <img src={ratingStar} alt="Ícone de estrela" />
              </div>
            </div>
            <p className="contentBody">
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <span className="button">Saiba mais</span>
          </div>
        </Article>
        <Article>
          <figure>
            <img src={restaurantFig} alt="" style={{ width: '100%' }} />
          </figure>
          <div className="content">
            <div className="contentHeader">
              <h2>Hioki Sushi </h2>
              <div className="rating">
                <p>4.9</p>
                <img src={ratingStar} alt="Ícone de estrela" />
              </div>
            </div>
            <p className="contentBody">
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <span className="button">Saiba mais</span>
          </div>
        </Article>
        <Article>
          <figure>
            <img src={restaurantFig} alt="" style={{ width: '100%' }} />
          </figure>
          <div className="content">
            <div className="contentHeader">
              <h2>Hioki Sushi </h2>
              <div className="rating">
                <p>4.9</p>
                <img src={ratingStar} alt="Ícone de estrela" />
              </div>
            </div>
            <p className="contentBody">
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <span className="button">Saiba mais</span>
          </div>
        </Article>
        <Article>
          <figure>
            <img src={restaurantFig} alt="" style={{ width: '100%' }} />
          </figure>
          <div className="content">
            <div className="contentHeader">
              <h2>Hioki Sushi </h2>
              <div className="rating">
                <p>4.9</p>
                <img src={ratingStar} alt="Ícone de estrela" />
              </div>
            </div>
            <p className="contentBody">
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <span className="button">Saiba mais</span>
          </div>
        </Article>
        <Article>
          <figure>
            <img src={restaurantFig} alt="" style={{ width: '100%' }} />
          </figure>
          <div className="content">
            <div className="contentHeader">
              <h2>Hioki Sushi </h2>
              <div className="rating">
                <p>4.9</p>
                <img src={ratingStar} alt="Ícone de estrela" />
              </div>
            </div>
            <p className="contentBody">
              Peça já o melhor da culinária japonesa no conforto da sua casa!
              Sushis frescos, sashimis deliciosos e pratos quentes
              irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
              garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
            <span className="button">Saiba mais</span>
          </div>
        </Article>
      </Section>
    </main>
  )
}

export default ProductList
