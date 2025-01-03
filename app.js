/*
1. Ejecución del Ejercicio:
  - Crea un archivo llamado `app.js` donde irá tu código.

2. Creación del Servidor:
  - Configura un servidor Express.
  - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), etc...
  - Implementa el manejo de errores 404 para rutas no definidas.
  - Las rutas serán las mismas de las `specialty` (abajo hay un objeto con datos que usarás para crear lo qiue pide el ejercicio)



/*4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.*/



const express=require ("express")
const app= express() //podemos llamarle app o como queramos pero lo mas habitual es app

app.get("/",(req,res)=>{ //HOME
  res.send(`
    <a href="/marketing">marketing</a> <a href="/ventas">ventas</a> <a href="/developers">developers</a> <a href="/QAs">QAs</a>`+req.path+`<h1>HOME</h1>` )// `req.path` para obtener el path actual y muestra esa información en la respuesta.
    console.log(req.path)
})

//////////////////MARKETING////////////////////////
app.get("/marketing", (req, res) => {
  const marketingSpecialty = usersData.filter(
    (user) => user.specialty === "marketing"
  );

  // Construir el contenido HTML dinámicamente
  let content = `
    <a href="/">home</a>${req.path}
    <!DOCTYPE html>
    <html>
      <head>
        <title>MARKETING</title>
      </head>
      <body>
        <h1>MARKETING</h1> 
        <h2>Total de usuarios especializados en Marketing: ${marketingSpecialty.length}</h2>
        <ul>
  `;

  // Agregar cada usuario al contenido
  marketingSpecialty.forEach((user) => {
    content += `<li>Id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age} años</li>`;
  });

  // Finalizar el HTML
  content += `
  </ul>
  </body>
  </html>
  `;

  // Enviar todo el contenido al cliente
  res.send(content);
});


//////////////////DEVELOPERS////////////////////////

app.get("/developers",(req,res)=>{
  const marketingSpecialty = usersData.filter(
    (user) => user.specialty === "developers"
  );

  // Construir el contenido HTML dinámicamente
  let content = `
    <a href="/">home</a>${req.path}
    <!DOCTYPE html>
    <html>
      <head>
        <title>DEVELOPERS</title>
      </head>
      <body>
        <h1>DEVELOPERS</h1> 
        <h2>Total de usuarios especializados en Marketing: ${developersSpecialty.length}</h2>
        <ul>
  `;

  // Agregar cada usuario al contenido
  developersSpecialty.forEach((user) => {
    content += `<li>Id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age} años</li>`;
  });

  // Finalizar el HTML
  content += `
  </ul>
  </body>
  </html>
  `;

  // Enviar todo el contenido al cliente
  res.send(content);
});

//////////////////QAs////////////////////////

app.get("/QAs",(req,res)=>{
  const quasSpecialty = usersData.filter(
    (user) => user.specialty === "developers"
  );

  // Construir el contenido HTML dinámicamente
  let content = `
    <a href="/">home</a>${req.path}
    <!DOCTYPE html>
    <html>
      <head>
        <title>QAs</title>
      </head>
      <body>
        <h1>QAs</h1> 
        <h2>Total de usuarios especializados en Marketing: ${qasSpecialty.length}</h2>
        <ul>
  `;

  // Agregar cada usuario al contenido
  qasSpecialty.forEach((user) => {
    content += `<li>Id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age} años</li>`;
  });

  // Finalizar el HTML
  content += `
  </ul>
  </body>
  </html>
  `;

  // Enviar todo el contenido al cliente
  res.send(content);
});

//////////////////VENTAS////////////////////////
app.get("/ventas",(req,res)=>{//VENTAS
  const quasSpecialty = usersData.filter(
    (user) => user.specialty === "developers"
  );

  // Construir el contenido HTML dinámicamente
  let content = `
    <a href="/">home</a>${req.path}
    <!DOCTYPE html>
    <html>
      <head>
        <title>VENTAS</title>
      </head>
      <body>
        <h1>VENTAS</h1> 
        <h2>Total de usuarios especializados en Marketing: ${ventasSpecialty.length}</h2>
        <ul>
  `;

  // Agregar cada usuario al contenido
  ventasSpecialty.forEach((user) => {
    content += `<li>Id: ${user.id}, Nombre: ${user.name}, Edad: ${user.age} años</li>`;
  });

  // Finalizar el HTML
  content += `
  </ul>
  </body>
  </html>
  `;

  // Enviar todo el contenido al cliente
  res.send(content);
});

app.use((req,res)=>{//ERROR 404
  res.status(404).send(`<h1>Página no encontrada</h1><a href="/">home</a>`+req.path)// `req.path` para obtener el path actual y muestra esa información en la respuesta.
  console.log(req.path)
})

app.listen(3000,()=>{
 console.log("Node.js esta escuchando en el puerto 3000");
});


/*
principal (/)
'marketing'
'developers'
'QAs'
'ventas'
*/

/*3. Filtrado de Usuarios por Especialidad:
  - Crea una función para filtrar usuarios por su especialidad.*/
  const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  console.log(usersData)



const marketingSpecialty=usersData.filter (user=>user.specialty==="marketing")
console.log("Detalle de cada usuario:", marketingSpecialty)//detalle de cada usuario
console.log("Total de usuarios:" ,marketingSpecialty.length) //contador usuarios en cada especialidad

const ventasSpecialty=usersData.filter (user=>user.specialty==="ventas")
console.log("Detalle de cada usuario:", ventasSpecialty)//detalle de cada usuario
console.log("Total de usuarios:",ventasSpecialty.length)//contador usuarios en cada especialidad

const developersSpecialty=usersData.filter (user=>user.specialty==="developers")
console.log("Detalle de cada usuario:", developersSpecialty)//detalle de cada usuario
console.log("Total de usuarios:" , developersSpecialty.length)//contador usuarios en cada especialidad

const qasSpecialty=usersData.filter (user=>user.specialty==="QAs")
console.log("Detalle de cada usuario:", qasSpecialty)//detalle de cada usuario
console.log("Total de usuarios:" ,qasSpecialty.length)//contador usuarios en cada especialidad



