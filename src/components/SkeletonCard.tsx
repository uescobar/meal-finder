import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card.Root maxW="sm" boxShadow="lg">
      <CardBody>
        <SkeletonText mt="1" noOfLines={1} gap="4" height="220px" />
        <SkeletonText mt="4" noOfLines={2} gap="4" height="2px" />
      </CardBody>
    </Card.Root>
  );
}

export default SkeletonCard;
