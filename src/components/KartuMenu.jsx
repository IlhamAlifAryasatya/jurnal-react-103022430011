import { useState } from "react"
import LabelHarga from "./LabelHarga.jsx"

function kartuMenu({nama, harga, jumlah, kategori="Makanan", onTambah, onKurang}) {


    return(
        <>
        <div className="kartu">
            <h1>{nama}</h1>
            <LabelHarga nilai={harga} />
            <p>Kategori :{kategori}</p>
            <div className="kontrol">
                <button onClick={onKurang} disabled={jumlah === 0}>
                    -
                </button>
                <span>
                    {jumlah}
                </span>

                <button onClick={onTambah}>
                    +
                </button>
            </div>

        </div>
        </>
    )
}

export default kartuMenu