"use client";

import {useRouter} from "next/navigation";

export default function Home() {
  const {push} =useRouter();
    
  const hUClick = ()=>
  {
    push(`/usuarios`);
  }
  const hHClick = ()=>
    {
      push(`/hobbies`);
    }


    return (<main >

      <div className="fondo-ini"><p >Bienvenido a Hobbies, donde puedes ver los hobbies y usuarios.</p>
    <button onClick={hUClick} className="button-op">Ver Usuarios</button>
    <button onClick={hHClick} className="button-op">Ver Hobbies</button></div>
    
</main>);
}
