import { useEffect, useState } from "react";

const useDate = () => {
    const [fullDate, setFullDate] = useState('');
    const [fullTime, setFullTime] = useState('');
    const [getCurrentDay, setCurrentDay] = useState(''); //pobiera numer dnia
    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

    useEffect(() => {

        setInterval(() => {
            let currentDate = new Date()

            let currentDay = currentDate.getDay() //poobiera numer dnia w danym tygodniu od 0 do 6
            setCurrentDay(daysOfWeek[currentDay])
            
            let day = currentDate.getDate() //pobira numer dnia w danym miesiącu
            let month = currentDate.getMonth() + 1 //dajemy polus 1, bo styczen ma index 0
            let year = currentDate.getFullYear()
            day = day < 10 ? '0' + day : day //jeżeli day jest mniejszy od 10 to dodajemy przed 0
            month = month < 10 ? '0' + month : month
            let fotmatetdDate = `${day}-${month}-${year}`
            setFullDate(fotmatetdDate)
        }, 10000);

        setInterval(() => {
            let currentDate = new Date()
            let hour = currentDate.getHours()
            let minute = currentDate.getMinutes()
            let secend = currentDate.getSeconds()
            hour = hour < 10? '0' + hour : hour
            minute = minute < 10? '0' + minute : minute
            secend = secend < 10? '0' + secend : secend
            let fotmatetdTime = `${hour}:${minute}:${secend}`
            setFullTime(fotmatetdTime)
        }, 1000)

    }, [])
    
    return { fullDate, fullTime, getCurrentDay };
}

export default useDate;