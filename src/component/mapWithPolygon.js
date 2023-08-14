import React, { useState, Fragment } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const getColorForValue = (value) => {
    if (value < 100) {
        return '#00DCB8';
    } else if (value >= 101 && value <= 500) {
        return '#C2DCD8';
    } else if (value >= 501 && value <= 1000) {
        return '#96C4BC';
    } else if (value >= 1001 && value <= 5000) {
        return '#6FABA1';
    } else if (value >= 5001 && value <= 10000) {
        return '#4E9387';
    } else if (value > 10000) {
        return '#327A6E';
    }
    return '#EEEEEE'; // Default color
};

const MapWithPolygons = (props) => {
    const [resultData] = useState(props.resultData);
    const [polygonCenter] = useState(props.resultData.data.list_kabupaten[0].map_polygon) || null;
    const polygonCoordKab = resultData.data.list_kabupaten.map((item) => ({
        provinsi: resultData.dss.provinsi,
        kabupaten: resultData.dss.kabkota,
        ar: item.capaian.ar,
        idm: item.capaian.idm,
        kd: item.capaian.kd,
        program: item.capaian.program,
        sdgs: item.capaian.sdgs,
        lk: item.potensi.lk,
        sarpras: item.potensi.sarpras,
        sda: item.potensi.sda,
        sdm: item.potensi.sdm,
        polyKab: item.map_polygon
    }));
    const polygonCoordKec = resultData.data.list_kecamatan.map((item) => ({
        provinsi: resultData.dss.provinsi,
        kabupaten: resultData.dss.kabkota,
        kecamatan: item.nama_kecamatan,
        ar: item.capaian.ar,
        idm: item.capaian.idm,
        kd: item.capaian.kd,
        program: item.capaian.program,
        sdgs: item.capaian.sdgs,
        lk: item.potensi.lk,
        sarpras: item.potensi.sarpras,
        sda: item.potensi.sda,
        sdm: item.potensi.sdm,
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

    const kabOptions = { color: '#EEEEEE', fillColor: '#00DCB8', weight: '2', fillOpacity: '1' }
    const kecOptions = { color: '#EEEEEE', fillColor: '#C2DCD8', weight: '1', fillOpacity: '1' }
    const desaOptions = { color: '#EEEEEE', fillColor: '#96C4BC', weight: '1', fillOpacity: '1' }

    return (
        <Fragment>
            <div className="row g-1 mb-4 d-none">
                <div className="col-3">
                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                        <option value={'DEFAULT'}>Capaian & Potensi</option>
                        <option value="1">KD</option>
                        <option value="2">SDGS</option>
                        <option value="3">AR</option>
                    </select>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-cari"><i className="bi bi-search me-1"></i> Temukan</button>
                </div>
            </div>
            <MapContainer
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "500px" }}
                bounds={polygonCenter || [[-90, -180], [90, 180]]}
                boundsOptions={{ padding: [1, 1] }}
            >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

                {polygonCoordKab.map(({ polyKab, provinsi, kabupaten, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => {
                    const color = getColorForValue(sdm);
                    const pathOptions = { ...kabOptions, fillColor: color };

                    return (
                        <Polygon key={index} positions={polyKab} pathOptions={pathOptions}>
                            <Popup closeButton={false}>
                                <div className='card-map'>
                                    <div className='card-body-map'>
                                        <h5 className="card-title-potensi p-0" style={{ color: '#3B2D64' }}>{kabupaten}</h5>
                                        <p className='text-capitalize'>Provinsi {provinsi.toString().toLowerCase()}</p>
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
                            </Popup>
                        </Polygon>
                    )
                })}

                {polygonCoordKec.map(({ polyKec, provinsi, kabupaten, kecamatan, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => {
                    const color = getColorForValue(sdm);
                    const pathOptions = { ...kecOptions, fillColor: color };

                    return (
                        <Polygon key={index} positions={polyKec} pathOptions={pathOptions}>
                            <Popup closeButton={false}>
                                <div className='card-map'>
                                    <div className='card-body-map'>
                                        <h5 className="card-title-potensi p-0" style={{ color: '#3B2D64' }}>Kecamatan {kecamatan}</h5>
                                        <p className='text-capitalize'>{kabupaten.toString().toLowerCase()}, Prov. {provinsi.toString().toLowerCase()}</p>
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
                            </Popup>
                        </Polygon>
                    )
                })}

                {polygonCoordDesa.map(({ polyDes, provinsi, kabupaten, kecamatan, deskel, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => {
                    const color = getColorForValue(sdm);
                    const pathOptions = { ...desaOptions, fillColor: color };
                    return (
                        <Polygon key={index} positions={polyDes} pathOptions={pathOptions}>
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
                            <Popup closeButton={false}>
                                <div className='card-map'>
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
                            </Popup>
                        </Polygon>
                    )
                })}
            </MapContainer>

            <br />

            <div className="row g-0">
                <div className="col-sm-2 fw-bold">Keterangan:</div>
                <div className="col-sm-3">
                    <div className="row">
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#00DCB8' }}></i> &lt; 100</p>
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#6FABA1' }}></i> 1.001 - 5.000</p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#C2DCD8' }}></i> 101 - 500</p>
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#4E9387' }}></i> 5.001 - 10.000</p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="row">
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#96C4BC' }}></i> 501 - 1.000</p>
                        <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#327A6E' }}></i> &gt; 10.000</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MapWithPolygons;
