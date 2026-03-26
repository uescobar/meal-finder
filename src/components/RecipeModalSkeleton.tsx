import { Container, SkeletonText } from "@chakra-ui/react";
import React from "react";

type Props = {};

function RecipeModalSkeleton({}: Props) {
  return (
    <Container>
      <SkeletonText gap="4" mt="4" mb="5" noOfLines={1} height={8} />
      <SkeletonText gap="4" borderRadius={200} noOfLines={1} height={280} />
      <SkeletonText gap="4" mt="4" noOfLines={5} />
    </Container>
  );
}

export default RecipeModalSkeleton;
