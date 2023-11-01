import React, { useMemo, useState, Fragment } from "react";
import DataTable from "react-data-table-component";
import { tgl_indo } from "../../utils/helper.min";

const PersuratanTable = props => {
	const { list_kecamatan, list_desa, jenis_surat, list_surat } =
		props.resultData.data;

	const [selectedKec, setSelectedKec] = useState("");
	const [selectedDesa, setSelectedDesa] = useState("");
	const [selectedJenisSurat, setSelectedJenisSurat] = useState("");
	const [query, setQuery] = useState("");

	const listDeskel = useMemo(() => {
		setSelectedDesa("");
		return list_desa.filter(desa => {
			let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`;
			return kode_kec === selectedKec;
		});
	}, [list_desa, selectedKec]);

	const listKec = useMemo(() => {
		return list_kecamatan;
	}, [list_kecamatan]);

	const rows = useMemo(() => {
		const filteredRows = list_surat
			.filter(surat => {
				if (query && query !== "") {
					return surat.nama_deskel.toLowerCase().includes(query.toLowerCase());
				}
				if (selectedKec && selectedDesa) {
						return `${surat.k1}.${surat.k2}.${surat.k3}.${surat.k4}` === selectedDesa;
				}
				if (selectedKec && !selectedDesa) {
					let kode_kec = `${surat.k1}.${surat.k2}.${surat.k3}`;
					return kode_kec === selectedKec;
				}
				if (selectedJenisSurat && selectedJenisSurat !== "") {
					return surat.jenis_surat === selectedJenisSurat;
				}
				return true;
			})
			.map(surat => {
				const kecamatan = listKec.find(
					kec => kec.kode_wilayah === `${surat.k1}.${surat.k2}.${surat.k3}`
				);
				const desa = list_desa.find(
					des => des.kode_wilayah === surat.kode_wilayah
				);

				return {
					nama_kecamatan: kecamatan ? kecamatan.nama_kecamatan : "",
					nama_deskel: desa ? desa.nama_deskel : "",
					tanggal_input: tgl_indo(surat.tanggal_input),
					jenis_surat: surat.jenis_surat,
					nomor_surat: surat.nomor_surat,
					is_andi: surat.is_andi,
				};
			});

		return filteredRows;
	}, [
		selectedJenisSurat,
		selectedKec,
		selectedDesa,
		query,
		list_desa,
		listKec,
		list_surat,
	]);

	const customStyles = {
		headCells: {
			style: {
				fontSize: "15px",
				fontWeight: "bold",
				backgroundColor: "#F1ECFF",
				borderRight: "1px solid #EDEDED",
				borderTop: "1px solid #EDEDED",
				wordWrap: "break-word",
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
		<Fragment>
			<div className="row g-1 my-4">
				<div className="col-3">
					<select
						value={selectedJenisSurat}
						onChange={e => setSelectedJenisSurat(e.target.value)}
						className="form-select"
						aria-label="Filter Jenis Surat"
					>
						<option value={""}>Semua Jenis Surat</option>
						{jenis_surat.map(item => (
							<option key={item.id} value={item.title}>
								{item.title}
							</option>
						))}
					</select>
				</div>
				<div className="col-3">
					<select
						value={selectedKec}
						onChange={e => setSelectedKec(e.target.value)}
						className="form-select"
						aria-label="Filter by Kecamatan"
					>
						<option value={""}>Semua Kecamatan</option>
						{listKec.map(item => (
							<option key={item.kode_wilayah} value={item.kode_wilayah}>
								{item.nama_kecamatan}
							</option>
						))}
					</select>
				</div>

				<div className="col-3">
					<select
						value={selectedDesa}
						onChange={e => setSelectedDesa(e.target.value)}
						className="form-select"
						aria-label="Filter by Desa"
					>
						<option value={""}>Semua Desa</option>
						{listDeskel.map(item => (
							<option key={item.kode_wilayah} value={item.kode_wilayah}>
								{item.nama_deskel}
							</option>
						))}
					</select>
				</div>
				<div className="col-3">
					<div className="search-produk">
						<form className="search-form-produk d-flex align-items-center">
							<input
								value={query}
								onChange={e => setQuery(e.target.value)}
								type="text"
								name="query"
								placeholder="Cari Desa/Kelurahan..."
								title="Enter search keyword"
							/>
							<button type="submit" title="Search" disabled>
								<i className="bi bi-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
			<DataTable
				columns={[
					{
						name: "No",
						selector: (row, index) => index + 1,
						width: "60px",
						style: {
							borderLeft: "1px solid #EDEDED",
						},
					},
					{
						name: "Kecamatan",
						sortable: true,
						selector: row => row.nama_kecamatan,
						width: "180px",
						wrap: true,
					},
					{
						name: "Desa",
						sortable: true,
						selector: row => row.nama_deskel,
						width: "180px",
						wrap: true,
					},
					{
						name: "Tanggal Input",
						sortable: true,
						selector: row => row.tanggal_input,
						width: "180px",
						wrap: true,
					},
					{
						name: "Jenis Surat",
						sortable: true,
						selector: row => row.jenis_surat,
						width: "180px",
						wrap: true,
					},
					{
						name: "Nomor Surat",
						sortable: true,
						selector: row => row.nomor_surat,
						width: "180px",
						wrap: true,
					},
					{
						name: "Andi Smart",
						sortable: true,
						selector: row => row.is_andi,
						width: "180px",
						wrap: true,
					},
				]}
				data={rows}
				customStyles={customStyles}
				pagination
			/>
		</Fragment>
	);
};

export default PersuratanTable;
