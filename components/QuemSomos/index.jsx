import React from 'react';

import {
  InputGroup,
  InputRightElement,
  Input,
  Button
} from '@chakra-ui/react';
import Provider from '../Provider';

import styles from './index.module.css';

export default function QuemSomos() {
  const inputRef = React.useRef();
  const [formResult, setFormResult] = React.useState({
    success: false,
    failed: false
  });

  const handleSubmit = async event => {
    if(inputRef.current.value.length <= 1)
      return alert('Por favor insira alguma forma de contato! =)')

    let url = 'https://api.sheety.co/5095dd603a1271ee4cbd4c0455ded7af/refatorandoNovoLead/novos';
    let body = {
      novo: {
        "carimboDeData/hora": new Date(Date.now()).toString(),
        "eMailOuTelefone": inputRef.current.value,
      }
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(response => response.json())
    .then(json => console.log(json))

  }

  return (
    <div className={styles.quemSomos} id="form">
      <Provider>
        <div className={`${styles.flexSection} ${styles.glass}`}>
          <div className={styles.flexItem}>
            <h3>Quem somos?</h3>
            <p>Somos uma boutique de softwares fundada em outubro de 2020. O que nos motivou? O amor pela tecnologia, claro!</p>
            <p>Nossa missão é fazer com que a tecnologia alcance todas as empresas, sejam elas de pequeno, médio ou grande porte.</p>
            <p>Tire suas ideias do papel e conquiste seu espaço nessa nova era digital. Aqui, você encontra tecnologia de ponta em sites personalizados e 100% dinâmicos. Não perca mais tempo, deixe seu e-mail e entraremos em contato:</p>

            <form>

              <InputGroup
                size="lg"
                marginTop="40px"
              >
                <Input
                  ref={inputRef}
                  pr="4.5rem"
                  type="text"
                  placeholder="E-mail ou telefone"
                  name="entry.1016635699"
                  color="#f1f1f1"
                />
                <InputRightElement width="34%">
                  <Button
                    onClick={handleSubmit}
                    size="lg"
                    variant="solid"
                    colorScheme="blue"
                    h="100%"
                    w="100%"
                    _hover={{
                      background: '#44AEB5',
                      filter: 'brightness(90%)'
                    }}
                  >
                    Enviar
                  </Button>
                </InputRightElement>
              </InputGroup>
            </form>
          </div>
          <div className={styles.flexItem}>
            <img src="/notebook.png" alt="Notebook" />
          </div>
        </div>
      </Provider>
    </div >
  );
};
