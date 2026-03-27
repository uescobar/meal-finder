import React from "react";
import type { Meal, MealDetails } from "../types";
import { Dialog, Image, Text, List } from "@chakra-ui/react";

import { data } from "framer-motion/client";

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingredient !== "" && ingredient !== null) {
      ingredients.push(`${measure} - ${ingredient}`);
    }
  }
  return ingredients;
};

function RecipeModalContent({ data }: Props) {
  const ingredients = joinIngredients(data);
  console.log(ingredients);
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
        <List.Root as="ol">
          {ingredients.map((ingredient) => (
            <List.Item key={ingredient}>{ingredient}</List.Item>
          ))}
        </List.Root>
        <Text mt="4" whiteSpace="pre-line">
          {data.strInstructions}
        </Text>
      </Dialog.Body>
    </>
  );
}
export default RecipeModalContent;
