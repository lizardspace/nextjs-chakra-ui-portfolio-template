import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaFacebook, FaGoogle } from 'react-icons/fa';
  
  function LoginForm() {
    const buttonBg = useColorModeValue('blue.600', 'blue.200');
    const buttonColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Text fontSize="2xl" textAlign="center" mb={8}>CONNEXION</Text>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Adresse email</FormLabel>
            <Input type="email" placeholder="Entrez votre adresse email" />
          </FormControl>
  
          <FormControl isRequired>
            <FormLabel>Mot de passe</FormLabel>
            <Input type="password" placeholder="Entrez votre mot de passe" />
          </FormControl>
  
          <Button colorScheme="blue" variant="solid">
            Se connecter
          </Button>
  
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" variant="solid">
            Se connecter avec Facebook
          </Button>
  
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="solid">
            Se connecter avec Google
          </Button>
  
          <Stack pt={6} direction={'row'} spacing={4} align={'center'}>
            <Link color={buttonBg}>Mot de passe oublié</Link>
            <Link color={buttonBg}>Créer un compte</Link>
          </Stack>
        </Stack>
      </Box>
    );
  }
  
  export default LoginForm;
  