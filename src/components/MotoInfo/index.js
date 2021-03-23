import React from 'react';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';

export default function MotoInfo(props) {

  const brands = ['Honda', 'Kawasaki', 'Auteco'];
  const ccs = ['50cc - 100cc', '100cc - 200cc', '200cc - 300cc', 'Más de 300cc'];
  const motoTypes = ['Moto', 'Cuatrimoto'];

  const handleChange = (e) => {
    props.onChange(e);
  }

  return (
    <React.Fragment>
      <Container>
        <div>
          <Label htmlFor="brand">Marca</Label>
          <Select
            value={props.brand}
            id="brand"
            name="brand"
            onChange={handleChange}
            type="text"
            required
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
          <Label htmlFor="cc">Cilindraje</Label>
          <Select
            value={props.cylCap}
            id="cc"
            name="cc"
            onChange={handleChange}
            type="text"
            required
          >
          <option value="">-- Seleccione el Cilindraje --</option> 
          {
            ccs.map((cc) => <option key={cc} value={cc}>{cc}</option>)
          } 
          </Select>
        </div>
      </Container>
      <Container>
        <div>
          <Label htmlFor="type">Tipo</Label>
          <Select
            value={props.motoType}
            id="type"
            name="type"
            onChange={handleChange}
            type="text"
            required
          > 
          <option value="">-- Seleccione tipo de Moto --</option> 
          {
            motoTypes.map((motoType) => <option key={motoType} value={motoType}>{motoType}</option>)
          } 
          </Select>
        </div>
      </Container>
      <StyledInput
        value={props.plateNum}
        name="plateNum"
        onChange={handleChange}
        children="Placa"
        type="text"
        required
      />
      <StyledInput
        value={props.weight}
        name="weight"
        onChange={handleChange}
        children="Peso (Kg)"
        type="text"
        required
      />
    </React.Fragment>
  );
}