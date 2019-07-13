import axios from "axios";

class Api {
    async search(query:string){
        try {

            const {data} = await axios.get(`http://videos.jewishnature.co.il/ApI/Json/Search/${query}/Exact/true`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });

            return data;
        } catch (e) {
            console.warn('Error: api.search()', e);
        }
    }

    async getResultContent(id:string){
        try {

            const {data} = await axios.get(`http://videos.jewishnature.co.il/ApI/Json/GetHtmlContent/${id}/`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });

            return data;
        } catch (e) {
            console.warn('Error: api.getResultContent()', e);
        }
    }
}

export default Api;
