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
import emailjs from 'emailjs-com';

import styles from './index.module.css';

export default function QuemSomos() {
  const inputRef = React.useRef();
  const [formResult, setFormResult] = React.useState({
    loading: false,
    message: "Nenhuma",
    success: false,
    warning: false
  });

  /* On form submit */
  const handleSubmit = async event => {

    /* Prevent for default function */
    event.preventDefault();

    /* Set loading to true */
    setFormResult({
      ...formResult,
      loading: true,
    })

    /* Verify if input have at least 3 numbers and if doesn't, return warning message */
    if (inputRef.current.value.length <= 4) {
      setFormResult({
        ...formResult,
        loading: false,
        warning: true,
        message: "Por favor, insira alguma forma de contato válida! =)"
      })
      return inputRef.current.value = "";
    }

    /* Define email Saas template */
    const templateParams = {
      email: inputRef.current.value
    };

    /* Begin fetching the service with provided template */
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER);
    emailjs.send('default_service', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, templateParams)
      .then(response => {
        console.log(response)
        setFormResult({
          ...formResult,
          message: "Muito obrigado pelo interesse! Em breve nossa equipe entrará em contato. =)",
          success: true,
          warning: false,
          loading: false,
        })
        return inputRef.current.value = "";
      })
      .catch(error => console.log(error))
  }

  return (
    <div className={styles.quemSomos} id="form">
      <Provider>
        <div className={styles.flexSection}>
          <div className={styles.flexItem}>
            <h3>Quem somos?</h3>
            <p>Somos uma boutique de softwares fundada em outubro de 2020. O que nos motivou? O <span>amor pela tecnologia</span>, claro! Nossa missão é fazer com que a tecnologia alcance <span>todas</span> as empresas, sejam elas de <span>pequeno</span>, <span>médio</span> ou <span>grande</span> porte. Tire suas ideias do papel e conquiste seu espaço nessa nova <span>era digital</span>. Aqui, você encontra tecnologia de ponta em sites personalizados e 100% dinâmicos. Não perca mais tempo, deixe seu e-mail e entraremos em contato:</p>

            <form
              onSubmit={handleSubmit}
              className={styles.glass}
            >

              <InputGroup
                size="lg"
                marginTop="0px"
                marginBottom="20px"
              >
                <Input
                  ref={inputRef}
                  onChange={e => setFormResult({ ...formResult, success: false, warning: false })}
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
