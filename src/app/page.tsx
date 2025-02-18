import { Button } from "@/components/buttons";
import { IconButton } from "@/components/icon-button";
import {Copy, ArrowRight} from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight/>
      </Button>
      <IconButton>
        <Copy/>
      </IconButton>
    </main>
  );
}
