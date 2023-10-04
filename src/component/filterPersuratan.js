import React, { useMemo, useState, Fragment } from "react";
import { BASE_API_URL } from "../utils/api";

const FilterPersuratan = (props) => {
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

  const surat = useMemo(() => {
    let hari_ini = 0;
    let minggu_ini = 0;
    let bulan_ini = 0;
    let tahun_ini = 0;

    if (selectedKec && selectedDesa) {
      const deskel = listDesa.find((d) => d.kode_wilayah === selectedDesa);
      if (deskel) {
        hari_ini = parseInt(deskel.hari_ini);
        minggu_ini = parseInt(deskel.minggu_ini);
        bulan_ini = parseInt(deskel.bulan_ini);
        tahun_ini = parseInt(deskel.tahun_ini);
      }
    } else {
      if (selectedKec) {
        listDesa.forEach((desa) => {
          hari_ini += parseInt(desa.hari_ini);
          minggu_ini += parseInt(desa.minggu_ini);
          bulan_ini += parseInt(desa.bulan_ini);
          tahun_ini += parseInt(desa.tahun_ini);
        });
      } else {
        list_desa.forEach((d) => {
          hari_ini += parseInt(d.hari_ini);
          minggu_ini += parseInt(d.minggu_ini);
          bulan_ini += parseInt(d.bulan_ini);
          tahun_ini += parseInt(d.tahun_ini);
        });
      }
    }

    return {
      hari_ini,
      minggu_ini,
      bulan_ini,
      tahun_ini,
    };
  }, [list_desa, selectedKec, listDesa, selectedDesa]);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          <div className="filter-primary">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.open(`${BASE_API_URL}export/rekap_bansos`)}
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
          <div className="row g-md-0">
            <div className="col-md-3">
              <div className="keuangan-card">
                <div className="card-body-persuratan">
                  <h6>Hari ini</h6>
                  <h5 className="fw-bold">{surat.hari_ini} Surat</h5>
                  <div className="d-none progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      100%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="keuangan-card">
                <div className="card-body-persuratan">
                  <h6>Minggu ini</h6>
                  <h5 className="fw-bold">{surat.minggu_ini} Surat</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="keuangan-card">
                <div className="card-body-persuratan">
                  <h6>Bulan ini</h6>
                  <h5 className="fw-bold">{surat.bulan_ini} Surat</h5>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="keuangan-card">
                <div className="card-body-persuratan">
                  <h6>Tahun ini</h6>
                  <h5 className="fw-bold">{surat.tahun_ini} Surat</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterPersuratan;
