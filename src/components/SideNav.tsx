import { Heading, Link, VStack } from "@chakra-ui/react";
import type { Category } from "../types";

type Props = {
  categories: Category[];
  loading: boolean;
};

const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};

function SideNav({ categories }: Props) {
  const selected = {
    strCategory: "Beef",
  };
  return (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>

      <VStack align="stretch">
        {categories.map((category) => (
          <Link
            px={2}
            py={1}
            borderRadius={5}
            key={category.strCategory}
            _hover={{ textDecoration: "none" }}
            href="#"
            {...(category.strCategory == selected.strCategory && selectedProps)}
          >
            {category.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
