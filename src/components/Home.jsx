import React from 'react';
import { Table } from 'react-bootstrap';

export function Home() {
  return (
    <div className="main-site">
      <h1>Bienvenido!</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Primer apellido</th>
            <th>Nombre usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Angel</td>
            <td>del Rio</td>
            <td>@angeldelrio23</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Manuel</td>
            <td>David</td>
            <td>@Supermanu545</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Alejandro Fernández</td>
            <td>@shurklex</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
