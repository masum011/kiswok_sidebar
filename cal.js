function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(2015, 2030);
document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;


// monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}
var coronaT = "work form home";

function showCalendar(month, year) {
    var firstDay = (new Date(year, month)).getDay();
    tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";
    // monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    // creating all cells
    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode(" ");
                // cell.appendChild(cellText);

                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);

                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";

                cell.innerHTML = `
                
                <div class="div_d">
                <span class="hover_my">${year} ${months[month]} ${date}work form home <b>p</b></span>
                <div class="divbtn>
                <span class="dt"> ${date}</span>
                <span class="status"></span>
                </div>
                <hr>
                <div class="botton_div div_d">
                <span class="attStatus">work from home<span>
                </div>
                <span class="attdent">p</span>
                </div>
                
                `
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.className = "date-picker selected hoverjs";
                }
                if (date == 7 && year == '2021' && month == '12') {
                    cell.style.backgroundColor = "red";
                }
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
cell.onmouseover = "onmous()";

function onmous() {
    alert('ok');
}
let hov = document.getElementsByClassName('hoverjs');
console.log(hov[0]);

// let cal=document.getElementById('calendar-body');
// // console.log(cal);
// console.log(cal);
// console.log('<br>');
// let tr_tag=(cal.children);
// console.log(tr_tag);
// tr_tag.style.backgroundColor= "red";