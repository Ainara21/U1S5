fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
    })
    .then(data => {
        const contenedor = document.getElementById("listaUsuarios");

        /* contenedor.innerHTML = ""; // limpiar antes */
        data.forEach(user => {
            const {
                id,
                name,
                username,
                email,
                phone,
                company: { name: companyName } = {},
                address: { street, suite, city } = {}
            } = user;
            const edad = Math.floor(Math.random() * (50 - 25 + 1)) + 25;

            console.log(name, email);

            const card = document.createElement('div');
            card.className = 'user-card';
            card.innerHTML = `
  <div class=infoPrincipal>
  
     <img src="./assets/img/${id}.jpeg" alt="hola"> 
     <div class=texto>
       <h2>${name}</h2>
       <p>Usuario: ${username}</p>
       <p>Edad: ${edad}</p>
       <p>Email: ${email}</p>
       <p>Teléfono: ${phone}</p>
     <div class=infoSec>
     <p>Compañía: ${companyName}</p>
     <p>Ciudad: ${city}</p>
     <p>Calle: ${street}</p>
     <p>Piso: ${suite}</p>
     </div>
     </div>

    </div>

  `;
            contenedor.appendChild(card);
        });

    })
    .catch(err => {
        console.error("Error:", err);
    });