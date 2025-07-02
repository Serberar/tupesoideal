import React from 'react';

const CampoEditable = ({ 
  label, 
  name, 
  type = "text", 
  valor, 
  enEdicion, 
  onCambiar, 
  onGuardar, 
  onCancelar, 
  onEditar 
}) => (
  <div className="campoEditable">
    <label>{label}:</label>
    {enEdicion ? (
      <>
        <input
          type={type}
          name={name}
          value={valor || ""}
          onChange={onCambiar}
        />
        <button className="guardarBtn" onClick={onGuardar}>
          Guardar
        </button>
        <button className="cancelarBtn" onClick={onCancelar}>
          Cancelar
        </button>
      </>
    ) : (
      <>
        <span>{valor || "No disponible"}</span>
        <button className="editarBtn" onClick={() => onEditar(name)}>
          Editar
        </button>
      </>
    )}
  </div>
);

export default CampoEditable;