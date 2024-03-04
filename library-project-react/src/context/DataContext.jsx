import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// context olusturulmasi;;
const DataContext = createContext();

// olusturulan context'e bir saglayici olusturulur;;
export const DataProvider = ({ children }) => {
    // Yapidaki tüm state, method, etc tasinacak;;
    // const [stateAdi, setState] = useState(initialValue);
    const [kitaplik, setKitaplik] = useState([]);
    const [kategoriler, setKategoriler] = useState([]);
    const [search, setSearch] = useState("");
    const [secilenKategori, setSecilenKategori] = useState("");
    const [duzenlenecekKitap, setduzenlenecekKitap] = useState("");
    const [kitapAdi, setKitapAdi] = useState("");
    const [kitapYazari, setKitapYazari] = useState("");
    const [kitapKategorisi, setKitapKategorisi] = useState("--Choose a Category--");
    const [kitapResmi, setKitapResmi] = useState("");
    const [kitapSayfaSayisi, setKitapSayfaSayisi] = useState(0);
    const [kitapAciklamasi, setKitapAciklamasi] = useState("");

    // yeni kitap ekleme/Düzenleme
    const yeniKitapEkleDuzenle = async (yeni) => {
        // kitap ekleme icin
        let url = "http://localhost:3005/kitaplar";

        if (!duzenlenecekKitap) {
            setKitaplik(prev => [...prev, yeni]);
            const response = await axios.post(url, yeni)
            console.log(response);
        }
        // kitap düzenlemek icin
        else {
            url += `/${duzenlenecekKitap.id}`;
            const response2 = await axios.put(url, yeni);
            setduzenlenecekKitap("");
            setKitaplik(prev =>
                prev.map(kitap => {
                    if (kitap.id === duzenlenecekKitap.id) {
                        return { ...response2.data }
                    } else {
                        return { ...kitap }
                    }
                }))
        }
    }

    // kitap silme
    const kitapSil = async (id) => {
        setKitaplik(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
        const url = `http://localhost:3005/kitaplar/${id}`;
        // const response = await axios.delete(url); // delete islemlerinde dikkat et!!
        const response = await axios.patch(url, { isDeleted: true })
        console.log(response);
    }

    // kitaplari getirme
    const kitapGetir = async () => {
        let url = "http://localhost:3005/kitaplar";
        if (secilenKategori && secilenKategori !== "All Books") {
            url += `?kitapKategorisi=${secilenKategori}`
        }
        const response = await fetch(url); // fetch islemi asenkron bir islemdir
        const kitaplar = await response.json();
        setKitaplik(kitaplar)
    }
    // kitapGetir(); // HATA!! (sonsuz get request hatasi)


    // kategorileri getir
    const kategoriGetir = async () => {
        const urlKategori = "http://localhost:3005/kategoriler";
        const response = await fetch(urlKategori);
        const kategoriler = await response.json();
        setKategoriler(kategoriler);
    }

    // card'daki kitabi düzenle
    const cardDuzenle = async (id) => {
        const url = `http://localhost:3005/kitaplar/${id}`;
        const response = await axios.get(url);
        const duzenlenecekKitap = response.data;
        setduzenlenecekKitap(duzenlenecekKitap);
        setKitapAdi(duzenlenecekKitap.kitapAdi);
        setKitapYazari(duzenlenecekKitap.kitapYazari);
        setKitapKategorisi(duzenlenecekKitap.kitapKategorisi);
        setKitapResmi(duzenlenecekKitap.kitapResmi);
        setKitapSayfaSayisi(duzenlenecekKitap.kitapSayfaSayisi);
        setKitapAciklamasi(duzenlenecekKitap.kitapAciklamasi);
    }

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Kitap basariyla eklendi/düzenlendi");

        yeniKitapEkleDuzenle({
            id: kitaplik.length > 0 ? (+kitaplik[kitaplik.length - 1].id + 1).toString() : "1",
            kitapAdi: kitapAdi,
            kitapYazari: kitapYazari,
            kitapKategorisi: kitapKategorisi,
            kitapResmi: kitapResmi,
            kitapSayfaSayisi: kitapSayfaSayisi,
            kitapAciklamasi: kitapAciklamasi
        });

        setKitapAdi("");
        setKitapYazari("");
        setKitapKategorisi("--Choose a Category--");
        setKitapAciklamasi("");
        setKitapResmi("");
        setKitapSayfaSayisi(0);
    }

    useEffect(() => {
        kategoriGetir()
    }, []);

    useEffect(() => {
        kitapGetir()
    }, [secilenKategori]);

    return <DataContext.Provider value={
        {
            kitapSil, cardDuzenle, // card'dan gelenler
            search, kitaplik, // cardlist'ten gelenler
            kategoriler, setSecilenKategori, // naviden gelenler
            setSearch, // search'ten gelenler
            handleSubmit, duzenlenecekKitap, // formdan gelneler
            kitapAdi,
            kitapYazari,
            kitapKategorisi,
            kitapSayfaSayisi,
            kitapResmi,
            kitapAciklamasi,
            setKitapAdi,
            setKitapYazari,
            setKitapKategorisi,
            setKitapSayfaSayisi,
            setKitapResmi,
            setKitapAciklamasi
        }
    }>
        {children}
    </DataContext.Provider>
}

export default DataContext;