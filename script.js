// function namaztime(latitude, longitude){

//   userlat = latitude;
//   userlong = longitude;
//   function getCurrentDate() {
//     // Create a new Date object
//     var currentDate = new Date();
  
//     // Extract the components of the current date
//     var year = currentDate.getFullYear();
//     var month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
//     var day = currentDate.getDate();
  
//     // Format the date as desired (e.g., YYYY-MM-DD)
//     var formattedDate = (day < 10 ? '0' + day : day) + '-' + (month < 10 ? '0' + month : month) + '-' + year ; 
//     // Return the formatted date
//     return formattedDate;
//   }
  
//   // Example usage:
//   var currentDate = getCurrentDate();
//   console.log(currentDate); // Output: YYYY-MM-DD (e.g., 2024-03-12)
  
//   const c_date = document.getElementById('date');
//   c_date.textContent = currentDate;

//   const fajr = document.getElementById('fajar');
//   const zohar = document.getElementById('zohar');
//   const asr = document.getElementById('asr');
//   const maghrib = document.getElementById('magrib');
//   const isha = document.getElementById('isha');
//   const sahri = document.getElementById('sahari');
//   const sunrise = document.getElementById('sunrise');
//   const Sunset = document.getElementById('sunset');
//   const h_date = document.getElementById('hijri_date');

  
//   var url = `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${userlat}&longitude=-${userlong}&method=2`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       var prayerTimes = data.data[0].timings;
//       fajr.textContent = prayerTimes.Fajr;
//       zohar.textContent = prayerTimes.Dhuhr;
//       asr.textContent = prayerTimes.Asr;
//       maghrib.textContent = prayerTimes.Maghrib;
//       isha.textContent = prayerTimes.Isha;
//       sahri.textContent = prayerTimes.Imsak;
//       sunrise.textContent = prayerTimes.Sunrise;
//       Sunset.textContent = prayerTimes.Sunset;
//       isha.textContent = prayerTimes.Isha;
      
      
//       var tareeh = data.data[0].date;
//       h_date.textContent = tareeh.hijri.date;
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
// } else { 
//     console.error("Geolocation is not supported by this browser.");
// }

// function showPosition(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     console.log("Latitude: " + latitude);
//     console.log("Longitude: " + longitude);
//     // Update HTML elements with latitude and longitude
//     namaztime(latitude, longitude);
// }


function namaztime(latitude, longitude) {
  const currentDate = getCurrentDate();
  const c_date = document.getElementById('date');
  c_date.textContent = currentDate;

  const fajr = document.getElementById('fajar');
  const zohar = document.getElementById('zohar');
  const asr = document.getElementById('asr');
  const maghrib = document.getElementById('magrib');
  const isha = document.getElementById('isha');
  const sahri = document.getElementById('sahari');
  const sunrise = document.getElementById('sunrise');
  const Sunset = document.getElementById('sunset');
  const zawal = document.getElementById('zawal');
  const h_date_day = document.getElementById('hijri_date_day');
  const h_date_month = document.getElementById('hijri_date_mon');
  const h_date_year = document.getElementById('hijri_date_year');


  const url = `https://api.aladhan.com/v1/timings/${currentDate}?latitude=${latitude}&longitude=${longitude}&method=2`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const prayerTimes = data.data.timings;

      fajr.textContent = prayerTimes.Fajr;
      zohar.textContent = prayerTimes.Dhuhr;
      asr.textContent = prayerTimes.Asr;
      maghrib.textContent = prayerTimes.Maghrib;
      isha.textContent = prayerTimes.Isha;
      sahri.textContent = prayerTimes.Imsak;
      sunrise.textContent = prayerTimes.Sunrise;
      Sunset.textContent = prayerTimes.Sunset;
      isha.textContent = prayerTimes.Isha;
      zawal.textContent = prayerTimes.Midnight;
      const tareeh = data.data.date;
      h_date_day.textContent = tareeh.hijri.day;
      h_date_month.textContent = tareeh.hijri.month.en;
      h_date_year.textContent = tareeh.hijri.year;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
  const day = currentDate.getDate();
  return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.error("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
  namaztime(latitude, longitude);
}
