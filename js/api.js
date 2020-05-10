const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

async function buscarCribs() {
    try {
        
        const response = await fetch(url);
        const cribs = await response.json();      

        cribs.map(crib => {
            const { photo, property_type, name, price } = crib;
            criarCard(photo, property_type, name, price);
        });

    } catch (error) {
        console.log("Ocorreu um erro inesperado...");
    }
}

buscarCribs();