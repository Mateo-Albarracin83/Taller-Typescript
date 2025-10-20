"use strict";
const tableBody = document.querySelector("#series-table tbody");
if (tableBody && typeof series !== 'undefined') {
    series.forEach(function (serie, idx) {
        var row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link" data-serie="${idx}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
    // Calcular el promedio de temporadas
    var totalSeasons = series.reduce(function (acc, serie) {
        return acc + serie.seasons;
    }, 0);
    var avgSeasons = Math.round(totalSeasons / series.length);
    // Agregar el texto debajo de la tabla
    var avgRow = document.createElement("tr");
    avgRow.innerHTML = `<td colspan="4"><strong>Seasons average: ${avgSeasons}</strong></td>`;
    tableBody.appendChild(avgRow);
    // Evento para mostrar detalle
    var links = document.querySelectorAll('.serie-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var idxAttr = link.getAttribute('data-serie');
            if (idxAttr !== null) {
                var idx = parseInt(idxAttr);
                showSerieDetail(series[idx]);
            }
        });
    });
}
function showSerieDetail(serie) {
    var detailDiv = document.getElementById('serie-detail');
    if (!detailDiv)
        return;
    detailDiv.innerHTML = `
    <div class="card" style="width: 100%;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" class="card-link" target="_blank">${serie.link}</a>
      </div>
    </div>
  `;
}
