import React, { useState } from 'react';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';

export default function MotoInfo() {

  const brands = ['Honda', 'Kawasaki', 'Auteco'];
  const ccs = ['50cc - 100cc', '100cc - 200cc', '200cc - 300cc', 'Más de 300cc'];
  const motoTypes = ['Moto', 'Cuatrimoto'];

  const [brand, setBrand] = useState('');
  const [cylCap, setcylCap] = useState('');
  const [motoType, setMotoType] = useState('');
  const [plateNum, setPlateNum] = useState('');
  const [weight, setWeight] = useState('');

  const handleChangeBrand = (e) => {
    setBrand(e.currentTarget.value);
  }

  const handleChangeCyl = (e) => {
    setcylCap(e.currentTarget.value);
  }

  const handleChangeType = (e) => {
    setMotoType(e.currentTarget.value);
  }

  const handleChangePlateNum = (e) => {
    setPlateNum(e.currentTarget.value);
  }

  const handleChangeWeight = (e) => {
    setWeight(e.currentTarget.value);
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
              <Label htmlFor="cc">Cilindraje</Label>
              <Select
                value={cylCap}
                id="cc"
                name="cc"
                onChange={e => handleChangeCyl(e)}
                type="text"
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
                value={motoType}
                id="type"
                name="type"
                onChange={e => handleChangeType(e)}
                type="text"
              > 
              <option value="">-- Seleccione tipo de Moto --</option> 
              {
                motoTypes.map((motoType) => <option key={motoType} value={motoType}>{motoType}</option>)
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
          <StyledInput
            value={weight}
            name="weight"
            onChange={e => handleChangeWeight(e)}
            children="Peso"
            type="text"
          />
    </React.Fragment>
  );
}