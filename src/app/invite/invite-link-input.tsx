'use client'

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps {
    link: string;
}
export function InviteLinkInput({ link }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(link)
    }
    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5" />
            </InputIcon>
            <InputField
                readOnly
                defaultValue={
                    link
                }
            />
            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5' />
            </IconButton>
        </InputRoot>
    )
}