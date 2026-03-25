import { Container, Input, InputGroup } from "@chakra-ui/react";

import { IoMdSearch } from "react-icons/io";

type Props = {};

function Header({}: Props) {
  return (
    <Container mt="-5" maxW="3xl">
      <InputGroup startElement={<IoMdSearch color="gray" />}>
        <Input placeholder="Intenta con 'chiken' o 'beans' ..." />
      </InputGroup>
    </Container>
  );
}

export default Header;
