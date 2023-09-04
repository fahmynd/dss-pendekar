import React, { useMemo, useState, Fragment } from "react";
import { BASE_API_URL } from "../utils/api";

const FilterAdministrasi = (props) => {
  const { list_kecamatan, list_desa } = props.resultData.data;

  const [selectedKec, setSelectedKec] = useState("");
  const [selectedDesa, setSelectedDesa] = useState("");

  const listDesa = useMemo(() => {
    setSelectedDesa("");
    if (selectedKec) {
      return list_desa.filter((d) => {
        return d.kode_wilayah.startsWith(selectedKec);
      });
    }
    return [];
  }, [list_desa, selectedKec]);

  const adm = useMemo(() => {
    let buku_peraturan_di_desa = 0;
    let buku_peraturan_di_desa_add = 0;
    let buku_keputusan_kepala_desa = 0;
    let buku_keputusan_kepala_desa_add = 0;
    let buku_inventaris_dan_kekayaan_desa = 0;
    let buku_inventaris_dan_kekayaan_desa_add = 0;
    let buku_aparat_pemerintah_desa = 0;
    let buku_aparat_pemerintah_desa_add = 0;
    let buku_tanah_kas_desa = 0;
    let buku_tanah_kas_desa_add = 0;
    let buku_tanah_di_desa = 0;
    let buku_tanah_di_desa_add = 0;
    let buku_agenda = 0;
    let buku_agenda_add = 0;
    let buku_ekspedisi = 0;
    let buku_ekspedisi_add = 0;
    let buku_lembaran_desa_dan_berita_desa = 0;
    let buku_lembaran_desa_dan_berita_desa_add = 0;

    if (selectedKec && selectedDesa) {
      const deskel = listDesa.find((d) => d.kode_wilayah === selectedDesa);
      if (deskel) {
        buku_peraturan_di_desa = parseInt(deskel.buku_peraturan_di_desa);
        buku_peraturan_di_desa_add = parseInt(
          deskel.buku_peraturan_di_desa_add
        );
        buku_keputusan_kepala_desa = parseInt(
          deskel.buku_keputusan_kepala_desa
        );
        buku_keputusan_kepala_desa_add = parseInt(
          deskel.buku_keputusan_kepala_desa_add
        );
        buku_inventaris_dan_kekayaan_desa = parseInt(
          deskel.buku_inventaris_dan_kekayaan_desa
        );
        buku_inventaris_dan_kekayaan_desa_add = parseInt(
          deskel.buku_inventaris_dan_kekayaan_desa_add
        );
        buku_aparat_pemerintah_desa = parseInt(
          deskel.buku_aparat_pemerintah_desa
        );
        buku_aparat_pemerintah_desa_add = parseInt(
          deskel.buku_aparat_pemerintah_desa_add
        );
        buku_tanah_kas_desa = parseInt(deskel.buku_tanah_kas_desa);
        buku_tanah_kas_desa_add = parseInt(deskel.buku_tanah_kas_desa_add);
        buku_tanah_di_desa = parseInt(deskel.buku_tanah_di_desa);
        buku_tanah_di_desa_add = parseInt(deskel.buku_tanah_di_desa_add);
        buku_agenda = parseInt(deskel.buku_agenda);
        buku_agenda_add = parseInt(deskel.buku_agenda_add);
        buku_ekspedisi = parseInt(deskel.buku_ekspedisi);
        buku_ekspedisi_add = parseInt(deskel.buku_ekspedisi_add);
        buku_lembaran_desa_dan_berita_desa = parseInt(
          deskel.buku_lembaran_desa_dan_berita_desa
        );
        buku_lembaran_desa_dan_berita_desa_add = parseInt(
          deskel.buku_lembaran_desa_dan_berita_desa_add
        );
      }
    } else {
      if (selectedKec) {
        listDesa.forEach((desa) => {
          buku_peraturan_di_desa += parseInt(desa.buku_peraturan_di_desa);
          buku_peraturan_di_desa_add += parseInt(
            desa.buku_peraturan_di_desa_add
          );
          buku_keputusan_kepala_desa += parseInt(
            desa.buku_keputusan_kepala_desa
          );
          buku_keputusan_kepala_desa_add += parseInt(
            desa.buku_keputusan_kepala_desa_add
          );
          buku_inventaris_dan_kekayaan_desa += parseInt(
            desa.buku_inventaris_dan_kekayaan_desa
          );
          buku_inventaris_dan_kekayaan_desa_add += parseInt(
            desa.buku_inventaris_dan_kekayaan_desa_add
          );
          buku_aparat_pemerintah_desa += parseInt(
            desa.buku_aparat_pemerintah_desa
          );
          buku_aparat_pemerintah_desa_add += parseInt(
            desa.buku_aparat_pemerintah_desa_add
          );
          buku_tanah_kas_desa += parseInt(desa.buku_tanah_kas_desa);
          buku_tanah_kas_desa_add += parseInt(desa.buku_tanah_kas_desa_add);
          buku_tanah_di_desa += parseInt(desa.buku_tanah_di_desa);
          buku_tanah_di_desa_add += parseInt(desa.buku_tanah_di_desa_add);
          buku_agenda += parseInt(desa.buku_agenda);
          buku_agenda_add += parseInt(desa.buku_agenda_add);
          buku_ekspedisi += parseInt(desa.buku_ekspedisi);
          buku_ekspedisi_add += parseInt(desa.buku_ekspedisi_add);
          buku_lembaran_desa_dan_berita_desa += parseInt(
            desa.buku_lembaran_desa_dan_berita_desa
          );
          buku_lembaran_desa_dan_berita_desa_add += parseInt(
            desa.buku_lembaran_desa_dan_berita_desa_add
          );
        });
      } else {
        list_desa.forEach((d) => {
          buku_peraturan_di_desa += parseInt(d.buku_peraturan_di_desa);
          buku_peraturan_di_desa_add += parseInt(d.buku_peraturan_di_desa_add);
          buku_keputusan_kepala_desa += parseInt(d.buku_keputusan_kepala_desa);
          buku_keputusan_kepala_desa_add += parseInt(
            d.buku_keputusan_kepala_desa_add
          );
          buku_inventaris_dan_kekayaan_desa += parseInt(
            d.buku_inventaris_dan_kekayaan_desa
          );
          buku_inventaris_dan_kekayaan_desa_add += parseInt(
            d.buku_inventaris_dan_kekayaan_desa_add
          );
          buku_aparat_pemerintah_desa += parseInt(
            d.buku_aparat_pemerintah_desa
          );
          buku_aparat_pemerintah_desa_add += parseInt(
            d.buku_aparat_pemerintah_desa_add
          );
          buku_tanah_kas_desa += parseInt(d.buku_tanah_kas_desa);
          buku_tanah_kas_desa_add += parseInt(d.buku_tanah_kas_desa_add);
          buku_tanah_di_desa += parseInt(d.buku_tanah_di_desa);
          buku_tanah_di_desa_add += parseInt(d.buku_tanah_di_desa_add);
          buku_agenda += parseInt(d.buku_agenda);
          buku_agenda_add += parseInt(d.buku_agenda_add);
          buku_ekspedisi += parseInt(d.buku_ekspedisi);
          buku_ekspedisi_add += parseInt(d.buku_ekspedisi_add);
          buku_lembaran_desa_dan_berita_desa += parseInt(
            d.buku_lembaran_desa_dan_berita_desa
          );
          buku_lembaran_desa_dan_berita_desa_add += parseInt(
            d.buku_lembaran_desa_dan_berita_desa_add
          );
        });
      }
    }

    return {
      buku_peraturan_di_desa,
      buku_peraturan_di_desa_add,
      buku_keputusan_kepala_desa,
      buku_keputusan_kepala_desa_add,
      buku_inventaris_dan_kekayaan_desa,
      buku_inventaris_dan_kekayaan_desa_add,
      buku_aparat_pemerintah_desa,
      buku_aparat_pemerintah_desa_add,
      buku_tanah_kas_desa,
      buku_tanah_kas_desa_add,
      buku_tanah_di_desa,
      buku_tanah_di_desa_add,
      buku_agenda,
      buku_agenda_add,
      buku_ekspedisi,
      buku_ekspedisi_add,
      buku_lembaran_desa_dan_berita_desa,
      buku_lembaran_desa_dan_berita_desa_add,
    };
  }, [listDesa, selectedDesa]);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="filter-primary">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                window.open(`${BASE_API_URL}export/administrasi_umum_summary`)
              }
            >
              Export Report
            </button>
          </div>
          <div className="row g-1 my-4">
            <div className="col-3">
              <select
                onChange={(e) => setSelectedKec(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value={""}>Semua Kecamatan</option>
                {list_kecamatan.map((item) => {
                  return (
                    <option
                      key={item.kode_wilayah}
                      value={item.kode_wilayah}
                      selected={selectedKec === item.kode_wilayah}
                    >
                      {item.nama_kecamatan}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-3">
              <select
                onChange={(e) => setSelectedDesa(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value={""}>Semua Desa</option>
                {listDesa.map((item) => {
                  return (
                    <option
                      key={item.kode_wilayah}
                      value={item.kode_wilayah}
                      selected={selectedDesa === item.kode_wilayah}
                    >
                      {item.nama_deskel}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-file-text-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Peraturan Desa</span>
                      <h6>{adm.buku_peraturan_di_desa}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_peraturan_di_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-user-2-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">
                        Keputusan Kepala Desa
                      </span>
                      <h6>{adm.buku_keputusan_kepala_desa}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_keputusan_kepala_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-folders-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Inventaris Desa</span>
                      <h6>{adm.buku_inventaris_dan_kekayaan_desa}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_inventaris_dan_kekayaan_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bx bxs-home"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">
                        Aparat Pemerintah Desa
                      </span>
                      <h6>{adm.buku_aparat_pemerintah_desa}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_aparat_pemerintah_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-none">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-file-text-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Buku Agenda</span>
                      <h6>{adm.buku_agenda}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_agenda_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-none">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-file-list-3-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Surat Ekspedisi</span>
                      <h6>{adm.buku_ekspedisi}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_ekspedisi_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-file-paper-2-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">
                        Lembaran & Berita Desa
                      </span>
                      <h6>{adm.buku_lembaran_desa_dan_berita_desa}</h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_lembaran_desa_dan_berita_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-map-2-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Tanah Kas Desa</span>
                      <h6>
                        {adm.buku_tanah_kas_desa}m<sup>2</sup>
                      </h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_tanah_kas_desa_add}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card sales-card">
                <div className="card-body-info">
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ri-road-map-fill"></i>
                    </div>
                    <div className="ps-2">
                      <span className="text-muted pt-2">Luas Tanah Desa</span>
                      <h6>
                        {adm.buku_tanah_di_desa}m<sup>2</sup>
                      </h6>
                    </div>
                    <div className="adm-umum small">
                      +{adm.buku_tanah_di_desa}/Minggu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterAdministrasi;
