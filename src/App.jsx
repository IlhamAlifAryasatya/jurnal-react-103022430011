import './App.css'
import './index.css'
import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

function App() {
  const nama = "Ilham";
  const N = 11;
  const jam = 9;

  return (
    <>
    <h1 className="judul">Kantin {nama}</h1>
      <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>
      <p>Saldo Awal Kantin Rp: {N * 1000}</p>

      <button disabled>Bayar</button>

        <div>
          <Panel judul="Menu Hari Ini">
            <KartuMenu nama="Nasi Ayam Geprek" harga={13700} />
            <KartuMenu nama="Es Teh Lemon" harga={13700} kategori="Minuman"/>
            <KartuMenu nama="Mie Goreng Telur" harga={13700}/>
          </Panel>
        </div>
    </>
  )
}

export default App
