const OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '©<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const peta = L.map('peta', {
    center: [-6.17, 106.83],
    zoom: 12,
    minZoom: 12,
    maxZoom: 16,
    maxBounds: [
        [-6.071214152831105, 106.84113259318353],
        [-6.428877215842575, 106.81915993841787],
    ],
    layers: OSM
});

const afganistan = L.marker([-6.201143408711568, 106.82966955388594]).addTo(peta)
    .bindPopup('<center> Kedutaan Afganistan   <br> <img src="./Leflet/gambar/Afganistan.png" width="150px" >');
const aljazair = L.marker([-6.229919242734938, 106.833521347357]).addTo(peta)
    .bindPopup('<center> Kedutaan Aljazair   <br> <img src="./Leflet/gambar/Aljazair.png" width="150px" >');
const argentina = L.marker([-6.18563033090984, 106.82281199672191]).addTo(peta)
    .bindPopup('<center> Kedutaan Argentina   <br> <img src="./Leflet/gambar/Argentina.png" width="150px" >');
const armenia = L.marker([-6.229652533558714, 106.82993812370901]).addTo(peta)
    .bindPopup('<center> Kedutaan Armenia   <br> <img src="./Leflet/gambar/Armenia.png" width="150px" >');
const Australia = L.marker([-6.228300, 106.832630]).addTo(peta)
    .bindPopup('<center> Kedutaan Australia   <br> <img src="./Leflet/gambar/Australia.png" width="150px" >')
const Azerbaijan = L.marker([-6.226429996645838, 106.82954361225775]).addTo(peta)
    .bindPopup('<center> Kedutaan Azerbaijan   <br> <img src="./Leflet/gambar/Azerbaijan.png" width="150px" >');
const bangladesh = L.marker([-6.22549617713286, 106.8284663778844]).addTo(peta)
    .bindPopup('<center>Kedutaan Bangladesh <br> <img src="./Leflet/gambar/Bangladesh.png" width="150px" >');
const belgium = L.marker([-6.19551443160807, 106.82411029138432]).addTo(peta)
    .bindPopup('<center> Kedutaan Belgia <br> <img src="./Leflet/gambar/Belgia.png" width="150px" >');
const belarus = L.marker([-6.23499101490989, 106.83406064090013]).addTo(peta)
    .bindPopup('<center> Kedutaan Belarus <br> <img src="./Leflet/gambar/Belarus.png" width="150px" >');
const bosnia = L.marker([-6.2101095732272045, 106.83158202555778]).addTo(peta)
    .bindPopup('<center>Kedutaan Bosnia <br> <img src="./Leflet/gambar/Bosnia.png" width="150px" >');
const brazil = L.marker([-6.224067686862482, 106.81687734090002]).addTo(peta)
    .bindPopup('<center> Kedutaan Brazil <br> <img src="./Leflet/gambar/Brazil.png" width="150px" >');
const brunei = L.marker([-6.23384900662709, 106.83552161445542]).addTo(peta)
    .bindPopup('<center> Kedutaan Brunei Darussalam <br> <img src="./Leflet/gambar/Brunei.png" width="150px" >');
const bulgaria = L.marker([-6.198984270082919, 106.82771396788645]).addTo(peta)
    .bindPopup('<center>Kedutaan Bulgaria <br> <img src="./Leflet/gambar/Bulgaria.png" width="150px" >');
const kamboja = L.marker([-6.231021917352284, 106.83098362370905]).addTo(peta)
    .bindPopup('<center>Kedutaan Kamboja <br> <img src="./Leflet/gambar/Kamboja.png" width="150px" >');
const kanada = L.marker([-6.215049766606816, 106.82016448138]).addTo(peta)
    .bindPopup('<center>Kedutaan Kanada <br> <img src="./Leflet/gambar/Kanada.png" width="150px" >');
const chili = L.marker([-6.198999002286979, 106.82352145439312]).addTo(peta)
    .bindPopup('<center>Kedutaan Chili <br> <img src="./Leflet/gambar/chili.png" width="150px" >');
const rrc = L.marker([-6.22566729217355, 106.82557108692679]).addTo(peta)
    .bindPopup('<center>Kedutaan RRC <br> <img src="./Leflet/gambar/rrc.png" width="150px" >');
