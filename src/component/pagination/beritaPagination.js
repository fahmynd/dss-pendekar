import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";

export default function BeritaPagination(props) {
	const { list_kecamatan, list_desa } = props.resultData;
	let { list_berita } = props.resultData;

	const [loading, setLoading] = useState(true);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

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

	const filteredBerita = useMemo(() => {
		const filtered = list_berita.filter(berita => {
			if (query !== "") {
				return berita.judul.toLowerCase().indexOf(query.toLowerCase()) > -1;
			}
			if (selectedKec && selectedDesa) {
				return berita.kode_wilayah === selectedDesa;
			} else if (selectedKec) {
				let kode_kec = `${berita.k1}.${berita.k2
					.toString()
					.padStart(2, "0")}.${berita.k3.toString().padStart(2, "0")}`;
				return kode_kec === selectedKec;
			} else {
				return true;
			}
		});

		setPageCount(Math.ceil(filtered.length / itemsPerPage));
		return filtered;
	}, [selectedKec, selectedDesa, query, list_berita, itemsPerPage]);

	useEffect(() => {
		setItemOffset(0);
	}, [selectedKec, selectedDesa, query, filteredBerita]);

	useEffect(() => {
		setLoading(true);
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(filteredBerita.slice(itemOffset, endOffset));

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [itemOffset, itemsPerPage, filteredBerita]);

	const handlePageClick = event => {
		const newOffset = event.selected * itemsPerPage;
		setItemOffset(newOffset);
	};

	return (
		<Fragment>
			<div className="row mb-4">
				<div className="col">
					<div className="search-produk">
						<form className="search-form-produk d-flex align-items-center">
							<input
								value={query}
								onChange={e => setQuery(e.target.value)}
								type="text"
								name="query"
								placeholder="Cari Berita..."
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
			</div>
			{loading ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border text-dark" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : filteredBerita.length === 0 ? (
				<div className="d-flex justify-content-center">
					<p>Tidak ada data ditemukan</p>
				</div>
			) : (
				<div>
					{currentItems.map((item, key) => (
						<div key={key} className="post-item clearfix">
							<img
								src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/berita/thumbs/${item.foto}`}
								alt="News"
							/>
							<h4>
								<a
									href={`https://profil.digitaldesa.id/${item.slug_desa}/berita/${item.slug}`}
									rel="noreferrer"
									target={"_blank"}
								>
									{item.judul}
								</a>
							</h4>
							<p>{item.isi}</p>
						</div>
					))}
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
