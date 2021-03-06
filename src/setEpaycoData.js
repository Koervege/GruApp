export function setEpaycoData (id, cost, initLoc, finalLoc, name){
    
  return {
    external: 'false',
    autoclick: 'false',
  
    tax: '0',
    tax_base: '0',
    amount: `${cost}`,
    name: 'Servicio Gruapp',
    description: `${initLoc} hasta ${finalLoc}`,
    currency: 'cop',
  
    country: 'CO',
    lang: 'en',
  
    invoice: `${id}`,
    extra1: 'extra1',
    extra2: 'extra2',
    extra3: 'extra3',
  
    response: `${process.env.REACT_APP_BASE_URL}/response`,
  
    name_billing: `${name}`,
    address_billing: 'Calle 54 # 189 - 12',
    type_doc_billing: 'CC',
    number_doc_billing: '42897345435',
    mobilephone_billing: '3289241754',
  
    methodsDisable: ["CASH", "SP", "DP", "PSE"],
  }
}

export const handler = window.ePayco.checkout.configure({
  key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
  test: true
})