const kolombia = L.marker([-6.216741335292709, 106.81641783905113]).addTo(peta)
    .bindPopup('<center>Kedutaan Kolombia <br> <img src="./Leflet/gambar/kolombia.png" width="150px" >');
const kroasia = L.marker([-6.224147670747716, 106.81653853905114]).addTo(peta)
    .bindPopup('<center>Kedutaan Kroasia <br> <img src="./Leflet/gambar/kroasia.png" width="150px" >');
const kuba = L.marker([-6.217941538310288, 106.78823858322887]).addTo(peta)
    .bindPopup('<center>Kedutaan Kolombia <br> <img src="./Leflet/gambar/kolombia.png" width="150px" >');
const ceko = L.marker([-6.1910643959373095, 106.82785525451364]).addTo(peta)
    .bindPopup('<center>Kedutaan Ceko <br> <img src="./Leflet/gambar/ceko.png" width="150px" >');
const denmark = L.marker([-6.226890008484968, 106.8265954257634]).addTo(peta)
    .bindPopup('<center>Kedutaan Denmark <br> <img src="./Leflet/gambar/Denmark.png" width="150px" >');
const ekuador = L.marker([-6.2146386856536875, 106.82000127973826]).addTo(peta)
    .bindPopup('<center>Kedutaan Ekuador <br> <img src="./Leflet/gambar/Ekuador.png" width="150px" >');
const mesir = L.marker([3.1568554822853825, 101.74440136438841]).addTo(peta)
    .bindPopup('<center>Kedutaan Mesir <br> <img src="./Leflet/gambar/Mesir.png" width="150px" >');
const finlandia = L.marker([-6.226857935658995, 106.82612638581993]).addTo(peta)
    .bindPopup('<center>Kedutaan Finlandia <br> <img src="./Leflet/gambar/Finland.png" width="150px" >');
const prancis = L.marker([-6.188939005985676, 106.82342044904155]).addTo(peta)
    .bindPopup('<center>Kedutaan Prancis <br> <img src="./Leflet/gambar/prancis.png" width="150px" >');
const georgia = L.marker([-6.226271115096711, 106.82911843555718]).addTo(peta)
    .bindPopup('<center>Kedutaan Georgia <br> <img src="./Leflet/gambar/Georgia.png" width="150px" >');
const jerman = L.marker([-6.196634013230886, 106.82333327605899]).addTo(peta)
    .bindPopup('<center>Kedutaan Jerman <br> <img src="./Leflet/gambar/German.png" width="150px" >');
const yunani = L.marker([-6.217503634723891, 106.83072047435404]).addTo(peta)
    .bindPopup('<center>Kedutaan Yunani <br> <img src="./Leflet/gambar/yunani.png" width="150px" >');
    
    const kedutaanPusat = L.layerGroup([afganistan, argentina, belgium, brunei, bulgaria, chili, ceko, mesir, prancis, jerman]).addTo(peta);
    const kedutaanSelatan = L.layerGroup([aljazair, armenia, Australia, Azerbaijan, bangladesh, belarus, bosnia, brazil, kamboja, kanada, rrc, kolombia, kroasia, kuba, denmark, ekuador, finlandia, georgia, yunani ]).addTo(peta);

    const basemap = {
        "basemap": OSM
    }
    const wilayahKedutaanPusat = {
        "Daerah Jakarta Pusat": kedutaanPusat
    }
const wilayahKedutaanSelatan = {
    "Daerah Jakarta Selatan": kedutaanSelatan
};


L.control.layers( basemap, wilayahKedutaanPusat ).addTo(peta);
L.control.layers( basemap, wilayahKedutaanSelatan ).addTo(peta);

L.Control.Watermark = L.Control.extend({
    onAdd: function () {
        const img = L.DomUtil.create('img');
        img.src = "./Leflet/icon/geocourse_black.png";
        img.style.width = '200px';
        return img;
    },
    onRemove: function () { }
});

L.control.watermark = function (pilihan) {
    return new L.Control.Watermark(pilihan);
}

L.control.watermark({ position: 'bottomleft' }).addTo(peta)