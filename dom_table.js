const userTable = [
    {
        Name: "giri",
        Dob: "18.3.1886",
        Email: "giri@gmail.com",
        Action: "click",
    },

    {
        Name: "chandhu",
        Dob: "11.11.2014",
        Email: "chandhu@gmail.com",
        Action: "click",
    },

    {
        Name: "dhakshi",
        Dob: "11.11.2015",
        Email: "dhakshi@gmail.com",
        Action: "click",
    },
    {
        Name: "sai",
        Dob: "18.5.1995",
        Email: "sai@gmail.com",
        Action: "click",
    }
];
console.log(userTable);
const add = document.createElement('button');
add.textContent = "Add";
add.addEventListener('click', () => {
    const tr = document.createElement("tr");
    userTable.push({
        Name: "cdg",
        Dob: "11.7.1990",
        Email: "cdg@gmail.com",
        Action: "click"
    });
    console.log(userTable, userTable.length);
     addTable([userTable[userTable.length + 1]]);
});
document.body.appendChild(add);

const table = document.createElement("table");
const headers = Object.keys(userTable[0]);
console.log(headers)
const tr_head = document.createElement('tr');
headers.forEach((x) => {
    const th = document.createElement('th');
    th.innerText = x;
    tr_head.append(th);
});
table.append(tr_head);

addTable(userTable);
function addTable(userTable) {
    userTable.forEach((each, i) => {
        const tr = document.createElement('tr');
        for (const key in each) {
            const td = document.createElement('td');
            const value = each[key];
            console.log(value);

            if (value === 'click') {
                const btn = document.createElement('button');
                btn.textContent = 'Click Me';
                btn.addEventListener('click', () => {
                    alert(each.Name);
                });
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.addEventListener('click', () => {
                    const index = userTable.indexOf('each');
                    userTable.splice(index, 1);
                    tr.remove();
                });
                td.append(btn, removeBtn);

            } else {
                td.innerText = value;

            }
            tr.append(td);
        }
        table.appendChild(tr)
    });

}
document.body.appendChild(table);




