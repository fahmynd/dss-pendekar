import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import axios from 'axios';

const MarkerPeta = () => {
    const position = [-3.4590744, 119.8815203]
    const [lat, setLat] = useState([0]);
    const [lng, setLng] = useState([0]);

    const [prov, setProv] = useState();
    const [kab, setKab] = useState();
    const [kec, setKec] = useState([0]);
    const [desa, setDesa] = useState([0]);
    const [kd, setKd] = useState([0]);
    const [idm, setIdm] = useState([0]);
    const [sdgs, setSdgs] = useState([0]);
    const [ar, setAr] = useState([0]);
    const [program, setProgram] = useState([0]);
    const [sda, setSda] = useState([0]);
    const [sdm, setSdm] = useState([0]);
    const [lk, setLk] = useState([0]);
    const [sarpras, setSarpras] = useState([0]);

    const locations = [
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
        },
    ]

    useEffect(() => {
        // axios.get(BASE_API_URL)
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/')
            .then((result) => {
                // console.log(result.data.dss)
                const dss = result.data.dss;
                setProv(dss.provinsi)
                setKab(dss.kabkota)

                const [listdesa] = result.data.data.list_desa;
                setLat(listdesa.lat)
                setLng(listdesa.lng)
                setKec(listdesa.kecamatan)
                setDesa(listdesa.deskel)
                setKd(listdesa.capaian.kd)
                setIdm(listdesa.capaian.idm)
                setSdgs(listdesa.capaian.sdgs)
                setAr(listdesa.capaian.ar)
                setProgram(listdesa.capaian.program)
                setSda(listdesa.potensi.sda)
                setSdm(listdesa.potensi.sdm)
                setLk(listdesa.potensi.lk)
                setSarpras(listdesa.potensi.sarpras)

            })
    }, [])
    // console.log('[' + lat + ',' + ' ' + lng + ']')

    return (
        <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
            <Marker
                position={[-3.7485833, 119.8641634]}
                draggable={false}
                animate={true}
            >
                <Popup closeButton={false}>
                    <div className='card-map'>
                        <div className='card-body-map'>
                            <h5 className="card-title-potensi p-0" style={{ color: '#3B2D64' }}>Desa {desa}</h5>
                            <p className='text-capitalize'>Kec. {kec}, {kab}, Prov. {prov}</p>
                            <div className="filter-primary">
                                <h5>
                                    <span className="badge bg-verifikasi"><i className='bx bx-cctv'></i> CCTV</span>
                                </h5>
                            </div>
                            <div className='row'>
                                <div className='col-md'>
                                    <h5 className='fw-bold'>Capaian</h5>
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
                                <div className='col-md'>
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
        </MapContainer>
    )
}
export default MarkerPeta