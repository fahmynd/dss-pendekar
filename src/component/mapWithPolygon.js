import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const MapWithPolygons = (props) => {
    const [resultData] = useState(props.resultData);

    const [polygonCoordKab] = useState(props.resultData.data.list_kabupaten[0].map_polygon);
    const polygonCoordKec = resultData.data.list_kecamatan.map((item) => ({
        polyKec: item.map_polygon
    }));
    const polygonCoordDesa = resultData.data.list_desa.map((item) => ({
        provinsi: resultData.dss.provinsi,
        kabupaten: resultData.dss.kabkota,
        kecamatan: item.nama_kecamatan,
        deskel: item.nama_deskel,
        ar: item.capaian.ar,
        idm: item.capaian.idm,
        kd: item.capaian.kd,
        program: item.capaian.program,
        sdgs: item.capaian.sdgs,
        lk: item.potensi.lk,
        sarpras: item.potensi.sarpras,
        sda: item.potensi.sda,
        sdm: item.potensi.sdm,
        polyDes: item.map_polygon
    }));

    const kabOptions = { color: '#EEEEEE', fillColor: '#73C897', weight: '3', fillOpacity: '1' }
    const kecOptions = { color: 'white', fillColor: 'white', weight: '1', fillOpacity: '0.4' }
    const desaOptions = { color: '#EEEEEE', fillColor: '#139A68', weight: '1', fillOpacity: '1' }

    return (
        <MapContainer
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "500px" }}
            bounds={polygonCoordKab}
            boundsOptions={{ padding: [1, 1] }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Polygon positions={polygonCoordKab} pathOptions={kabOptions} />

            {polygonCoordKec.map(({ polyKec }, index) => (
                <Polygon key={index} positions={polyKec} pathOptions={kecOptions} />
            ))}

            {polygonCoordDesa.map(({ polyDes, provinsi, kabupaten, kecamatan, deskel, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => (
                <Polygon key={index} positions={polyDes} pathOptions={desaOptions}>
                    <Tooltip sticky>
                        <div className='card-map p-3'>
                            <div className='card-body-map'>
                                <h5 className="card-title-potensi p-0" style={{ color: '#3B2D64' }}>Desa {deskel}</h5>
                                <p className='text-capitalize'>Kec. {kecamatan}, {kabupaten.toString().toLowerCase()}, Prov. {provinsi.toString().toLowerCase()}</p>
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
                                            <div className='col-6'>SDGs</div>
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
                                            <div className='col-6'>SDM</div>
                                            <div className='col-6'>: {sdm}</div>
                                            <div className='col-6'>LK</div>
                                            <div className='col-6'>: {lk}</div>
                                            <div className='col-6'>SarPras</div>
                                            <div className='col-6'>: {sarpras}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                </Polygon>
            ))}
        </MapContainer>
    );
};

export default MapWithPolygons;
