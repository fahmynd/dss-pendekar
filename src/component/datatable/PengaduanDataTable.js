import React, { useMemo, useState, Fragment } from "react";
import DataTable from "react-data-table-component";

const PengaduanTable = props => {
	const { list_kecamatan, list_desa } = props.resultData;

	const [selectedKec, setSelectedKec] = useState("");
	const [selectedDesa, setSelectedDesa] = useState("");
	const [query, setQuery] = useState("");

	const listDeskel = useMemo(() => {
		setSelectedDesa("");
		return list_desa.filter(desa => {
			let kode_kec = `${desa.k1}.${desa.k2
				.toString()
				.padStart(2, "0")}.${desa.k3.toString().padStart(2, "0")}`;
			return kode_kec === selectedKec;
		});
	}, [list_desa, selectedKec]);

	const listKec = useMemo(() => {
		return list_kecamatan;
	}, [list_kecamatan]);

	const rows = useMemo(() => {
		const deskel = list_desa.filter(desa => {
			if (query !== "") {
				if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
					return true;
				} else {
					return false;
				}
			}
			if (selectedKec && selectedDesa) {
				return desa.kode_wilayah === selectedDesa;
			} else if (selectedKec) {
				let kode_kec = `${desa.k1}.${desa.k2
					.toString()
					.padStart(2, "0")}.${desa.k3.toString().padStart(2, "0")}`;
				return kode_kec === selectedKec;
			} else {
				return true;
			}
		});

		return deskel;
	}, [list_desa, query, selectedKec, selectedDesa]);

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
						selector: row => row.nama_kecamatan,
					},
					{
						name: "Nama & Kontak",
						sortable: true,
						selector: row => row.nama_deskel,
					},
					{
						name: "Pengaduan",
						sortable: true,
						selector: row => row.nama_deskel,
					},
				]}
				data={rows}
				customStyles={customStyles}
				pagination
			/>
		</div>
	);
};

export default PengaduanTable;
