"use client";
import { useProModal } from "@/hooks/use-pro-modal";
import Image from "next/image";
import { toast } from "sonner";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { useAction } from "@/hooks/use-action";
import { Dialog , DialogContent} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    execute({});
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md p-0 overflow-hidden">
        {/* <div className="aspect-video relative items-center justify-center flex">
          <Image src="/hero.svg" alt="Hero" className="object-cover" fill />
        </div> */}
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
        <div className="lg:absolute top-4 left-4 m-4 lg:m-0">
          <iframe src="https://www.loom.com/embed/882eb2cec79645d4a79175662dbee19b?sid=8de8d716-96a4-42d6-a32c-ff197718e71a" allowFullScreen></iframe>
        </div>
          <Button
            onClick={proModal.onClose}
            className="w-full"
            variant="primary"
            type="button"
          >
            close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
