const getApartaments = async () => {
    const response = await fetch('https://apiapartamentos.herokuapp.com/apartamentos');
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    return jsonResponse.mensaje;
};

const getApartament = async (id) =>{

    const response = await fetch('https://apiapartamentos.herokuapp.com/apartamentos/' + id);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};

const ApartamentsService = {
    getApartaments,
    getApartament,
}

export default ApartamentsService;