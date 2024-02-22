// AddNewUserSheet.tsx
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserFormValue } from "@/lib/validators";

interface AddNewUserSheetProps {
  onSave: (data: UserFormValue) => void;
  onClose: () => void;
  formInstance: UseFormReturn<UserFormValue>;
}

const AddNewUserSheet: React.FC<AddNewUserSheetProps> = ({
  onSave,
  onClose,
  formInstance,
}) => {
  const { handleSubmit, control } = formInstance;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add New User</Button>
      </SheetTrigger>
      <SheetContent>
        <Form
          control={formInstance.control}
          onSubmit={formInstance.handleSubmit(onSave)}
        >
          <SheetHeader>
            <SheetTitle>Add New User</SheetTitle>
            <SheetDescription>Create a new user</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4">
              <FormField name="firstName">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" />
                </FormControl>
              </FormField>
            </div>
            <div className="grid gap-4">
              <FormField name="lastName">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" />
                </FormControl>
              </FormField>
            </div>
            <div className="grid gap-4">
              <FormField name="gender">
                <FormLabel>Gender</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormField>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" onClick={onClose}>
                Cancel
              </Button>
            </SheetClose>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default AddNewUserSheet;
