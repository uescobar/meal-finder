import { Button, Container, Input, InputGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import type { SearchForm } from "../types";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  const hasError = !!formState.errors.search;

  return (
    <Container mt="-5" maxW="3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          startElement={<IoMdSearch color="gray" />}
          endElement={
            <Button type="submit" size="sm" colorPalette="blue" variant="solid">
              Buscar
            </Button>
          }
        >
          <Input
            focusBorderColor={hasError ? "crimson" : "blue.400"}
            aria-invalid={hasError}
            {...register("search", { required: true })}
            placeholder="Intenta con 'chiken' o 'beans' ..."
          />
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
