import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react";

const FideojoyComponent = () => {
  return (
    <Box
      backgroundImage="url('https://i.postimg.cc/BZycYmLF/cathedral-1066314-1280.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      py={12}
      px={8}
    >
      <VStack spacing={8} align="start" color="white">
        <Heading as="h1" size="xl" textAlign="center">
          FIDEOJOY : RÉSEAU CATHOLIQUE D'AU PAIR ET D'ÉCHANGES LINGUISTIQUES
        </Heading>
        <Text fontSize="lg" textAlign="center">
          FIDEOJOY met en relation des familles chrétiennes et des Au Pair pour proposer, dans un esprit familial et chrétien : des échanges et des séjours linguistiques aux jeunes de 12 à 17 ans, des expériences Au Pair aux jeunes de 18 ans et +
        </Text>
      </VStack>

      <Divider my={12} borderColor="white" />

      {/* Additional sections with text and icons */}
      {/* You can continue adding sections like this */}

      <VStack spacing={8} align="start" color="white">
        <Heading as="h2" size="lg">
          NOTRE MISSION
        </Heading>
        <Text fontSize="md">
          Cette expérience internationale chrétienne permet aux participants de : perfectionner une langue, s'ouvrir à une autre culture, découvrir la Foi loin de chez soi
        </Text>
        <Text fontSize="md">
          « Famille, vis la joie de la Foi » Pape François, rencontre des familles à Rome le 26 octobre 2018
        </Text>
      </VStack>

      {/* Additional sections with text and icons */}
      {/* You can continue adding sections like this */}
    </Box>
  );
}

export default FideojoyComponent;
