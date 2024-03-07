export const initialState = {
    kitaplik: [],
    kategoriler: [],
    search: "",
    secilenKategori: "",
    duzenlenecekKitap: "",
    kitapAdi: "",
    kitapYazari: "",
    kitapKategorisi: "--Choose a Category--",
    kitapResmi: "",
    kitapSayfaSayisi: 0,
    kitapAciklamasi: ""
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "kitaplariGetir":
            return {
                ...state,
                kitaplik: action.payload
            };
        case "kategorileriGetir":
            return {
                ...state,
                kategoriler: action.payload
            };
        case "formReset":
            return {
                ...state,
                kitapAdi: "",
                kitapYazari: "",
                kitapKategorisi: "--Choose a Category--",
                kitapResmi: "",
                kitapSayfaSayisi: 0,
                kitapAciklamasi: ""
            };
        case "cardDuzenle":
            const gelenKitap = action.duzenlenecekKitap
            return {
                ...state,
                kitapAdi: gelenKitap.kitapAdi,
                kitapYazari: gelenKitap.kitapYazari,
                kitapResmi: gelenKitap.kitapResmi,
                kitapKategorisi: gelenKitap.kitapKategorisi,
                kitapSayfaSayisi: gelenKitap.kitapSayfaSayisi,
                kitapAciklamasi: gelenKitap.kitapAciklamasi,
                duzenlenecekKitap: gelenKitap
            };
        case "kitapSil":
            const filteredKitaplik = state.kitaplik.filter(item => item.id !== action.id)
            return {
                ...state,
                kitaplik: filteredKitaplik
            };
        case "kitapEkle":
            const guncelKitaplik = [...state.kitaplik, action.yeni]
            return {
                ...state,
                kitaplik: guncelKitaplik
            };
        case "kitapDuzenle":
            const editKitaplik = state.kitaplik.map(kitap=>{
                if(kitap.id === state.duzenlenecekKitap.id)
                {
                    return {...action.yeni}
                } else {
                    return {...kitap}
                }
            })
            return {
                ...state,
                kitaplik: editKitaplik,
                duzenlenecekKitap:""
            };
        case "search":
            return {
                ...state,
                search: action.payload
            };
        case "secilenKategori":
            return {
                ...state,
                secilenKategori: action.payload
            };
        case "kitapAdi":
            return {
                ...state,
                kitapAdi: action.payload
            };
        case "kitapYazari":
            return {
                ...state,
                kitapYazari: action.payload
            };
        case "kitapKategorisi":
            return {
                ...state,
                kitapKategorisi: action.payload
            };
        case "kitapSayfaSayisi":
            return {
                ...state,
                kitapSayfaSayisi: action.payload
            };
        case "kitapResmi":
            return {
                ...state,
                kitapResmi: action.payload
            };
        case "kitapAciklamasi":
            return {
                ...state,
                kitapAciklamasi: action.payload
            };
    }
};