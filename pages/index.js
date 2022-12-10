import Link from 'next/link';

export default function Home() {
  return (
        <div>
          <h1>Seja bem vindo ao NextStore</h1>
          <p>Descubra o produto ideal para você</p>
          <Link type="button" href='./produtos' rel="stylesheet preload">Clique aqui para ver a pagina de produtos</Link>
        </div>
  )
}