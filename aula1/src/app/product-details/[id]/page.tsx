export default async function ProductDetails({ 
    params,

}:{
    params: Promise <{id: string}>
}){


    const {id} = await params;

    return(

        <h1> Detalhes do Produto {id} </h1>

        
    )
}