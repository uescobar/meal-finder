import { Button, Dialog, Portal } from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import type { MealDetails } from "../types";
import RecipeModalContent from "./RecipeModalContent";

type Props = {
  data: MealDetails | undefined;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

function RecipeModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {loading ? (
              <RecipeModalSkeleton />
            ) : (
              data && <RecipeModalContent data={data} />
            )}
            <Dialog.Footer>
              <Button colorPalette="blue" onClick={onClose}>
                Close
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default RecipeModal;
