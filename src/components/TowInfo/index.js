import React from 'react';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';

export default function TowInfo(props) {

  const brands = ['Hyundai', 'JAC', 'Foton', 'Chevrolet'];
  const capacity = ['150 Kg', '200 Kg', '300 Kg', '400 Kg'];

  return (
    <React.Fragment>
      <Container>
        <div>
          <Label htmlFor="brand">Marca</Label>
          <Select
            value={props.brand}
            id="brand"
            name="brand"
            onChange={props.onChange}
            type="text"
            required
            disabled={props.edit}
          >
          <option value="">-- Seleccione la Marca --</option> 
          {
            brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)
          }
          </Select>
        </div>
      </Container>
      <Container>
        <div>
          <Label htmlFor="capacity">Capacidad Grúa</Label>
          <Select
            value={props.capacity}
            id="capacity"
            name="capacity"
            onChange={props.onChange}
            type="text"
            required
            disabled={props.edit}
          >
          <option value="">-- Seleccione capacidad Máxima --</option> 
          {
            capacity.map((kg) => <option key={kg} value={kg}>{kg}</option>)
          } 
          </Select>
        </div>
      </Container>
      <StyledInput
        value={props.plateNum}
        name="plateNum"
        onChange={props.onChange}
        children="Placa"
        type="text"
        required
        disabled={props.edit}
      />
    </React.Fragment>
  );
}
