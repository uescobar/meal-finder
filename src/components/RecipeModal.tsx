import { Button, Dialog, Portal } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function RecipeModal({ isOpen, onClose }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Modal Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.CloseTrigger />
            <Dialog.Body>Hola mundo</Dialog.Body>
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
