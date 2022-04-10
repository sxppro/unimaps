function sendRequest(url, body={}){
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Keep-Alive', 'timeout=600, max=100');
    return fetch("http://localhost:3000" + url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: myHeaders,
    }).then(res => res.json());
}

class Scope{
    constructor(){
        this.sessionId = localStorage.getItem('mac-spicy-session-id');
    }

    async login(username, password){
        const {sessionId, success} = await sendRequest('/user/login', {username, password});
        if(success && sessionId){
            this.sessionId = sessionId;
            localStorage.setItem('mac-spicy-session-id', sessionId);
            return true;
        }
        return false;
    }

    async logout(){
        if(!this.sessionId){
            return false;
        }
        const {success} = await sendRequest('/user/logout', {sessionId: this.sessionId});
        if(success){
            localStorage.removeItem('mac-spicy-session-id');
            return true;
        }
        return false;
    }

    async addOrEditEvent(data){
        const {success, newId} = await sendRequest('/event/add-or-edit-event', {sessionId: this.sessionId, data});
        return newId || success;
    }

    async deleteEvent(id){
        const {success} = await sendRequest('/event/delete-event', {sessionId: this.sessionId, id});
        return success;
    }

    async allDefaultMapEvents(){
        const {events} = await sendRequest('/map/all-default-map-events');
        return events;
    }
}

const scope = new Scope();
export default scope;
export {scope, sendRequest};