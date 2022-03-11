class Clock{
    constructor(timezone = "EST"){
        this.timezone = timezone;
        let time = new Date().toLocaleTimeString("en-us", {timeZone: this.timezone})
        time = time.split(/[: ]/)
        this.hours = time[0];
        this.mins = time[1]; 
        this.secs = time[2];
        this.period = time[3];
    }
    #update() {
        let time = new Date().toLocaleTimeString("en-us", {timeZone: this.timezone})
        time = time.split(/[: ]/)
        this.hours = time[0];
        this.mins = time[1]; 
        this.secs = time[2];
        this.period = time[3];
    }
    getTime() {
        this.#update();
        let h = this.hours.toString().padStart(2, '0');
        let m = this.mins.toString().padStart(2, '0');
        let s = this.secs.toString().padStart(2, '0');
        return [h, m, s, this.period];
    }
    setTimeZone(timezone){
        this.timezone = timezone;
    }
}


let mainText = document.getElementById("main text");
let timeZoneSelect = document.getElementById("timezones");
let hourHand = document.getElementById("hourHand");
let minHand = document.getElementById("minHand");
let secHand = document.getElementById("secHand");

let clock = new Clock("EST");

setInstantInterval(updateClock, 1000)
timeZoneSelect.onchange = () => {
    clock.setTimeZone(timeZoneSelect.value);
    updateClock();
};

function updateClock(){
    let time = clock.getTime();
    mainText.innerHTML = `${time[0]}:${time[1]}:${time[2]} ${time[3]}`
    hourHand.style.transform = `rotate(${time[0]*360/12}deg)`;
    minHand.style.transform = `rotate(${time[1]*360/60}deg)`;
    secHand.style.transform = `rotate(${time[2]*360/60}deg)`;
}

function setInstantInterval(func, time){
    func();
    setInterval(func, time);
}







