const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

  const xmlDOM = parser.parseFromString(xmlString, "text/xml");

  const studentNode = xmlDOM.querySelectorAll("student");

  let result = {
      list: []
  };
  
  for (let i=0; i < studentNode.length; i++){

    firstName = studentNote[i].querySelector('first').textContent;
    lastName = studentNode[i].querySelector('second').textContent;
    age = Number(studentNode[i].querySelector('age').textContent);
    prof = studentNode[i].querySelector('prof').textContent;
    lang = studentNode[i].querySelector('name').getAttribute('lang');

    let student = {
        name: `${firstName} ${lastName}`,
        age: age,
        prof: prof,
        lang: lang
    }

    result.list.push(student);
  }

  console.log(result);