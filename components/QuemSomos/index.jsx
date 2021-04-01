import {
  InputGroup,
  InputRightElement,
  Input,
  Button
} from '@chakra-ui/react';
import Provider from '../Provider';

import styles from './index.module.css';

export default function QuemSomos() {
  return (
    <div className={styles.quemSomos}>
      <Provider>
        <div className={`${styles.flexSection} ${styles.glass}`}>
          <div className={styles.flexItem}>
            <h3>Quem somos?</h3>
            <p>Somos uma boutique de softwares fundada em outubro de 2020. O que nos motivou? O amor pela tecnologia, claro!</p>
            <p>Nossa missão é fazer com que a tecnologia alcance todas as empresas, sejam elas de pequeno, médio ou grande porte.</p>
            <p>Tire suas ideias do papel e conquiste seu espaço nessa nova era digital. Aqui, você encontra tecnologia de ponta em sites personalizados e 100% dinâmicos. Não perca mais tempo, deixe seu e-mail e entraremos em contato:</p>

            <form>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  type="email"
                  placeholder="E-mail"
                />
                <InputRightElement width="200px">
                  <Button
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
    </div>
  );
};
