const currentYear =(new Date().getFullYear())

console.log(moment([1988]).isLeapYear())

const calculateAge=(birthDate)=>{
    console.log(birthDate)
    let diff =moment(birthDate).diff(moment(), 'milliseconds')
    let duration = moment.duration(diff)
    console.log(duration)
let year=duration._data.years
console.log(year)

let months=duration._data.months
console.log(months)

let days=duration._data.days
console.log(days)
document.querySelector(".years").innerHTML= `${Math.abs(year)} years`
document.querySelector(".months").innerHTML=`${Math.abs(months)} months`
document.querySelector(".days").innerHTML=`${Math.abs(days)} days`
return {year,months,days}

}












const submitButton = document.querySelector(".dd-mm-yyyy")
submitButton.addEventListener("submit", (e)=>{
    //submit event only called when the form is submitted
e.preventDefault()
const dayInput= document.querySelector(".dd").value
const monthInput=document.querySelector(".mm").value
const yearInput=document.querySelector(".yyyy").value

//validating to make sure the inputs are not empty
if(dayInput===""|| monthInput===""||yearInput===""){
    console.log("Please complete all fields")
    alert("Please complete all fields")
}

//validating the day number is between 1-31
else if(dayInput <=0  || dayInput>31){
    console.log("Invalid day value")
    alert("Invalid day value")
}

//validating the month number is between 1-12
else if(monthInput <=0  || monthInput>12){
    console.log("Invalid month value")
    alert("Invalid month value")
}

//validating the year is not in the future
else if(yearInput >currentYear){
    console.log("invalid year")
    alert("Invalid year")
}

// validating the date is not invalid e.g. 31/04/1991 (there are 30 days in April) 
else if(moment(`${monthInput}/${dayInput}/${yearInput}`,"MM/DD/YYYY")._isValid===false){
    console.log("Invalid birth date")
    // console.log(`${monthInput}/${dayInput}/${yearInput}`)
    alert("Invalid birth date")
}else{
    console.log(monthInput, dayInput, yearInput)
    let birthDate=(moment(`${monthInput}/${dayInput}/${yearInput}`,"MM/DD/YYYY"))
    calculateAge(birthDate)
    console.log(Number(monthInput))

let zodiac;
    if(dayInput>=21&&Number(monthInput)===3 || dayInput<=19&&Number(monthInput)===4){
        console.log("You are an aries")
        zodiac="Aries"
       
    }else if
    (dayInput>=20&&Number(monthInput)===4 || dayInput<=20&&Number(monthInput)===5){
        console.log("You are a Taurus")
        zodiac="Taurus"
    }else if
    (dayInput>=21 && Number(monthInput)===5 || dayInput<=20&&Number(monthInput)===6){
        console.log("You are a Gemini")
        zodiac="Gemini"
    }else if
    (dayInput>=21 && Number(monthInput)===6 || dayInput<=22&&Number(monthInput)===7){
        console.log("You are a Cancer")
        zodiac="Cancer"
    }else if
    (dayInput>=23 && Number(monthInput)===7 || dayInput<=22&&Number(monthInput)===8){
        console.log("You are a Leo")
        zodiac="Leo"
    }else if
    (dayInput>=23 && Number(monthInput)===8 || dayInput<=22&&Number(monthInput)===9){
        console.log("You are a Virgo")
        zodiac="Virgo"
    }else if
    (dayInput>=23 && Number(monthInput)===9 || dayInput<=22&&Number(monthInput)===10){
        console.log("You are a Libra")
        zodiac="Libra"
    } else if
    (dayInput>=23 && Number(monthInput)===10 || dayInput<=21&&Number(monthInput)===11){
        console.log("You are a Scorpio")
        zodiac="Scorpio"
    }else if
    (dayInput>=22 && Number(monthInput)===11 || dayInput<=21&&Number(monthInput)===12){
        console.log("You are a Sagittarius")
        zodiac="Sagittarius"
    }else if
    (dayInput>=22 && Number(monthInput)===12 || dayInput<=19&&Number(monthInput)===1){
        console.log("You are a Capricorn")
        zodiac="Capricorn"
    }else if
    (dayInput>=20 && Number(monthInput)===1 || dayInput<=18&&Number(monthInput)===2){
        console.log("You are a Aquarius")
        zodiac="Aquarius"
    }else if
    (dayInput>=19 && Number(monthInput)===2 || dayInput<=20&&Number(monthInput)===3){
        console.log("You are a Pisces")
        zodiac="Pisces"
    }
    document.querySelector(".zodiac").innerHTML=`You are a ${zodiac}` 

    }
}




//if all the conditions above valuate to false, it means the user provided the right information






)
console.log(Math.abs(-5))