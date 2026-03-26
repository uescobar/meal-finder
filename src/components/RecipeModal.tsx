import { Button, Dialog, Portal } from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

function RecipeModal({ isOpen, onClose, loading }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <RecipeModalSkeleton />
            {/*{loading ? "skeleton" : "contenido"}*/}
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
