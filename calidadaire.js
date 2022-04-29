'use strict';
let listar_measurements = async() => {
    let measurements;
    axios({
            method: 'get',
            url: 'https://api.datos.gob.mx/v1/calidadAire',
            responseType: 'json'
        }).then(function(res) {
            measurements = res.data.measurements;
        })
        .catch(function(err) {
            console.log(err);
        });
    return measurements;
};

