import React from 'react';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';

export default function MotoInfo(props) {

  const brands = ['Honda', 'Kawasaki', 'Auteco'];
  const ccs = ['50cc - 100cc', '100cc - 200cc', '200cc - 300cc', 'Más de 300cc'];
  const motoTypes = ['Moto', 'Cuatrimoto'];

  return (
    <React.Fragment>
      <Container>
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
      </Container>
      <Container>
          <Label htmlFor="cc">Cilindraje</Label>
          <Select
            value={props.cc}
            id="cc"
            name="cc"
            onChange={props.onChange}
            type="text"
            required
            disabled={props.edit}
          >
          <option value="">-- Seleccione el Cilindraje --</option> 
          {
            ccs.map((cc) => <option key={cc} value={cc}>{cc}</option>)
          } 
          </Select>
      </Container>
      <Container>
          <Label htmlFor="type">Tipo</Label>
          <Select
            value={props.type}
            id="type"
            name="type"
            onChange={props.onChange}
            type="text"
            required
            disabled={props.edit}
          > 
          <option value="">-- Seleccione tipo de Moto --</option> 
          {
            motoTypes.map((motoType) => <option key={motoType} value={motoType}>{motoType}</option>)
          } 
          </Select>
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
      <StyledInput
        value={props.weight}
        name="weight"
        onChange={props.onChange}
        children="Peso (Kg)"
        type="text"
        required
        disabled={props.edit}
      />
    </React.Fragment>
  );
}