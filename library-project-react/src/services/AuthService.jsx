import axios from "axios";

const AuthService = {
    login: async(username, password) => {
        const url = "https://api.escuelajs.co/api/v1/auth/login";
        const response = await axios.post(url, {
            email: username, 
            password
        })
        // giris basarili ise access ve refresh token döner.
        console.log(response);
        if(response.data.access_token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        //giris basarili ise token'leri localStorage'a kaydet!
        return response.data;
    },

    logout: () => {
        localStorage.removeItem("user");
        // login durumunda kaydedilen token'leri localStorage'den temizler.
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem("user"));
        //girisi yapilan kullanicinin token bilgilerini getirmek icin bu islemi yapiyoruz.
    }
}


export default AuthService;