import React, { useState } from 'react';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';

export default function MotoInfo() {

  const brands = ['Hyundai', 'JAC', 'Foton', 'Chevrolet'];
  const capacity = ['150 Kg', '200 Kg', '300 Kg', '400 Kg'];

  const [brand, setBrand] = useState('');
  const [kg, setcKg] = useState('');
  const [plateNum, setPlateNum] = useState('');

  const handleChangeBrand = (e) => {
    setBrand(e.currentTarget.value);
  }

  const handleChangeCapacity = (e) => {
    setcKg(e.currentTarget.value);
  }

  const handleChangePlateNum = (e) => {
    setPlateNum(e.currentTarget.value);
  }

  return (
    <React.Fragment>
      <Container>
            <div>
              <Label htmlFor="brand">Marca</Label>
              <Select
                value={brand}
                id="brand"
                name="brand"
                onChange={e => handleChangeBrand(e)}
                type="text"
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
              <Label htmlFor="capacity">Cilindraje</Label>
              <Select
                value={kg}
                id="capacity"
                name="capacity"
                onChange={e => handleChangeCapacity(e)}
                type="text"
              >
              <option value="">-- Seleccione capacidad Máxima --</option> 
              {
                capacity.map((kg) => <option key={kg} value={kg}>{kg}</option>)
              } 
              </Select>
            </div>
          </Container>
          <StyledInput
            value={plateNum}
            name="plateNum"
            onChange={e => handleChangePlateNum(e)}
            children="Placa"
            type="text"
          />
    </React.Fragment>
  );
}
