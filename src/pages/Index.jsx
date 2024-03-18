import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Input, Stack, Image, Text, FormControl, FormLabel, InputGroup, InputLeftElement, useToast } from "@chakra-ui/react";
import { FaPlaneDeparture, FaHotel, FaSearch, FaCalendarAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");

  const handleSearch = () => {
    if (!destination || !dates) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to search for your ideal vacation dates.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // Here you would integrate with your backend or API to fetch the results
    toast({
      title: "Search initiated",
      description: "We're looking for the best deals for your trip!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Flex align="center" justify="center" direction="column">
        <Image src="https://images.unsplash.com/photo-1559583109-3e7968136c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2YWNhdGlvbnxlbnwwfHx8fDE3MTA3NDQxNTN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={6} />
        <Heading as="h1" size="xl" mb={4}>
          Find Your Ideal Vacation
        </Heading>
        <Text fontSize="lg" mb={8}>
          Discover the best dates based on cheap flights and hotel availability.
        </Text>

        <Stack spacing={4} width="100%">
          <FormControl id="destination">
            <FormLabel>Destination</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaHotel color="gray.300" />} />
              <Input type="text" placeholder="Enter your destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </InputGroup>
          </FormControl>

          <FormControl id="dates">
            <FormLabel>Travel Dates</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
              <Input type="text" placeholder="e.g. 2023-07-01 to 2023-07-15" value={dates} onChange={(e) => setDates(e.target.value)} />
            </InputGroup>
          </FormControl>

          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid" onClick={handleSearch}>
            Search for Vacations
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
