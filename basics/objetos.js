// Objetos es una coleccion de datos
// a travez de key/value llave/valor
/*
 objeto ={
    key: 'valor',
    'Key': 'valor'
 }
 objeto.key
 objeto['key']
 */

 const alumno = {
    name: 'Steve',
    age: 21,
    city: 'Milan',
    califications: [10, 10, 8],
    career: 'TIADSM',
    'last name': 'Jobs',
    'gender': 'Male'
 }

 console.log(alumno);
 console.log(alumno.name);
 console.log(alumno.city);
 console.log(alumno['califications']);
 console.log(alumno['last name']);

 alumno.heigth = 1.75;
 console.log(alumno);

 const group = {
    name: '4A DSM',
    career: 'TIADSM',
    classroom: 'Lab Redes 1',
    subjects: ['Aplicaciones', 'Modelado', 'Data bases'],
    alumns: [alumno, alumno, alumno]
 }

 console.log(group);
 console.log(group.subjects[2]);
 console.log(group.alumns[0].califications[1]);