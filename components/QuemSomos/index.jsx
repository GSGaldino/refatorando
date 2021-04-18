import React from 'react';

import {
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Alert,
  AlertIcon,
  CloseButton,
  Slide
} from '@chakra-ui/react';

import Provider from '../Provider';

import styles from './index.module.css';

export default function QuemSomos() {
  const inputRef = React.useRef();
  const [formResult, setFormResult] = React.useState({
    loading: false,
    message: "Nenhuma",
    success: false,
    warning: false
  });

  const handleSubmit = async event => {
    event.preventDefault();
    setFormResult({
      ...formResult,
      loading: true,
    })

    if (inputRef.current.value.length <= 4) {
      setFormResult({
        ...formResult,
        loading: false,
        warning: true,
        message: "Por favor, insira alguma forma de contato válida! =)"
      })
      return inputRef.current.value = "";
    }

    let url = 'https://api.sheety.co/5095dd603a1271ee4cbd4c0455ded7af/refatorandoNovoLead/novos';
    let body = {
      novo: {
        "carimboDeData/hora": new Date(Date.now()).toString(),
        "eMailOuTelefone": inputRef.current.value,
      }
    }

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(json => {
        setFormResult({
          ...formResult,
          message: "Muito obrigado pelo interesse! Em breve nossa equipe entrará em contato. =)",
          success: true,
          warning: false,
          loading: false,
        })
        return inputRef.current.value = "";
      })
  }

  return (
    <div className={styles.quemSomos} id="form">
      <Provider>
        <div className={`${styles.flexSection} ${styles.glass}`}>
          <div className={styles.flexItem}>
            <h3>Quem somos?</h3>
            <p>Somos uma boutique de softwares fundada em outubro de 2020. O que nos motivou? O <span>amor pela tecnologia</span>, claro!</p>
            <p>Nossa missão é fazer com que a tecnologia alcance <span>todas</span> as empresas, sejam elas de <span>pequeno</span>, <span>médio</span> ou <span>grande</span> porte.</p>
            <p>Tire suas ideias do papel e conquiste seu espaço nessa nova <span>era digital</span>. Aqui, você encontra tecnologia de ponta em sites personalizados e 100% dinâmicos. Não perca mais tempo, deixe seu e-mail e entraremos em contato:</p>

            <form
              onSubmit={handleSubmit}
            >

              <InputGroup
                size="lg"
                marginTop="40px"
              >
                <Input
                  ref={inputRef}
                  onChange={e => setFormResult({...formResult, success: false, warning: false})}
                  pr="4.5rem"
                  type="text"
                  placeholder="E-mail ou telefone"
                  name="entry.1016635699"
                  color="#f1f1f1"
                />
                <InputRightElement width="34%">
                  <Button
                    size="lg"
                    variant="solid"
                    colorScheme="blue"
                    h="100%"
                    w="100%"
                    type="submit"
                    isLoading={formResult.loading}
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
      <Slide
        in={formResult.warning || formResult.success}
        direction="bottom"
        style={{ zIndex: 9 }}
      >
        <Alert status={formResult.success ? "success" : "warning"}>
          <AlertIcon />
          {formResult.message}
          <CloseButton
            onClick={e => setFormResult({ ...formResult, success: false, warning: false })}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      </Slide>
    </div>
  );
};
