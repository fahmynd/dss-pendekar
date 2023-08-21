import React, { useState, Fragment } from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";


const getColorForValue = (value, property) => {
    const colorScales = {
        kd: ['#EEEEEE', '#96C4BC', '#327A6E'],
        idm: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#4E9387', '#327A6E'],
        sdgs: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        ar: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        program: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        sda: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        sdm: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        lk: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        sarpras: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
    };

    const thresholds = {
        kd: [1, 2, 3],
        idm: [0.491, 0.599, 0.707, 0.815, 1],
        sdgs: [10, 20, 30, 50, 80, 100],
        ar: [1, 3, 5, 8, 10, 20],
        program: [1, 3, 5, 8, 10, 20],
        sda: [1, 3, 5, 8, 10, 20],
        sdm: [100, 500, 1000, 3000, 5000, 10000],
        lk: [1, 3, 5, 8, 10, 20],
        sarpras: [1, 3, 5, 8, 10, 20],
    };

    const scale = colorScales[property];
    const thresholdArray = thresholds[property];

    if (scale && thresholdArray) {
        for (let i = 0; i < thresholdArray.length; i++) {
            if (value <= thresholdArray[i]) {
                return scale[i];
            }
        }
        return scale[scale.length - 1];
    }
    return '#EEEEEE';
};

const MapWithPolygons = (props) => {
    const [resultData] = useState(props.resultData);
    const [polygonCoordKab] = useState(props.resultData.data.list_kabupaten[0].map_polygon) || null;
    const [selectedOption, setSelectedOption] = useState('sdm');
    const polygonCoordKec = resultData.data.list_kecamatan.map((item) => ({
        polyKec: item.map_polygon
    }));
    const polygonCoordDesa = resultData.data.list_desa.map((item) => ({
        provinsi: resultData.dss.provinsi,
        kabupaten: resultData.dss.kabkota,
        kecamatan: item.nama_kecamatan,
        deskel: item.nama_deskel,
        link: item.slug_desa,
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

    const kabOptions = { color: 'white', fillColor: '#D4DCC2', weight: '2', fillOpacity: '1' }
    const kecOptions = { color: 'white', fillColor: '#D4DCC2', weight: '1', fillOpacity: '1' }
    const desaOptions = { color: 'white', fillColor: '#96C4BC', weight: '1', fillOpacity: '1' }

    const handleChangeOption = (option) => {
        setSelectedOption(option);
    };

    const generateLegend = () => {
        const colorScales = {
            kd: ['#EEEEEE', '#96C4BC', '#327A6E'],
            idm: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#4E9387', '#327A6E'],
            sdgs: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            ar: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            program: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            sda: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            sdm: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            lk: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
            sarpras: ['#EEEEEE', '#C2DCD8', '#96C4BC', '#6FABA1', '#4E9387', '#327A6E'],
        };
        const thresholds = {
            kd: ['SWASEMBADA', 'SWAKARYA', 'SWADAYA'],
            idm: ['SANGAT TERTINGGAL', 'TERTINGGAL', 'BERKEMBANG', 'MAJU', 'MANDIRI'],
            sdgs: ['< 10', '11 - 20', '21 - 30', '31 - 50', '51 - 80', '> 80'],
            ar: ['< 1', '2 - 3', '4 - 5', '6 - 8', '9 - 10', '> 10'],
            program: ['< 1', '2 - 3', '4 - 5', '6 - 8', '9 - 10', '> 10'],
            sda: ['< 1', '2 - 3', '4 - 5', '6 - 8', '9 - 10', '> 10'],
            sdm: ['< 100', '101 - 500', '501 - 1,000', '1,001 - 3,000', '3,001 - 5,000', '> 5,000'],
            lk: ['< 1', '2 - 3', '4 - 5', '6 - 8', '9 - 10', '> 10'],
            sarpras: ['< 1', '2 - 3', '4 - 5', '6 - 8', '9 - 10', '> 10'],
        };

        const colorScale = colorScales[selectedOption];
        const legendValues = thresholds[selectedOption];

        return (
            <div className="row g-0">
                <div className="col-sm-2 fw-bold my-2">Keterangan:</div>
                <div className='col-sm-10 mt-2'>
                    <div className='row'>
                        {legendValues.map((legend, index) => (
                            <div className="col-sm-4" key={index}>
                                <div className='row'>
                                    <p className="col-12">
                                        <i className="bi bi-square-fill" style={{ color: colorScale[index] }}></i> {legend}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Fragment>
            <div className="row g-1 mb-4">
                <div className="col-4">
                    <select
                        value={selectedOption}
                        onChange={(e) => handleChangeOption(e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option value="kd">[Capaian] Klasifikasi Desa</option>
                        <option value="idm">[Capaian] Indeks Desa Membangun</option>
                        <option value="sdgs">[Capaian] SDGs</option>
                        <option value="ar">[Capaian] AR</option>
                        <option value="program">[Capaian] Program</option>
                        <option value="sda">[Potensi] Sumber Daya Alam</option>
                        <option value="sdm">[Potensi] Sumber Daya Manusia</option>
                        <option value="lk">[Potensi] Lembaga Kemasyarakatan</option>
                        <option value="sarpras">[Potensi] Sarana & Prasarana</option>
                    </select>

                </div>
                <div className="col-3 d-none">
                    <button type="button" className="btn btn-cari"><i className="bi bi-search me-1"></i> Temukan</button>
                </div>
            </div>
            <MapContainer
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "500px" }}
                bounds={polygonCoordKab || [[-90, -180], [90, 180]]}
            // boundsOptions={{ padding: [1, 1] }}
            >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

                <Polygon positions={polygonCoordKab} pathOptions={kabOptions} />

                {polygonCoordKec.map(({ polyKec }, index) => {
                    return (
                        <Polygon key={index} positions={polyKec} pathOptions={kecOptions} />
                    )
                })}

                {polygonCoordDesa.map(({ polyDes, provinsi, kabupaten, kecamatan, deskel, link, kd, idm, sdgs, ar, program, sda, sdm, lk, sarpras }, index) => {
                    const capaianValue = selectedOption === 'kd' ? kd : selectedOption === 'idm' ? idm : selectedOption === 'sdgs' ? sdgs : selectedOption === 'ar' ? ar : selectedOption === 'program' ? program : selectedOption === 'sda' ? sda : selectedOption === 'sdm' ? sdm : selectedOption === 'lk' ? lk : selectedOption === 'sarpras' ? sarpras : 0;
                    const desaColor = getColorForValue(capaianValue, selectedOption);
                    const desaPathOptions = { ...desaOptions, fillColor: desaColor };
                    return (
                        <Polygon key={index} positions={polyDes} pathOptions={desaPathOptions}>
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
                                            <a href={`https://profil.digitaldesa.id/${link}`} target='_blank' rel='noreferrer'>
                                                <h5>
                                                    <span className="badge bg-cctv"><i className='bx bx-cctv'></i> CCTV</span>
                                                </h5>
                                            </a>
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

            {generateLegend()}

        </Fragment>
    );
};

export default MapWithPolygons;
