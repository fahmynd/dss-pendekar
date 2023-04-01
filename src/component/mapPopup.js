import React from "react";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            coords: [
                { lat: -3.7485833, lng: 119.8641634 },
                { lat: -3.7885159, lng: 119.8699493 },
                { lat: -3.7196821, lng: 119.9220112 }
            ],
            popUPs: [
                {
                    "provinsi": "Sulawesi Selatan",
                    "kabupaten": "Enrekang",
                    "kecamatan": "Maiwa",
                    "deskel": "Bangkala",
                    "kd": 0,
                    "idm": 0,
                    "sdgs": 46.23,
                    "ar": 0,
                    "program": 21,
                    "sda": 3,
                    "sdm": 4335,
                    "lk": 7,
                    "sarpras": 4,
                    "position": [-3.7485833, 119.8641634]
                },
                {
                    "provinsi": "Sulawesi Selatan",
                    "kabupaten": "Enrekang",
                    "kecamatan": "Maiwa",
                    "deskel": "Patondon Salu",
                    "kd": 0,
                    "idm": 0.7229,
                    "sdgs": 46.23,
                    "ar": 0,
                    "program": 21,
                    "sda": 3,
                    "sdm": 2695,
                    "lk": 7,
                    "sarpras": 4,
                    "position": [-3.7885159, 119.8699493]
                },
                {
                    "provinsi": "Sulawesi Selatan",
                    "kabupaten": "Enrekang",
                    "kecamatan": "Maiwa",
                    "deskel": "Tuncung",
                    "kd": 0,
                    "idm": 0.6224,
                    "sdgs": 46.23,
                    "ar": 0,
                    "program": 21,
                    "sda": 3,
                    "sdm": 1527,
                    "lk": 7,
                    "sarpras": 4,
                    "position": [-3.7196821, 119.9220112]
                }
            ],
            zoom: 10
        };
    }

    render() {
        const { coords, popUPs, zoom } = this.state;
        const mergedArrays = coords.map((coord, i) => ({
            ...coord,
            provinsi: popUPs[i].provinsi,
            kabupaten: popUPs[i].kabupaten,
            kecamatan: popUPs[i].kecamatan,
            deskel: popUPs[i].deskel,
            kd: popUPs[i].kd,
            idm: popUPs[i].idm,
            sdgs: popUPs[i].sdgs,
            ar: popUPs[i].ar,
            program: popUPs[i].program,
            sda: popUPs[i].sda,
            sdm: popUPs[i].sdm,
            lk: popUPs[i].lk,
            sarpras: popUPs[i].sarpras
        }));

        return (
            <LeafletMap
                center={[-3.4590744, 119.8815203]}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "500px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

                {mergedArrays.map(({ lat, lng, provinsi, kabupaten, kecamatan, deskel, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => (
                    <Marker position={[lat, lng]} icon={customMarker} key={index}>
                        <Popup closeButton={false}>
                            <div className='card-map'>
                                <div className='card-body-map'>
                                    <h5 className="card-title-potensi p-0" style={{ color: '#3B2D64' }}>Desa {deskel}</h5>
                                    <p className='text-capitalize'>Kec. {kecamatan}, Kab. {kabupaten}, Prov. {provinsi}</p>
                                    <div className="filter-primary">
                                        <h5>
                                            <span className="badge bg-verifikasi"><i className='bx bx-cctv'></i> CCTV</span>
                                        </h5>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md fw-bold'>
                                            <h5 className="fw-bold">Capaian</h5>
                                            <div className='row g-2'>
                                                <div className='col-6'>KD</div>
                                                <div className='col-6'>: {kd}</div>
                                                <div className='col-6'>IDM</div>
                                                <div className='col-6'>: {idm}</div>
                                                <div className='col-6'>SDGS</div>
                                                <div className='col-6'>: {sdgs}</div>
                                                <div className='col-6'>AR</div>
                                                <div className='col-6'>: {ar}</div>
                                                <div className='col-6'>Program</div>
                                                <div className='col-6'>: {program}</div>
                                            </div>
                                        </div>
                                        <div className='col-md fw-bold'>
                                            <h5 className='fw-bold'>Potensi</h5>
                                            <div className='row g-2'>
                                                <div className='col-6'>SDA</div>
                                                <div className='col-6'>: {sda}</div>
                                                <div className='col-6'>IDM</div>
                                                <div className='col-6'>: {idm}</div>
                                                <div className='col-6'>SDM</div>
                                                <div className='col-6'>: {sdm}</div>
                                                <div className='col-6'>LK</div>
                                                <div className='col-6'>: {lk}</div>
                                                <div className='col-6'>Sarana Prasarana</div>
                                                <div className='col-6'>: {sarpras}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </LeafletMap>
        );
    }
}

export default Map;
