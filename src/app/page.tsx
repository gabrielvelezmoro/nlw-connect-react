import { Button } from "@/components/buttons";
import { IconButton } from "@/components/icon-button";
import {
  Input,
  InputField,
  InputIcon,
  InputIconRoot,
  InputRoot,
} from "@/components/input";
import { Copy, ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField placeholder="E-mail" />
        </InputRoot>
      </div>
    </main>
  );
}
