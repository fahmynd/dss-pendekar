import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { BASE_API_URL } from "../../utils/api";

export default function UmkmPagination(props) {
	const { list_kecamatan, list_desa } = props.resultData;
	let { list_umkm } = props.resultData;
	let { jenis_umkm } = props.resultData;

	const [loading, setLoading] = useState(true);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	const [selectedJenisUmkm, setSelectedJenisUmkm] = useState("");

	const [selectedKec, setSelectedKec] = useState("");
	const [selectedDesa, setSelectedDesa] = useState("");
	const [query, setQuery] = useState("");

	const jenisUmkm = useMemo(() => {
		return jenis_umkm;
	}, [jenis_umkm]);

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

	const filteredUmkm = useMemo(() => {
		const filtered = list_umkm.filter(umkm => {
			// Filter berdasarkan query
			const isMatchByQuery =
				!query || umkm.nama_usaha.toLowerCase().includes(query.toLowerCase());

			// Filter berdasarkan jenis umkm
			const isMatchByJenisUmkm =
				!selectedJenisUmkm || umkm.tipe_usaha === selectedJenisUmkm;

			// Filter berdasarkan kecamatan dan desa
			let isMatchByWilayah;

			if (selectedKec && selectedDesa) {
				isMatchByWilayah = umkm.kode_wilayah === selectedDesa;
			} else if (selectedKec && !selectedDesa) {
				let kode_kec = `${umkm.k1}.${umkm.k2}.${umkm.k3
					.toString()
					.padStart(2, "0")}`;
console.log(kode_kec);
				isMatchByWilayah = kode_kec === selectedKec;
			} else if (!selectedKec && !selectedDesa) {
				isMatchByWilayah = true;
			}

			// Gabungkan semua filter
			return isMatchByQuery && isMatchByJenisUmkm && isMatchByWilayah;
		});

		setPageCount(Math.ceil(filtered.length / itemsPerPage));
		return filtered;
	}, [
		selectedJenisUmkm,
		selectedKec,
		selectedDesa,
		query,
		list_umkm,
		itemsPerPage,
	]);

	useEffect(() => {
		setItemOffset(0);
	}, [selectedJenisUmkm, selectedKec, selectedDesa, query, filteredUmkm]);

	useEffect(() => {
		setLoading(true);
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(filteredUmkm.slice(itemOffset, endOffset));

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [itemOffset, itemsPerPage, filteredUmkm]);

	const handlePageClick = event => {
		const newOffset = event.selected * itemsPerPage;
		setItemOffset(newOffset);
	};
	// console.log(selectedJenisUmkm);

	return (
		<Fragment>
			<div className="row g-1 mb-4">
				<div className="col">
					<div className="search-produk">
						<form className="search-form-produk d-flex align-items-center">
							<input
								value={query}
								onChange={e => setQuery(e.target.value)}
								type="text"
								name="query"
								placeholder="Cari Produk..."
								title="Enter search keyword"
							/>
							<button type="submit" title="Search" disabled>
								<i className="bi bi-search"></i>
							</button>
						</form>
					</div>
				</div>
				<div className="col">
					<select
						value={selectedJenisUmkm}
						onChange={e => setSelectedJenisUmkm(e.target.value)}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={""}>Semua Jenis UMKM</option>
						{Object.values(jenisUmkm).map(value => (
							<option key={value} value={value}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="col">
					<select
						value={selectedKec}
						onChange={e => setSelectedKec(e.target.value)}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={""}>Semua Kecamatan</option>
						{listKec.map(item => (
							<option key={item.kode_wilayah} value={item.kode_wilayah}>
								{item.nama_kecamatan}
							</option>
						))}
					</select>
				</div>
				<div className="col">
					<select
						value={selectedDesa}
						onChange={e => setSelectedDesa(e.target.value)}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={""}>Semua Desa</option>
						{listDeskel.map(item => (
							<option key={item.kode_wilayah} value={item.kode_wilayah}>
								{item.nama_deskel}
							</option>
						))}
					</select>
				</div>
				<div className="col d-none">
					<select
						defaultValue={"DEFAULT"}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={"DEFAULT"}>Jenis Usaha</option>
					</select>
				</div>
				<div className="col-2 text-end">
					<button
						type="button"
						className="btn btn-primary bg-white"
						onClick={() => window.open(`${BASE_API_URL}export/umkm`)}
					>
						Export Report
					</button>
				</div>
			</div>
			{loading ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border text-dark" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : filteredUmkm.length === 0 ? (
				<div className="d-flex justify-content-center">
					<p>Tidak ada data ditemukan</p>
				</div>
			) : (
				<div>
					<div className="row">
						{currentItems.map((item, key) => {
							return (
								<div key={key} className="col-md-4">
									<div className="card p-2 mb-3">
										<div className="row g-0 align-items-center">
											<div className="col-5 item">
												<span className="notify-badge">{item.tipe_usaha}</span>
												<img
													src={`https://api.digitaldesa.id/uploads/belanja/${item.foto}`}
													className="img-fluid rounded-start"
													alt="..."
												/>
											</div>
											<div className="col-7 direction">
												<div className="card-body-produk">
													<h6 className="fw-bold m-0">{item.nama_usaha}</h6>
													<p className="fw-bold smaller m-0">
														Desa {item.nama_deskel}, Kec. {item.nama_kecamatan}
													</p>
													<div className="smaller">
														<p className="m-0">Order via:</p>
														<ul className="m-0">
															<li>DIGIDES</li>
															<li>Tokopedia</li>
															<li>Grab/Gojek</li>
														</ul>
													</div>
													<a
														href={item.map}
														target={"_blank"}
														rel="noreferrer"
														className="small"
													>
														<i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
														&nbsp; Petunjuk Arah
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<ReactPaginate
						className="pagination justify-content-center"
						nextLabel="Next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						marginPagesDisplayed={2}
						pageCount={pageCount}
						previousLabel="< Previous"
						pageClassName="page-item"
						pageLinkClassName="page-link"
						previousClassName="page-item"
						previousLinkClassName="page-link"
						nextClassName="page-item"
						nextLinkClassName="page-link"
						breakLabel="..."
						breakClassName="page-item"
						breakLinkClassName="page-link"
						containerClassName="pagination"
						activeClassName="active"
						forcePage={itemOffset / itemsPerPage}
						renderOnZeroPageCount={null}
					/>
				</div>
			)}
		</Fragment>
	);
}
