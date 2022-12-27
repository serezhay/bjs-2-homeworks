"use strict";

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
        this.canCall ;
    }
    addClock (time, callback) {
        if (!time || !callback) {
                throw new Error('Отсутствуют обязательные аргументы') ;
        }
        if (this.alarmCollection.some((item) => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        return this.alarmCollection.push({
            time,
            callback,
            canCall: true,
        })
    }
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime () {
        return new Date.toLocaleTimeString("ru-RU", {
            hour: "2-digit", 
            minute: "2-digit"})
    }
    start () {
        if (this.intervalId !== null) {
            return;
        }
        const interval = () => this.alarmCollection.forEach(item => {
            if (item.time === this.getCurrentFormattedTime() && item.canCall ) {
                    item.canCall = false;
                    item.callback();
                 }
        })
        this.intervalId = setInterval(interval, 1000);
    }
    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls () {
        this.alarmCollection.forEach(item => item.canCall = true);
    }
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}