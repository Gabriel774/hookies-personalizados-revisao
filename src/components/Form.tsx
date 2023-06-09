export default function Form(props: { setVisible: () => void }) {
  return (
    <div className="form">
      <h1>Criar Novo usuário</h1>

      <div className="inpContainer">
        <span>ID</span>
        <input type="number" />
      </div>
      <div className="inpContainer">
        <span>Nome</span>
        <input type="text" />
      </div>
      <div className="inpContainer">
        <span>Idade</span>
        <input type="number" />
      </div>

      <div className="formButtons">
        <button className="marginRight" onClick={() => props.setVisible()}>
          Voltar
        </button>
        <button>Salvar</button>
      </div>
    </div>
  );
}
