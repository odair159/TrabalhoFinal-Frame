import axios from 'axios';

function Detalhes({produto = {}}){
    return(
        <div>
            <p>{produto.id}</p>
            <p>{produto.title}</p>
            <p>{produto.description}</p>
            <img src={produto.image} width={120} height={130}></img>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );
    const produto = await response.data;
    return{
        props: {produto},
    }
}

export async function getStaticPaths(){
	const response = await axios.get(
		'https://fakestoreapi.com/products'
	);
	const products = await response.data;
	const paths = products.map((produto) => {
		return {params: {id: String(produto.id)}};
	});
	return{ 
		paths,
		fallback: true, 
	};
}

  export default Detalhes;

