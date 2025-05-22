import { table } from "console";
import Link from "next/link";

export default async function Home(){


  const data = await fetch('http://localhost:8000/usuarios');

  const json = await data.json();

  const users = json.data;

  console.log(users['id'])


  return (
  
    <main className="container">
      <table className="table my-5">
        <thead>
          <tr className="teste">
            <th>Id</th>
            <th>Nome</th>
            <th>email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Editar</td>
            </tr>
          ))}
        </tbody>


      </table>
    </main>

  )
}