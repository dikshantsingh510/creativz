import { Button } from "@/components/ui/button"
import {  IconLogout2 } from "@tabler/icons-react";


const LogoutButton = () => {
  return (
    <Button variant="ghost" className="justify-start text-destructive hover:text-destructive cursor-pointer">
      <IconLogout2 />
      Logout
    </Button>
  );
}

export default LogoutButton