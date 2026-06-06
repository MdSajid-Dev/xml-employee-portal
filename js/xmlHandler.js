function generateXML(employees){

    let xml =
`<?xml version="1.0"?>

<employees>
`;

    employees.forEach(emp=>{

        xml += `
    <employee id="${emp.id}">
        <name>${emp.name}</name>
        <department>${emp.department}</department>
        <salary>${emp.salary}</salary>
    </employee>
`;
    });

    xml += `
</employees>`;

    return xml;
}

function parseXML(xmlText){

    const parser =
        new DOMParser();

    const xmlDoc =
        parser.parseFromString(
            xmlText,
            "application/xml"
        );

    const employeeNodes =
        xmlDoc.getElementsByTagName(
            "employee"
        );

    const employees=[];

    for(let i=0;i<employeeNodes.length;i++){

        const emp=employeeNodes[i];

        employees.push(

            new Employee(

                emp.getAttribute("id"),

                emp.getElementsByTagName(
                    "name"
                )[0].textContent,

                emp.getElementsByTagName(
                    "department"
                )[0].textContent,

                emp.getElementsByTagName(
                    "salary"
                )[0].textContent
            )
        );
    }

    return employees;
}