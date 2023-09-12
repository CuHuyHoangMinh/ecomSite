"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const formSchema = z.object({
    name: z.string().min(1),
});


export const StoreModal = () => {
    const StoreModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories"
            isOpen={StoreModal.isOpen}
            onClose={StoreModal.onClose}>
            Future Create Store Form
        </Modal>
    );

};