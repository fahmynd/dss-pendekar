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
    constructor(props) {
        super();
        this.state = {
            resultData: props.resultData,
            zoom: 10
        };
    }

    render() {
        const { resultData, zoom } = this.state;
        const mergedArrays = resultData.data.list_desa.map((item) => ({
            provinsi: resultData.dss.provinsi,
            kabupaten: resultData.dss.kabkota,
            kecamatan: item.nama_kecamatan,
            deskel: item.nama_deskel,
            lat: item.lat,
            lng: item.lng,
            ar: item.capaian.ar,
            idm: item.capaian.idm,
            kd: item.capaian.kd,
            program: item.capaian.program,
            sdgs: item.capaian.sdgs,
            lk: item.potensi.lk,
            sarpras: item.potensi.sarpras,
            sda: item.potensi.sda,
            sdm: item.potensi.sdm

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
                                    <p className='text-capitalize'>Kec. {kecamatan}, {kabupaten}, Prov. {provinsi}</p>
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
