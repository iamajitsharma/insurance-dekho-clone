"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { closeLogin } from "@/store/slices/commonSlice";

const LoginModal = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useAppSelector((state) => state.common.isLoggedIn);

  const handleClose = () => {
    dispatch(closeLogin());
  };

  return (
    <Dialog open={isLoggedIn} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Sign in to InsuranceDekho
          </DialogTitle>
          <DialogDescription className="text-base">
            Login using your mobile number
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-3">
          <Input placeholder="Mobile Number" className="h-12" />
          <Button size={"lg"}>Continue</Button>
        </div>
        <DialogFooter className="sm:justify-start text-xs">
          <p>
            By continuing, I agree to{" "}
            <Link href="#" className="text-blue-500 font-medium">
              Terms & Conditions
            </Link>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
