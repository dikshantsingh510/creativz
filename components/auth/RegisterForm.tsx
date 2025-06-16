import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-4">
        <div className="*:not-first:mt-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Matt Welsh" type="text" required />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="hi@yourcompany.com"
            type="email"
            required
          />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
          />
        </div>
        <div className="*:not-first:mt-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
