"use client";
import { useAction } from "@/hooks/use-action";
import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardWithList } from "@/types";
import { Copy, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { useCardModal } from "@/hooks/use-card-modal";
import { toast } from "sonner";

interface ActionsProps {
  data: CardWithList;
}
export const Actions = ({ data }: ActionsProps) => {
  const params = useParams();
  const cardModal = useCardModal();

  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" deleted `);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const onCopy = () => {
    const boardId = params.boardId as string;

    executeCopyCard({
      id: data.id,
      boardId,
    });
  };


  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({
      id: data.id,
      boardId,
    });
  };


  
  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Copy className=" h-4 w-4 mr-2" /> Copy
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        variant="gray"
        className="w-full justify-start"
        size="inline"
      >
        <Trash className=" h-4 w-4 mr-2" /> Delete
      </Button>
    </div>
  );
};

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};

// "use client";

// import { FormSubmit } from "@/components/form/form-submit";
// import { FormTextarea } from "@/components/form/form-textarea";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { CardWithList } from "@/types";
// import { useQueryClient } from "@tanstack/react-query";
// import { AlignLeft } from "lucide-react";
// import { useParams } from "next/navigation";
// import { useState, useRef, ElementRef } from "react";
// import { useEventListener, useOnClickOutside } from "usehooks-ts";

// import { useAction } from "@/hooks/use-action";
// import { updateCard } from "@/actions/update-card";
// import { toast } from "sonner";

// interface ActionsProps {
//   data: CardWithList;
// }
// export const Actions = ({ data }: ActionsProps) => {
//   const queryClient = useQueryClient();
//   const params = useParams();

//   const [isEditing, setIsEditing] = useState(false);

//   const formRef = useRef<ElementRef<"form">>(null);
//   const textareaRef = useRef<ElementRef<"textarea">>(null);

//   const enableEditing = () => {
//     setIsEditing(true);
//     setTimeout(() => {
//       textareaRef.current?.focus();
//     });
//   };

//   const disableEditing = () => {
//     setIsEditing(false);
//   };

//   const onKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Escape") {
//       disableEditing();
//     }
//   };

//   useEventListener("keydown", onKeyDown);
//   useOnClickOutside(formRef, disableEditing);

//   const { execute, fieldErrors } = useAction(updateCard, {
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({
//         queryKey: ["card", data.id],
//       });
//       toast.success(`Card "${data.title}" updated`);
//       disableEditing();
//     },
//     onError: (error) => {
//       toast.error(error);
//     },
//   });

//   const onSubmit = (formData: FormData) => {
//     const description = formData.get("description") as string;
//     const boardId = params.boardId as string;

//     execute({
//       id: data.id,
//       description,
//       boardId
//     });
//   };
//   return (
//     <div className="flex items-start gap-x-3 w-full">
//       <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700" />
//       <div className="w-full">
//         <p className="font-semibold text-neutral-700 mb-2 ">Description</p>
//         {isEditing ? (
//           <form action={onSubmit} ref={formRef} className="space-y-2">
//             <FormTextarea
//               id="description"
//               className="w-full mt-2"
//               placeholder="Add a more detailed description"
//               defaultValue={data.description || undefined}
//               errors={fieldErrors}
//               ref={textareaRef}
//             />
//             <div className="flex items-center gap-x-2 ">
//               <FormSubmit>Save</FormSubmit>
//               <Button
//                 type="button"
//                 onClick={disableEditing}
//                 size="sm"
//                 variant="ghost"
//               >
//                 Cancel
//               </Button>
//             </div>
//           </form>
//         ) : (
//           <div
//             onClick={enableEditing}
//             role="button"
//             className="min-h-[78px] bg-neutral-200 text-sm font-medium py-3 px-3.5 rounded-md"
//           >
//             {data.description || "Add a mored detailed description..."}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
