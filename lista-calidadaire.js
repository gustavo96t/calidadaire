'use strict';
const tbody = document.querySelector('#tbl-measurements tbody');
let mostrar_datos = async() => {
    let measurements = await listar_measurements();
    tbody.innerHTML = '';
    for (let i = 0; i < measurements.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = measurements[i]['averagedOverInHours'];
        fila.insertCell().innerHTML = measurements[i]['time'];
        fila.insertCell().innerHTML = measurements[i]['value'];
        fila.insertCell().innerHTML = measurements[i]['unit'];
        fila.insertCell().innerHTML = measurements[i]['pollutant'];
    }

};
mostrar_datos();