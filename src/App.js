import React, { useState } from 'react';

export default function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [listInvited, setListInvited] = useState([]);
  
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const sendInvited = (e) => {
    e.preventDefault();
    const invited = {
      id: listInvited.length + 1,
      name,
      surname
    };
    setListInvited([...listInvited, invited]);
    setName('');
    setSurname('');
  } 

  return (
    <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={sendInvited}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={name} onChange={handleChangeName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={surname} onChange={handleChangeSurname}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary" >Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                  {listInvited.length > 0 && listInvited.map((elem) => 
                    (
                    <tr key={elem.id}>
                      <td>{elem.name}</td>
                      <td>{elem.surname}</td>
                    </tr>
                    ) 
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}




