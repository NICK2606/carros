import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="ícone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg" href="https://carros.peugeot.com.br/gama/peugeot-208.html?msclkid=3b07ec14937f128fa19a8a1a72acebc2" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
          <img src={iconSuvs} alt="ícone dos carros SUV" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.noticiasautomotivas.com.br/carros-suv/#:~:text=Carros%20SUV%3A%20lista%20completa%20de%20modelos%20%282024%29%201,Hyundai%20Creta%20%E2%80%93%20R%24%20135.390%20...%20Mais%20itens" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="ícone dos carros de luxo"  className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend mb-7 text-offwhite lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.e-konomista.pt/marcas-de-carros-de-luxo/" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}
