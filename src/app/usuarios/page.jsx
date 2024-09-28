
const getUsuarios=async()=>
  {
    const res = await fetch("http://localhost:3001/usuarios", { cache: 'no-store' });
    return res;
  
  }
export default async function Usuarios() {
  const usuarioss=await getUsuarios();
  const usuarios=await usuarioss.json();
    return (<main >

      <div>lista de usuarios</div>

      <table>
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map((a)=>
       {
        return (
          <tr>
        <td >{a.nombres}</td>
        <td >{a.apellidos}</td>
        <td >{a.telefono}</td>
        </tr>)
})}
        </tbody>
    </table>
    
</main>);
}