const BASE_URL = "https://event-management-system-2-ac20.onrender.com";

/* =========================
   REGISTER (UNCHANGED)
========================= */
window.registerUser = async function () {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    const response = await fetch(`${BASE_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    alert(data.message);
};


/* =========================
   LOGIN (UNCHANGED)
========================= */
window.validateLogin = async function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
        window.location.href = "Homepage.html";
    } else {
        document.getElementById("error-msg").innerText = data.message;
    }
};


/* =========================
   SAVE ATTENDANCE (FIXED)
========================= */
window.saveAttendance = async function () {

    const rows = document.querySelectorAll(".attendance-table tbody tr");

    const eventName = document.getElementById("eventName").value || "General Event";
    const eventDate = document.getElementById("eventDate").value || "";

    const attendanceList = [];

    rows.forEach(row => {

        const cells = row.querySelectorAll("td");

        const name = cells[0].innerText.trim();
        const birthdate = cells[1].innerText.trim();
        const email = cells[2].innerText.trim();

        if (name && birthdate && email) {
            attendanceList.push({
                event: eventName,
                eventDate: eventDate,
                name,
                birthdate,
                email
            });
        }
    });

    if (attendanceList.length === 0) {
        alert("Please fill at least one row");
        return;
    }

    const response = await fetch(`${BASE_URL}/api/attendance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(attendanceList)
    });

    const data = await response.json();
    alert(data.message);

    if (data.success) {
        window.location.href = "AttendanceRecords.html";
    }
};


/* =========================
   LOAD RECORDS
========================= */
window.loadRecords = async function () {

    const table = document.getElementById("recordsTable");
    if (!table) return;

    const response = await fetch(`${BASE_URL}/api/attendance`);
    const data = await response.json();

    table.innerHTML = "";

    data.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.event}</td>
                <td>${item.eventDate}</td>
                <td>${item.name}</td>
                <td>${item.birthdate}</td>
                <td>${item.email}</td>
            </tr>
        `;
    });
};


/* =========================
   SEARCH
========================= */
window.searchRecords = function () {

    const filter = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#recordsTable tr");

    rows.forEach(row => {
        const name = row.cells[2]?.innerText.toLowerCase() || "";
        row.style.display = name.includes(filter) ? "" : "none";
    });
};


/* =========================
   CLEAR
========================= */
window.clearAttendance = function () {
    document.querySelectorAll("td[contenteditable]").forEach(td => td.innerText = "");
};


/* =========================
   AUTO LOAD
========================= */
window.addEventListener("load", () => {
    if (document.getElementById("recordsTable")) {
        loadRecords();
    }
});
