let employees=[];

function addEmployee(){

    const id =
        document.getElementById("id").value;

    const name =
        document.getElementById("name").value;

    const department =
        document.getElementById(
            "department"
        ).value;

    const salary =
        document.getElementById(
            "salary"
        ).value;

    const emp =
        new Employee(
            id,
            name,
            department,
            salary
        );

    employees.push(emp);

    renderTable();
}

function renderTable(){

    let html = `
    <table>

    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
    </tr>
`;

    employees.forEach(emp=>{

        html += `
        <tr>

            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>

        </tr>
`;
    });

    html += "</table>";

    document.getElementById(
        "tableContainer"
    ).innerHTML=html;
}

function exportXML(){

    const xml =
        generateXML(employees);

    const blob =
        new Blob(
            [xml],
            {
                type:"application/xml"
            }
        );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "employees.xml";

    link.click();
}

function importXML(){

    const file =
        document.getElementById(
            "xmlFile"
        ).files[0];

    const reader =
        new FileReader();

    reader.onload =
        function(e){

        employees =
            parseXML(
                e.target.result
            );

        renderTable();
    };

    reader.readAsText(file);
}