import type { Meal } from "../types";
import { SimpleGrid } from "@chakra-ui/react";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
};

function MainContent({ meals, loading, openRecipe }: Props) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={[2, null, 3]} gap="15px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {!loading &&
        meals.map((meal) => (
          <MealCard
            openRecipe={() => openRecipe(meal)}
            key={meal.idMeal}
            meal={meal}
          />
        ))}
    </SimpleGrid>
  );
}

export default MainContent;
