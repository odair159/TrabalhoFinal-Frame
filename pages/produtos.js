import axios from 'axios';
import Link from 'next/link';

function Produtos({ products }){
    return(
        <div>
           <h1>Produtos em estoque</h1>
           {products.map((produto)=>(
            <div>
            <div>
            <p>{produto.id}</p>
            <img src={produto.image} width={80} height={90}></img>
            <p>{produto.title}</p>
            <p>${produto.price}</p>
            <button><Link type="button" href='/detalhes/[id]'as={`/detalhes/${produto.id}`} rel="stylesheet preload">Detalhes</Link></button>
        </div>
            </div>
           ))}
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;

    return{
        props: {products:data},
    }
}

export default Produtos;