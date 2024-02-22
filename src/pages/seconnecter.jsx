import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Checkbox,
    Button,
    Box,
    Flex,
    Heading
  } from '@chakra-ui/react';
  
  function RegistrationForm() {
    return (
      <Box p={8}>
        <Heading mb={6}>INSCRIPTION</Heading>
        <Flex wrap="wrap" justifyContent="space-between">
          <FormControl id="first-name" isRequired>
            <FormLabel>Prénom</FormLabel>
            <Input placeholder="Votre prénom" />
          </FormControl>
  
          <FormControl id="last-name" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input placeholder="Votre nom" />
          </FormControl>
        </Flex>
  
        <Flex wrap="wrap" justifyContent="space-between">
          <FormControl id="email" isRequired>
            <FormLabel>Adresse email</FormLabel>
            <Input placeholder="Votre adresse email" type="email" />
          </FormControl>
  
          <FormControl id="birth-date" isRequired>
            <FormLabel>Date de naissance</FormLabel>
            <Input placeholder="Date de naissance" type="date" />
          </FormControl>
        </Flex>
  
        {/* ... other form controls for address, phone, password, etc. ... */}
  
        <FormControl id="who-are-you" isRequired>
          <FormLabel>Qui êtes-vous ?</FormLabel>
          <Select placeholder="Sélectionnez une option">
            {/* options go here */}
          </Select>
        </FormControl>
  
        <FormControl id="nationality" isRequired>
          <FormLabel>Votre nationalité</FormLabel>
          <Select placeholder="Sélectionnez votre nationalité">
            {/* options go here */}
          </Select>
        </FormControl>
  
        <FormControl id="gender" isRequired>
          <FormLabel>Votre sexe</FormLabel>
          <Select placeholder="Sélectionnez">
            <option value="female">Femme</option>
            <option value="male">Homme</option>
            {/* other options if needed */}
          </Select>
        </FormControl>
  
        <Flex wrap="wrap" justifyContent="space-between">
  <FormControl id="address" isRequired>
    <FormLabel>Adresse</FormLabel>
    <Input placeholder="Enter a location" />
  </FormControl>
  
  <Flex direction="column" flex="1">
    <FormControl id="number" isRequired>
      <FormLabel>N°</FormLabel>
      <Input placeholder="Numéro" />
    </FormControl>
    <FormControl id="street" isRequired>
      <FormLabel>Rue</FormLabel>
      <Input placeholder="Rue" />
    </FormControl>
  </Flex>
  
  <Flex direction="column" flex="1">
    <FormControl id="city" isRequired>
      <FormLabel>Ville</FormLabel>
      <Input placeholder="Ville" />
    </FormControl>
    <FormControl id="zipcode" isRequired>
      <FormLabel>Code postal</FormLabel>
      <Input placeholder="Code postal" />
    </FormControl>
  </Flex>
  
  <FormControl id="country" isRequired>
    <FormLabel>Pays</FormLabel>
    <Select placeholder="Sélectionnez votre pays">
      {/* options go here */}
    </Select>
  </FormControl>
</Flex>

<FormControl id="phone" isRequired>
  <FormLabel>Téléphone</FormLabel>
  <Input placeholder="Votre numéro de téléphone" type="tel" />
</FormControl>

<FormControl id="password" isRequired>
  <FormLabel>Mot de passe</FormLabel>
  <Input placeholder="Mot de passe" type="password" />
</FormControl>

<FormControl id="confirm-password" isRequired>
  <FormLabel>Confirmer le mot de passe</FormLabel>
  <Input placeholder="Confirmez votre mot de passe" type="password" />
</FormControl>

<FormControl id="partners-offers">
  <Checkbox>J'accepte de recevoir des offres de la part des partenaires de Fideojoy</Checkbox>
</FormControl>

<Box display="none">
  <Input placeholder="If you are a human, ignore this field" />
</Box>
<FormControl id="actions" isRequired>
          <Checkbox>Être jeune Au Pair dans une famille</Checkbox>
        </FormControl>
  
        <FormControl id="terms" isRequired>
          <Checkbox>
            J'accepte la charte de déontologie, les conditions générales d'utilisation et j'atteste sur l'honneur être majeur
          </Checkbox>
        </FormControl>
  
        <FormControl id="newsletter" isRequired>
          <Checkbox>J'accepte de recevoir la newsletter Fidelejoy</Checkbox>
        </FormControl>

<Button mt={4} colorScheme="blue" type="submit">
  S'inscrire
</Button>
      </Box>
    );
  }
  
  
export default RegistrationForm;