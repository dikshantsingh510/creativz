import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <form className="space-y-5">
      <div className="space-y-4">
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
      </div>
      <Button type="submit" className="w-full cursor-pointer">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
