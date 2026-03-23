import type { Meal } from "../types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

type Props = {
  meals: Meal[];
  loading: boolean;
};

function MainContent({ meals, loading }: Props) {
  console.log({ meals, loading });
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 3]} gap="15px">
      {meals.map((meal) => (
        <Card.Root key={meal.idMeal} maxW="sm" boxShadow="lg">
          <CardBody>
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              borderRadius="lg"
            />

            <Heading size="md" color="blue.400">
              <Text mt="4">{meal.strMeal}</Text>
            </Heading>
          </CardBody>
          <CardFooter pt="0">
            <Button variant="solid" color="white" bgColor="blue.400">
              Ver Receta
            </Button>
          </CardFooter>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
