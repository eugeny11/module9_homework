const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

const data = JSON.parse(jsonString);
const list = data.list;

let result = {
    list: []
};

for (i=0; i<list.length; i++){
    let worker = {
        name: list[i].name,
        age: Number(list[i].age),
        prof: list[i].prof,
    };
    result.list.push(worker);
}

console.log(result);