import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { BASE_API_URL } from "../../utils/api";
import { format_tgl } from "../../utils/helper.min";

const PengaduanTable = () => {
  const [listPengaduan, setListPengaduan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_API_URL}pengaduan/list`);
        const data = response.data.data.list_pengaduan;
        setListPengaduan(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const customStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: "#F1ECFF",
        borderRight: "1px solid #EDEDED",
        borderTop: "1px solid #EDEDED",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
        borderRight: "1px solid #EDEDED",
      },
    },
  };

  return (
    <div className="my-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DataTable
          columns={[
            {
              name: "No",
              selector: (row, index) => index + 1,
              width: "70px",
              style: {
                borderLeft: "1px solid #EDEDED",
              },
            },
            {
              name: "Tanggal",
              sortable: true,
              selector: (row) => format_tgl(row.tanggal_input),
            },
            {
              name: "Nama & Kontak",
              sortable: true,
              cell: (row) => (
                <div>
                  <p>{row.nama}<br/>{row.kontak}</p>
                </div>
              ),
            },
            {
              name: "Pengaduan",
              sortable: true,
              cell: (row) => (
                <div>
                  <b>[{row.jenis}]</b>
                  <p>{row.aduan}</p>
                </div>
              ),
            },
          ]}
          data={listPengaduan}
          customStyles={customStyles}
          pagination
        />
      )}
    </div>
  );
};

export default PengaduanTable;
