const usuarios = [
    {
        nombre: "Juan Pérez",
        rol: "maestro",
        isActive: true
    },
    {
        nombre: "María García",
        rol: "administrador",
        isActive: false
    },
    {
        nombre: "Pedro Sánchez",
        rol: "alumno",
        isActive: true
    },
    {
        nombre: "Ana Rodríguez",
        rol: "maestro",
        isActive: false
    },
    {
        nombre: "Carlos López",
        rol: "administrador",
        isActive: true
    },
    {
        nombre: "Sofía Martínez",
        rol: "alumno",
        isActive: false
    },
    {
        nombre: "Laura Torres",
        rol: "maestro",
        isActive: true
    },
    {
        nombre: "David González",
        rol: "administrador",
        isActive: false
    },
    {
        nombre: "Isabel Castro",
        rol: "alumno",
        isActive: true
    },
    {
        nombre: "Marcos Rivera",
        rol: "maestro",
        isActive: false
    }
];


const ADM = ['Usuarios', 'Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
const MAESTRO = ['Calificaciones', 'Alumnos', 'Blogs', 'Materias'];
const ALUMNOS = ['Calificaciones', 'Blogs', 'Materias'];

const menuList = document.querySelector('#menuList')
const search = document.querySelector('#search');
const resultList = document.querySelector('#resultList');
const rol = document.querySelector('#rol');
const nombre_usuario = document.querySelector('#nombre-usuario');
const rolContainer = document.querySelector('#rolContainer');
const cerrar = document.querySelector('#cerrar');

 
 function filterUsers(searchValue) {
   let filterData =  usuarios.filter(usuario => 
        
        usuario.nombre.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
        return filterData
 }
 
 search.addEventListener('input', (e)=>{

     let results  = filterUsers(search.value)

     resultList.innerHTML = '';

    if(search.value.length > 0){
         
     results.forEach(rs =>{

           const li = document.createElement('li');
           li.textContent = rs.nombre

           resultList.appendChild(li);

     })
    }

 } )

 resultList.addEventListener('click', function (e){
    //Raysell
    const clickItem = e.target.textContent;
   
    const selectedUser = usuarios.filter(user => clickItem === user.nombre);
    
    nombre_usuario.textContent = selectedUser[0].nombre
    rolContainer.textContent = selectedUser[0].rol
    menuListNav(selectedUser[0].rol)
    
 })

 function menuListNav(rol){
    
    menuList.innerHTML = '';

    let optionMenu = []; 
    if(rol === 'adminstrador'){
        optionMenu = ADM;
    }else if( rol === "maestro"){
        optionMenu = MAESTRO;
    }else if( rol === 'alumno'){
        optionMenu = ALUMNOS
    }else{
        optionMenu = []
    }

    optionMenu.forEach(option => {
        const menuItem = document.createElement('li')
        menuItem.textContent = option;
        menuList.appendChild(menuItem);
    })
 }
  



 