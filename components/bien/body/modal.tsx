"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Checkbox,
  useDisclosure,
} from "@nextui-org/react";

export default function MoreInfo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" className="text-white px-6 py-3 rounded-lg self-start" onPress={onOpen}>
        Confiez-nous votre patrimoine dès aujourd&apos;hui
      </Button>

      <Modal isOpen={isOpen} placement="center" backdrop="blur" size="xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Plus d&apos;information sur l&apos;offre</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <Input type="text" label="Nom et prénom" fullWidth />
                  <Input type="email" label="Email" fullWidth />
                  <Input type="tel" label="Téléphone" fullWidth />
                  <Textarea label="Message" fullWidth minRows={4} />
                  
                  <Checkbox>
                    J&apos;ai lu et j&apos;accepte la politique de confidentialité.
                  </Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Envoyer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
