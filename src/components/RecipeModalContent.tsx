import React from "react";
import type { Meal, MealDetails } from "../types";
import { Dialog, Image, Text } from "@chakra-ui/react";
import { Heading } from "lucide-react";

type Props = {
  data: MealDetails;
};

function RecipeModalContent({ data }: Props) {
  return (
    <>
      <Dialog.Header>
        <Dialog.Title>{data.strMeal}</Dialog.Title>
      </Dialog.Header>
      <Dialog.CloseTrigger />
      <Dialog.Body>
        <Image
          width="100%"
          src={data.strMealThumb}
          alt={data.strMeal}
          borderRadius="lg"
        />
        <Text mt="4" fontWeight="bold" fontSize="md" mb={4}>
          Ingredientes
        </Text>
        <Text mt="4" whiteSpace="pre-line">
          {data.strInstructions}
        </Text>
      </Dialog.Body>
    </>
  );
}
export default RecipeModalContent;
