export default function Table(props: { setVisible: () => void }) {
  return (
    <div>
      <h1>Lista de usuários</h1>

      <div className="formButtons">
        <button onClick={() => props.setVisible()}>Criar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>João</td>
            <td>22</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ana</td>
            <td>32</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pedro</td>
            <td>12</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Carlos</td>
            <td>12</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Maria</td>
            <td>56</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
