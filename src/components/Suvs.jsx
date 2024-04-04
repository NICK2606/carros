import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {
    return (
    <section className="bg-green p-12">
    <img src={iconSuvs} alt="ícone dos carros SUV" className="mb-7" />
    <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
    <p className="font-lexend mb-7 text-offwhite lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
    <a className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://www.noticiasautomotivas.com.br/carros-suv/#:~:text=Carros%20SUV%3A%20lista%20completa%20de%20modelos%20%282024%29%201,Hyundai%20Creta%20%E2%80%93%20R%24%20135.390%20...%20Mais%20itens" target="_blank">Ver mais</a>
  </section>
  )
}