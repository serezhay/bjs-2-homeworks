"use strict";

class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
        this.canCall = true;
    }
    addClock (time, callback) {
        if (!time || !callback) {
                throw new Error('Отсутствуют обязательные аргументы') ;
        }
        if (this.alarmCollection.filter((item) => item === time).length > 0) {
            console.warn('Уже присутствует звонок на это же время')
        }
        callback(callback);
        return this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true,
        })
    }
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }
    getCurrentFormattedTime () {
        let date = new Date();
        return String(`${date.getHours()}:${date.getMinutes()}`);
    }
    start () {
        if (this.intervalId !== undefined) {
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