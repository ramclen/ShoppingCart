import gapi from "gapi";

const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    CLIENT_ID =  '857380663582-skmqomclf391tgrfqbd9a353253p3lda.apps.googleusercontent.com',
    SCOPES = "https://www.googleapis.com/auth/drive";


let _singleton = Symbol();

export default class GSpreadSheets {

    constructor(singletonToken) {
        if (_singleton !== singletonToken) throw new Error('Cannot instantiate directly.');
        this.clientID = CLIENT_ID;
        this.isSignedIn = false;
        this.handleClientLoad();
    }

    static instance():GSpreadSheets {
        if(!this[_singleton])
            this[_singleton] = new GSpreadSheets(_singleton);

        return this[_singleton]
    }

    setSpreadSheetID(spreadSheetID){
        this.spreadSheetID = spreadSheetID;
    }

    handleClientLoad(action) {
        return gapi.load('client:auth2', action);
    }

    init(){
        return gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: this.clientID,
            scope: SCOPES
        }).then(function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this._updateSigninStatus.bind(this));
            this._updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }.bind(this));
    }

    isSignedIn(){
        return this.isSignedIn;
    }

    signIn() {
        return gapi.auth2.getAuthInstance().signIn();
    }

    signOut() {
        gapi.auth2.getAuthInstance().signOut();
    }

    addRow(page, range, row){
        return gapi.client.sheets.spreadsheets.values.append({
            range: this._createRange(page, range),
            spreadsheetId: this.spreadSheetID,
            valueInputOption:"RAW",
            resource : {values:[row]},
        })
    }

    updateRows(page, range, rows){
        return gapi.client.sheets.spreadsheets.values.update({
            range: this._createRange(page, range),
            spreadsheetId: this.spreadSheetID,
            valueInputOption:"RAW",
            resource : {values:rows},
        })
    }

    getDataFrom(page, range) {
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: this.spreadSheetID,
            range: this._createRange(page, range)
        }).then(response => {
            return response.result;
        }, response => {
            console.error('Error: ' + response.result.error.message);
        })
    }

    _updateSigninStatus(isSignedIn) {
        this.isSignedIn = isSignedIn;
    }

    _createRange(page, range) {
        return `${page}!${range}`
    }
}


