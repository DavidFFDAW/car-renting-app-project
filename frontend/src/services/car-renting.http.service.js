class HttpService{

    static customersURL = 'http://vps-f87b433e.vps.ovh.net/php-actv/backend/customers/';
    static carsURL = 'http://vps-f87b433e.vps.ovh.net/php-actv/backend/cars/';
    static reservationsURL = 'http://vps-f87b433e.vps.ovh.net/php-actv/backend/reservations/';
    
    static instance = new HttpService();

    constructor() {}  // - SINGLETON

    static getInstance(){
        return this.instance;
    }
    
    get(URL){
        return fetch(URL,{ method: 'GET', mode: 'cors' })
                .then(response => response.json());
    }
    post(URL, data){
        return fetch(URL,{ method: "POST", mode: "cors", body: JSON.stringify(data), 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        }).then(response => response.json());
    }
    put(URL, data){
        return fetch(URL,{ method: 'PUT', mode: 'cors', body: JSON.stringify(data), 
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
    delete(URL){
        return fetch(URL,{ method: 'DELETE', mode: 'cors' })
            .then(response => response.json());
    }
}