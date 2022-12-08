// link de la api: "https://rickandmortyapi.com/api"
// Realizar la exportacion
export class Consulta {
    // Metodo Controlador
    constructor() {

    }
    personajes() {
        fetch(`https://rickandmortyapi.com/api/character`) //recibe un parametro una URL
            .then(respuesta => respuesta.json()) //LOS DATOS RECIBIDOS SON CONVERTIDOS A FORMATO JSON
            .then(respuesta => { //SE RECIBEN LOS DATOS EN FORMATO JSON
                console.log(respuesta); //SE MUESTRAN LOS DATOS OBTENIDOS
                let { results } = respuesta; //se obtinen los personajes
                let personajes = ``;
                let contador = 0;
                results.map(personaje => { //se recorre el arreglo de personajes
                    let { created, gender, id, image, location, name, origin, species, status, url } = personaje;
                    if (contador < 20)
                        personajes += `
                        <div class="col-md-4">
                        <p></p>
                            <div class="card-container" style="box-shadow: 0 0 30px #4f9;">
                                <div class="card border-primary">
                                    <div class="front" style="">
                                        <div class="cover">
                                            <img class="rounded-top" src="public/img/portal.jpg"/>
                                        </div>
                                        <div class="user">
                                            <img class="img-fluid" src="${image}"/>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <h5 class="text-center"><b>${id}. ${name}</b></h5>
                                                <br>
                                                <p class="profession">
                                                    <u><b>A character from the series: Rick and Morty</b></u> <br>
                                                    The science is your only and true friend <br>
                                                    Life is unfair and sucks <br>
                                                    Nothing is real
                                                </p>
                                            </div>
                                            <div class="footer">
                                                <div class="rating">
                                                    <img class="img-fluid" src="public/img/adultswim.png" style="width: 130px; height: 25px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="back">
                                        <div class="header">
                                            <h3 class="text-center"><b>Ficha del Personaje</b></h3>
                                            <hr>
                                        </div>
                                        <div class="content">
                                            <div class="main">
                                                <p style="font-size: 18px;">
                                                    <b>Creación: </b>${created} <br>
                                                    <b>Genero: </b>${gender} <br>
                                                    <b>Localización: </b>${location.name} <br>
                                                    <b>Origen: </b>${origin.name} <br>
                                                    <b>Especie: </b>${species} <br>
                                                    <b>Estado: </b>${status}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="footer">
                                            <a href="${url}" class="btn btn-sm btn-primary">Ver más sobre el personaje</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    contador++;
                });
                $(`#personajes`).html(personajes);
            })
            .catch(error => { //SE ATRAPA UN ERROR EN CASO DE EXISTIR
                console.log(error); //SE MUESTRA EL ERROR
            });
    }
    episodios() {
        fetch(`https://rickandmortyapi.com/api/episode`)
            .then(respuesta2 => respuesta2.json())
            .then(respuesta2 => {
                console.log(respuesta2);
                let { results } = respuesta2;
                let episodios = ``;
                let contador2 = 0;
                results.map(episodio => {
                    let { id, name, air_date, episode, characters, url, created } = episodio;
                    if (contador2 < 11)
                        episodios += `
                        <br>
                        <div class="col-xs-8 col-xs-offset-2 slide-row">
                            <div class="slide-content" style="color: white;">
                                <h2>Episodio N° ${id}: ${name}</h2>
                                <p>
                                    <b>Creación: </b>${created} <br>
                                    <b>Episodio: </b>${episode} <br>
                                    <b>Fecha de emisión al aire: </b>${air_date} <br>
                                    <b>Canal original:</b> Adult Swim. <br> 
                                    <b>Streaming:</b> HBO Max.
                                </p>
                                <p></p>
                            </div>
                            <div class="slide-footer text-end" style="background-color: black;">
                                <span class="pull-right buttons">
                                    <a class="btn btn-sm btn-success" href="${url}" >Ver más datos del episodio</a>
                                </span>
                            </div>
                        </div>
                        `;
                    contador2++;
                });
                $(`#episodios`).html(episodios);
            })
            .catch(error => {
                console.log(error);
            });
    }
    localizaciones() {
            fetch(`https://rickandmortyapi.com/api/location`)
                .then(respuesta3 => respuesta3.json())
                .then(respuesta3 => {
                    console.log(respuesta3);
                    let { results } = respuesta3;
                    let localizaciones = ``;
                    let contador3 = 0;
                    results.map(localizacion => {
                        let { id, name, type, dimension, residents, url, created } = localizacion;
                        if (contador3 < 12)
                            localizaciones += `
                            <div class="col-md-6">
                                <div class="card border border-primary rounded" style="box-shadow: 0 0 30px #4f9;">
                                    <h5 class="card-header text-center">Localizacion ${id}: ${name}</h5>
                                    <div class="card-body rounded-bottom" style="background-color: #000000; color: white;">
                                        <p class="card-text">
                                            <b>Creacion: </b>${created} <br>
                                            <b>Tipo: </b>${type} <br>
                                            <b>Dimension: </b>${dimension} <br>
                                            
                                        </p>
                                        <a class="btn btn-primary" href="${url}" style="margin-left: 25%;">Ver más acerca del planeta</a>
                                    </div>
                                </div>
                                <br>
                            </div>
                            <br>`;
                        contador3++;
                    });
                    $(`#localizaciones`).html(localizaciones);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        /* consulta() {
            fetch("https://rickandmortyapi.com/api")
                .then((respuesta) => {
                    if (respuesta.status == 200) {
                        console.log("Funcionamiento correcto");
                        console.log(respuesta.json());
                    }
                    if (respuesta.status == 404) {
                        console.log("No se encontro la pagina");
                    }
                    if (respuesta.status == 500) {
                        console.log("Error del Servidor");
                    }
                })
                .catch();
        }*/
}

// Episodios, Localizaciones