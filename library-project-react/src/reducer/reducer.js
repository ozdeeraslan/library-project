export const initalState = {
    kitaplik: [],
    kategoriler: [],
    search: "",
    secilenKategori: "",
    secilenKitap: "",
    kitapAdi: "",
    kitapYazari: "",
    kitapKategorisi: "--Kategori Seçiniz--",
    kitapResmi: "",
    kitapSayfaSayisi: 0,
    kitapAciklamasi: ""
}

export const reducer = (state,action)=>{
    switch(action.type){
        //case-1 kitaplariGetir
        case"kitaplariGetir":
            return{
                ...state,
                kitaplik: action.payload
            }
        //case-2 kategorileriGetir
        case"kategorileriGetir":
            return{
                ...state,
                kategoriler: action.payload
            }
        //case-3 formReset
        case"formReset":
            return{
                ...state,
                kitapAdi: "",
                kitapYazari: "",
                kitapKategorisi: "--Kategori Seçiniz--",
                kitapResmi: "",
                kitapSayfaSayisi: 0,
                kitapAciklamasi: ""
            }
        //case-4 cardDuzenle
        case"cardDuzenle":
            let gelenKitap = action.duzenlenecekKitap
            return{
                ...state,
                kitapAdi:gelenKitap.kitapAdi,
                kitapYazari:gelenKitap.kitapYazari,
                kitapResmi:gelenKitap.kitapResmi,
                kitapKategorisi:gelenKitap.kitapKategorisi,
                kitapSayfaSayisi:gelenKitap.kitapSayfaSayisi,
                kitapAciklamasi:gelenKitap.kitapAciklamasi,
                secilenKitap:gelenKitap
            }
        //case-5 kitapSil
        case"kitapSil":
            const filtredKitaplik = state.kitaplik.filter(item=>item.id!==action.id);
            return{
                ...state,
                kitaplik:filtredKitaplik
            }
        //case-6 kitapEkle
        case"kitapEkle":
        const guncelKitaplik = [...state.kitaplik,action.yeni];
        return{
            ...state,
            kitaplik:guncelKitaplik
        }
        //case-7 kitapDuzenle
        case"kitapDuzenle":
        const editKitaplik = state.kitaplik.map(kitap=>{
            if(kitap.id === state.secilenKitap.id){
                return {...action.yeni}
            }else{
                return {...kitap}
            }
        })
            return{
                ...state,
                kitaplik:editKitaplik,
                secilenKitap:""
            }
        //case-8 search
        case"search":
            return{
                ...state,
                search: action.payload
            }
        //case-9 secilenKategori
        case"secilenKategori":
            return{
                ...state,
                secilenKategori: action.payload
            }
        //case-10/15 arası formCaseleri
        case"kitapAdi":
            return{
                ...state,
                kitapAdi:action.payload
            }
        case"kitapYazari":
            return{
                ...state,
                kitapYazari:action.payload
            }
        case"kitapResmi":
            return{
                ...state,
                kitapResmi:action.payload
            }
        case"kitapKategorisi":
            return{
                ...state,
                kitapKategorisi:action.payload
            }
        case"kitapSayfaSayisi":
            return{
                ...state,
                kitapSayfaSayisi:action.payload
            }
        case"kitapAciklamasi":
            return{
                ...state,
                kitapAciklamasi:action.payload
            }
    }
}