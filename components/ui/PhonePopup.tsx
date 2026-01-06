"use client";

import { useState } from "react";
import { Copy, Phone, Check } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PhonePopupProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    phoneNumber: string;
}

export function PhonePopup({ isOpen, onOpenChange, phoneNumber }: PhonePopupProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber.replace(/-/g, ""));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber.replace(/-/g, "")}`;
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md w-[90%] rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">ติดต่อเรา</DialogTitle>
                    <DialogDescription className="text-center">
                        เลือกช่องทางการติดต่อที่คุณต้องการ
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl mb-2">
                        <span className="text-3xl font-bold text-gray-900 tracking-wider">
                            {phoneNumber}
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full text-base h-12 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                            onClick={handleCopy}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 mr-2 text-green-600" />
                                    คัดลอกแล้ว
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 mr-2" />
                                    คัดลอกเบอร์
                                </>
                            )}
                        </Button>

                        <Button
                            size="lg"
                            className="w-full text-base h-12 bg-orange-600 hover:bg-orange-700 text-white"
                            onClick={handleCall}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            โทรออก
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
