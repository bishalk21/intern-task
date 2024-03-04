/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table/DataTable";
import { columns } from "./utils/columns";
import { User, UserForm, UserFormValue } from "@/lib/validators";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
};

interface UserProps {
  data: User[];
  initialData?: null | undefined;
}

export const Users = ({ initialData }: UserProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState(initialState);

  const form = useForm<UserFormValue>({
    resolver: zodResolver(UserForm),
    defaultValues: initialData || {
      firstName: "",
      lastName: "",
      gender: "",
    },
  });

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSaveSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: API request to save data
    console.log("Type of e:", typeof e);

    try {
      const userId = uuidv4();
      const newUser = { ...formData, id: userId };

      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = [...existingUsers, newUser];

      // Update state and local storage
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFormData(initialState);
    } catch (error) {
      console.error("Error saving user:", error);
      // Handle error appropriately
    }
  };

  const fetchUsers = () => {
    const allUsers = localStorage.getItem("users");
    if (allUsers) {
      const parseUsers = JSON.parse(allUsers);
      return parseUsers.map((user: User, index: number) => ({
        ...user,
        ID: index,
      }));
    }
    return [];
  };

  useEffect(() => {
    setUsers(fetchUsers());
  }, []);

  const deleteUser = (userId: string) => {
    const allUsers = localStorage.getItem("users");
    if (allUsers) {
      const parsedUsers = JSON.parse(allUsers);
      const updatedUsers = parsedUsers.filter(
        (user: User) => user.id !== userId
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const deleteUserHandler = (userId: string) => {
    deleteUser(userId);

    setUsers(fetchUsers());
  };

  return (
    <Layout>
      {/* Heading  + Add new User button*/}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-left">Users</h2>
          <p className="text-sm text-muted-foreground">Manage Users</p>
        </div>

        {/* ADD NEW USER Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New User
            </Button>
          </SheetTrigger>
          <SheetContent>
            <Form {...form}>
              <form onSubmit={handleOnSaveSubmit}>
                <SheetHeader>
                  <SheetTitle>Add New User</SheetTitle>
                  <SheetDescription>Create a new user</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({
                        field,
                      }: {
                        field: {
                          onChange: (
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => void;
                          value: string;
                        };
                      }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleOnInputChange(e);
                              }}
                              placeholder="First Name"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({
                        field,
                      }: {
                        field: {
                          onChange: (
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => void;
                          value: string;
                        };
                      }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleOnInputChange(e);
                              }}
                              placeholder="Last Name"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({
                        field,
                      }: {
                        field: {
                          onChange: (value: string) => void;
                          value: string;
                        };
                      }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={(value: string) => {
                              field.onChange(value);
                              setFormData({ ...formData, gender: value }); // Update gender in formData
                            }}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  defaultValue={field.value}
                                  placeholder="Gender"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button className="w-full mt-3" type="submit">
                      Create User
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </form>
            </Form>
          </SheetContent>
        </Sheet>
      </div>

      {/*  Separator  */}
      <Separator />

      {/* User Table */}
      <DataTable columns={columns} data={users} onDelete={deleteUserHandler} />
    </Layout>
  );
};
