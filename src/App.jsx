import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="ícone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://carros.peugeot.com.br/gama/peugeot-208.html?msclkid=3b07ec14937f128fa19a8a1a72acebc2" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSuvs} alt="ícone dos carros SUV" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.noticiasautomotivas.com.br/carros-suv/#:~:text=Carros%20SUV%3A%20lista%20completa%20de%20modelos%20%282024%29%201,Hyundai%20Creta%20%E2%80%93%20R%24%20135.390%20...%20Mais%20itens" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="ícone dos carros de luxo" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.e-konomista.pt/marcas-de-carros-de-luxo/" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}
