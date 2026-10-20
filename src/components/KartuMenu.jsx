import { useState } from "react"
import LabelHarga from "./LabelHarga.jsx"

function kartuMenu({nama, harga, kategori="Makanan"}) {
    const [jumlah, setJumlah] = useState(0);
    const [catatan, setCatatan] = useState('');
    const tambah = () => setJumlah (jumlah + 1);

    return(
        <>
        <div className="kartu">
            <h1>{nama}</h1>
            <LabelHarga nilai={harga} />
            <p>Kategori :{kategori}</p>
        </div>
        </>
    )
}

export default kartuMenu