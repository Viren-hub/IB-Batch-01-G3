function openFunction() {
    document.getElementById("menu").style.width = "300px";
    document.getElementById("mainbox").style.marginLeft = "300px";
    document.getElementById("mainbox").innerHTML = "Welcome";
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginLeft = "0px";
    document.getElementById("mainbox").innerHTML = "&#9776;Open";
}

fetch('https://api.covid19api.com/dayone/country/india').then((data) => {

    return data.json();
}).then((objectData) => {
    console.log(objectData[0].ID);


    let tableData = "";

    objectData.map((values) => {
        tableData += `<tr>

        <td data-aos="fade-up">${values.ID}</td>
         <td data-aos="fade-down">${values.Country}</td>
         <td data-aos="fade-right">${values.CountryCode}</td>
         <td data-aos="fade-up-left">${values.Provience}</td>
         <td data-aos="fade-down-right">${values.Lat}</td>
         <td data-aos="slide-up">${values.Lon}</td>
         <td data-aos="slide-left">${values.Confirmed}</td>
         <td data-aos="zoom-out">${values.Deaths}</td>
         <td data-aos="fade-up-left">${values.Recovered}</td>
         <td data-aos="slide-down">${values.Active}</td>
         <td data-aos="fade-down">${new Date(values.Date).toLocaleDateString()}</td>
     </tr>`;

    });

    document.getElementById("tablebody").innerHTML = tableData;
    $(document).ready(function () {
        $('.table').DataTable({
            "order": [[10, "desc"]]
        });
    });
})



    function call(name) {
        fetch(`https://api.covid19api.com/dayone/country/${name}`).then((data) => {

            return data.json();
        }).then((objectData) => {
            console.log(objectData[0].ID);


            let tableData = "";

            objectData.map((values) => {
                tableData += `<tr>

         <td data-aos="fade-up">${values.ID}</td>
         <td data-aos="fade-down">${values.Country}</td>
         <td data-aos="fade-right">${values.CountryCode}</td>
         <td data-aos="fade-up-left">${values.Provience}</td>
         <td data-aos="fade-down-right">${values.City}</td>
         <td data-aos="flip-up">${values.CityCode}</td>
         <td data-aos="fade-down-right">${values.Lat}</td>
         <td data-aos="slide-up">${values.Lon}</td>
         <td data-aos="slide-left">${values.Confirmed}</td>
         <td data-aos="zoom-out">${values.Deaths}</td>
         <td data-aos="fade-up-left">${values.Recovered}</td>
         <td data-aos="slide-down">${values.Active}</td>
         <td data-aos="fade-down">${new Date(values.Date).toLocaleDateString()}</td>
     </tr>`;

            });
            document.getElementById("tablebody").innerHTML = tableData;
            //  $(document).ready(function () {
            //      $('.table').DataTable({
            //          "order": [[10, "desc"]]
            //      });
            //  });
        });

    }




