import React, { useEffect, useState, Fragment, useMemo } from "react";

export default function BeritaPagination(props) {
	const { list_kecamatan, list_desa, list_berita } = props.resultData;

	const [news, setNews] = useState([]);
	const [selectedKec, setSelectedKec] = useState("");
	const [selectedDesa, setSelectedDesa] = useState("");
	const [query, setQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const newsPerPage = 6;

	useEffect(() => {
		setNews(list_berita);
	}, [list_berita]);

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

	const filteredNews = useMemo(() => {
		let filtered = list_berita;

		if (query !== "") {
			filtered = filtered.filter(item =>
				item.judul.toLowerCase().includes(query.toLowerCase())
			);
		}

		if (selectedKec && selectedDesa) {
			filtered = filtered.filter(item => item.kode_wilayah === selectedDesa);
		} else if (selectedKec) {
			filtered = filtered.filter(item => {
				let kode_kec = `${item.k1}.${item.k2
					.toString()
					.padStart(2, "0")}.${item.k3.toString().padStart(2, "0")}`;
				return kode_kec === selectedKec;
			});
		}

		return filtered;
	}, [list_berita, selectedKec, selectedDesa, query]);

	const totalNews = filteredNews.length;

	const totalPages = Math.ceil(totalNews / newsPerPage);

	const paginatedNews = filteredNews.slice(
		(currentPage - 1) * newsPerPage,
		currentPage * newsPerPage
	);

	const pageNumbers = useMemo(() => {
		const numbers = [];
		for (let i = 1; i <= totalPages; i++) {
			numbers.push(i);
		}
		return numbers;
	}, [totalPages]);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
	};

	return (
		<Fragment>
			<div className="row mb-4">
				<div className="col">
					<div className="search-produk">
						<form className="search-form-produk d-flex align-items-center">
							<input
								value={query}
								onChange={e => {
									setQuery(e.target.value);
									setCurrentPage(1);
								}}
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
						onChange={e => setSelectedKec(e.target.value)}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={""}>Semua Kecamatan</option>
						{listKec.map(item => (
							<option
								key={item.kode_wilayah}
								value={item.kode_wilayah}
								selected={selectedKec === item.kode_wilayah}
							>
								{item.nama_kecamatan}
							</option>
						))}
					</select>
				</div>
				<div className="col">
					<select
						onChange={e => setSelectedDesa(e.target.value)}
						className="form-select"
						aria-label="Default select example"
					>
						<option value={""}>Semua Desa</option>
						{listDeskel.map(item => (
							<option
								key={item.kode_wilayah}
								value={item.kode_wilayah}
								selected={selectedDesa === item.kode_wilayah}
							>
								{item.nama_deskel}
							</option>
						))}
					</select>
				</div>
			</div>
			{paginatedNews.map((item, key) => (
				<div key={key} className="post-item clearfix">
					<img
						src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/berita/thumbs/${item.foto}`}
						alt="News"
					/>
					<h4>
						<a
							href={`https://profil.digitaldesa.id/${item.slug_desa}/berita/${item.slug}`}
							rel="noreferrer"
							target="_blank"
						>
							{item.judul}
						</a>
					</h4>
					<p>{item.isi}</p>
				</div>
			))}
			<nav aria-label="Page navigation example">
				<ul className="pagination justify-content-center">
					{pageNumbers.map(number => (
						<li
							key={number}
							className={`page-item${number === currentPage ? " active" : ""}`}
						>
							<button
								onClick={() => handlePageChange(number)}
								className="page-link"
							>
								{number}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</Fragment>
	);
}
