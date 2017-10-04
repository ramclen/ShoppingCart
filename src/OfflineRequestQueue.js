export default class OfflineRequestQueue {
    constructor(timeInterval){
        this.queue = {};
        this.milis = timeInterval;
        this.runing = false;
    }

    addRequest(id, request){
        if(!this.queue[id])
            this.queue[id] = request;
    }

    run(){
        if(!this.runing){
            this.runing = true;
            setInterval((this._interval.bind(this)), this.milis);
        }
    }

    _interval() {
        if (Object.keys(this.queue).length == 0) return;
        if (!navigator.onLine) return;
        Object.keys(this.queue)
              .forEach(key=>{
                  this.queue[key]().then(result=>{
                      delete this.queue[key];
                      return result;
                  });
               })
    }
}