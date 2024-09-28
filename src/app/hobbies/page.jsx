import Link from 'next/link'

let getHobbies=async()=>
{
  const res = await fetch("http://localhost:3001/hobbies", { cache: 'no-store' });
  return res;

}

export default async function Hobbies() {
    const hobbiess=await getHobbies();
    const hobbies=await hobbiess.json();
    return (<main >

      <div>lista de hobbies </div>
      
<table>
        <thead>
            <tr>
                <th>Hobbie</th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
        {hobbies.map((a)=>
       {
        return (
          <tr>
        <td >{a.nombre}</td>
        <td >{a.descripcion}</td>
        </tr>)
})}
        </tbody>
    </table>
      
      <button  className="button-op"><Link href="/nuevoHobbie">Agregar Hobby</Link></button>
    
</main>);
}