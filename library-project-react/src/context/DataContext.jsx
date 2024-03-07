import { createContext, useReducer } from "react";
import React, { useEffect } from 'react'
import axios from 'axios';
import { reducer, initialState } from "../reducer/reducer";

// context olusturulmasi;;
const DataContext = createContext();

// olusturulan context'e bir saglayici olusturulur;;
export const DataProvider = ({ children }) => {
    // useReducer tanimlamasi
    const [state, dispatch] = useReducer(reducer, initialState);

    // yeni kitap ekleme/Düzenleme
    const yeniKitapEkleDuzenle = async (yeni) => {
        // kitap ekleme icin
        let url = "http://localhost:3005/kitaplar";

        if (!state.duzenlenecekKitap) {
            // case-6
            dispatch({ type: "kitapEkle", yeni })
            const response = await axios.post(url, yeni)
            console.log(response);
        }
        // kitap düzenlemek icin
        else {
            url += `/${state.duzenlenecekKitap.id}`;
            const response2 = await axios.put(url, yeni);
            // case-7
            dispatch({ type: "kitapDuzenle", yeni })
        }

        // kitap silme
        const kitapSil = async (id) => {
            // case-5
            dispatch({ type: "kitapSil", id })
            const url = `http://localhost:3005/kitaplar/${id}`;
            // const response = await axios.delete(url); // delete islemlerinde dikkat et!!
            const response = await axios.patch(url, { isDeleted: true })
            console.log(response);
        }

        // kitaplari getirme
        const kitapGetir = async () => {
            let url = "http://localhost:3005/kitaplar";
            if (state.secilenKategori && state.secilenKategori !== "All Books") {
                url += `?kitapKategorisi=${state.secilenKategori}`
            }
            const response = await fetch(url); // fetch islemi asenkron bir islemdir
            const kitaplar = await response.json();
            //case-1
            // kitaplar:kitaplar === kitaplar
            dispatch({ type: "kitaplariGetir", payload: kitaplar })
        }
        // kitapGetir(); // HATA!! (sonsuz get request hatasi)


        // kategorileri getir
        const kategoriGetir = async () => {
            const urlKategori = "http://localhost:3005/kategoriler";
            const response = await fetch(urlKategori);
            const kategoriler = await response.json();
            //case-2
            dispatch({ type: "kategorileriGetir", payload: kategoriler });
        }

        // card'daki kitabi düzenle
        const cardDuzenle = async (id) => {
            const url = `http://localhost:3005/kitaplar/${id}`;
            const response = await axios.get(url);
            const duzenlenecekKitap = response.data;
            // case-4
            dispatch({ type: "cardDuzenle", duzenlenecekKitap })
        }

        // Form submit
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Kitap basariyla eklendi/düzenlendi");

            yeniKitapEkleDuzenle({
                id: state.kitaplik.length > 0 ? (+state.kitaplik[kitaplik.length - 1].id + 1).toString() : "1",
                kitapAdi: kitapAdi,
                kitapYazari: kitapYazari,
                kitapKategorisi: kitapKategorisi,
                kitapResmi: kitapResmi,
                kitapSayfaSayisi: kitapSayfaSayisi,
                kitapAciklamasi: kitapAciklamasi
            });
            // case-3
            dispatch({ type: "formReset" });
        }

        useEffect(() => {
            kategoriGetir()
        }, []);

        useEffect(() => {
            kitapGetir()
        }, [state.secilenKategori]);

        return <DataContext.Provider value={
            {
                kitapSil, cardDuzenle, // card'dan gelenler           
                handleSubmit, state, dispatch // formdan gelneler
            }
        }>
            {children}
        </DataContext.Provider>
    }
}

export default DataContext